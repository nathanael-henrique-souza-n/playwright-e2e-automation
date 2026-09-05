import { test, expect } from "@playwright/test";
import { registerOrLogin } from "../helper/auth/register_Or_login";

test.describe("Happy Path", () => {
  test.describe("Positive scenarios", () => {
    test("BR-001 - User should be able to login with valid credentials", async ({
      page,
    }) => {
      await page.goto("/");
      await page.waitForTimeout(15_000);
      await registerOrLogin(page);

      console.log(await page.title());
      console.log(page.url());
    });
  });
});
