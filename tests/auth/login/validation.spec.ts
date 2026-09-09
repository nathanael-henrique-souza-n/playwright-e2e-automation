import { test, expect } from "@playwright/test";

import { userLogin } from "../../factories/user.login.factory";
import { login } from "../../helper/auth/login";

test.describe("validations", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test.describe("Negative scenarios", () => {
    test.describe("ST-001 - Login with invalid email and password", () => {
      test("Invalid-email", async ({ page }) => {
        const user = userLogin({ email: "Invalid-email" });

        await login(page, user);

        const messageErrorElement = await page
          .locator('[data-qa="login-email"]')
          .evaluate(
            (element: HTMLInputElement) => element.validity.typeMismatch,
          );
      });

      test("Invalid-password", async ({ page }) => {
        const user = userLogin({ password: "123" });

        await login(page, user);

        await expect(
          await page.getByText("Your email or password is incorrect!"),
        ).toBeVisible();
      });
    });

    test("ST-002 - Login with an empty email field", async ({ page }) => {
      const user = userLogin({ email: "" });

      await login(page, user);

      const messageErrorElement = await page
        .locator('[data-qa="login-email"]')
        .evaluate((element: HTMLInputElement) => element.validity.valueMissing);

      expect(messageErrorElement).toBe(true);
    });

    test("ST-003 - Login with an empty password field", async ({ page }) => {
      const user = userLogin({ password: "" });

      await login(page, user);

      const messageErrorElement = await page
        .locator('[data-qa="login-password"]')
        .evaluate((element: HTMLInputElement) => element.validity.valueMissing);

      expect(messageErrorElement).toBe(true);
    });
  });
});
