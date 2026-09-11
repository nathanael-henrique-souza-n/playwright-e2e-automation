import { test, expect } from "@playwright/test";

import { RegisterUser } from "../../factories/user.register.factory";
import { register } from "../../helper/auth/register";

test.describe("Happy Path", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test.describe("Positive scenarios", () => {
    test("BR-001 - Register a new user with valid data successfully", async ({
      page,
    }) => {
      let accountCreated = [
        { element: '[data-qa="account-created"]', text: "Account Created!" },
        {
          element: "p",
          text: "Congratulations! Your new account has been successfully created!",
        },
        {
          element: "p",
          text: "You can now take advantage of member privileges to enhance your online shopping experience with us.",
        },
      ];

      const registerUser = RegisterUser();

      await page.locator('[data-qa="signup-name"]').fill(registerUser.name);
      await page.locator('[data-qa="signup-email"]').fill(registerUser.email);
      await page.locator('[data-qa="signup-button"]').click();
      await register(page, registerUser);

      for (let index of accountCreated) {
        const element = page
          .locator(index.element)
          .filter({ hasText: index.text });

        await expect(element).toBeVisible();
        await expect(element).toContainText(index.text);
      }
    });
  });
});
