import { test, expect } from "@playwright/test";

import { RegisterUser } from "../../factories/user.register.factory";
import { register } from "../../helper/auth/register";

test.describe("validations", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test.describe("Negative scenarios", () => {
    test.describe("ST-004 - Register a user with a required field empty", () => {
      const emptyFieldCases = [
        {
          label: "name",
          selector: '[data-qa="signup-name"]',
          step: "signup",
          fillValue: "name",
        },
        {
          label: "email",
          selector: '[data-qa="signup-email"]',
          step: "signup",
          fillValue: "email",
        },
        {
          label: "password",
          selector: '[data-qa="password"]',
          step: "account",
          skipField: "password",
        },
        {
          label: "first name",
          selector: '[data-qa="first_name"]',
          step: "account",
          skipField: "firstName",
        },
        {
          label: "last name",
          selector: '[data-qa="last_name"]',
          step: "account",
          skipField: "lastName",
        },
        {
          label: "address",
          selector: '[data-qa="address"]',
          step: "account",
          skipField: "address",
        },
        {
          label: "state",
          selector: '[data-qa="state"]',
          step: "account",
          skipField: "state",
        },
        {
          label: "city",
          selector: '[data-qa="city"]',
          step: "account",
          skipField: "city",
        },
        {
          label: "zipcode",
          selector: '[data-qa="zipcode"]',
          step: "account",
          skipField: "zipCode",
        },
        {
          label: "mobile number",
          selector: '[data-qa="mobile_number"]',
          step: "account",
          skipField: "mobileNumber",
        },
      ];

      for (const testCase of emptyFieldCases) {
        test(`Empty ${testCase.label} field`, async ({ page }) => {
          const user = RegisterUser();

          if (testCase.step === "signup") {
            const name = testCase.label === "name" ? "" : user.name;
            const email = testCase.label === "email" ? "" : user.email;

            await page.locator('[data-qa="signup-name"]').fill(name);
            await page.locator('[data-qa="signup-email"]').fill(email);
            await page.locator('[data-qa="signup-button"]').click();

            const isMissing = await page
              .locator(testCase.selector)
              .evaluate(
                (element: HTMLInputElement) => element.validity.valueMissing,
              );

            expect(isMissing).toBe(true);
            return;
          }

          await page.locator('[data-qa="signup-name"]').fill(user.name);
          await page.locator('[data-qa="signup-email"]').fill(user.email);
          await page.locator('[data-qa="signup-button"]').click();

          await register(page, user, [testCase.skipField as string]);

          const isMissing = await page
            .locator(testCase.selector)
            .evaluate(
              (element: HTMLInputElement) => element.validity.valueMissing,
            );

          expect(isMissing).toBe(true);
        });
      }
    });
  });
});
