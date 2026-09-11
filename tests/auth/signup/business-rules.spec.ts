import { test, expect } from "@playwright/test";

import { RegisterUser } from "../../factories/user.register.factory";
import user from "../../fixtures/users.json" with { type: "json" };

test.describe("Business rules", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test.describe("Negative scenarios", () => {
    test("BR-002 - Signup with an existing email", async ({ page }) => {
      let userRegister = RegisterUser({ email: user.email });

      await page.locator('[data-qa="signup-name"]').fill(user.name);
      await page.locator('[data-qa="signup-email"]').fill(user.email);
      await page.locator('[data-qa="signup-button"]').click();

      await await expect(
        page.getByText("Email Address already exist!"),
      ).toBeVisible();
    });
  });
});
