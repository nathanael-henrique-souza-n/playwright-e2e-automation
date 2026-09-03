import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

import user from "../../fixtures/users.json";

type registerResult = "registered" | "email-exists";
type LoginResult = "logged" | "account-not-found";

const errors = {
  loginError:
    "Login was unsuccessful. Please correct the errors and try again. No customer account found",
  registerError: "The specified email already exists",
};

export async function register(page: Page): Promise<registerResult> {
  await expect(page.locator(".button-1.register-button")).toBeVisible();
  await page.locator(".button-1.register-button").click();

  await page.locator('input[id="FirstName"]').fill(user.register["first-name"]);
  await page.locator('input[id="LastName"]').fill(user.register["last-name"]);
  await page.locator('input[id="Email"]').fill(user.register.email);
  await page.locator('input[id="Company"]').fill(user.register.companyName);
  await page.locator('input[id="Password"]').fill(user.register.Password);
  await page
    .locator('input[id="ComfirmPassword"]')
    .fill(user.register.Password);

  await expect(page.locator(".button-1.register-button")).toBeVisible();
  await page.locator(".button-1.register-next-step-button").click();

  if (await page.locator(errors.registerError).isVisible()) {
    return "email-exists";
  } else {
    await expect(page.locator(".ico-logout")).toBeVisible();
    return "registered";
  }
}

export async function login(page: Page): Promise<LoginResult> {
  await page.locator('input[id="Email"]').fill(user.login.email);
  await page.locator('input[id="Password"]').fill(user.login.password);
  await page.locator(".button-1.login-button").click();

  if (await page.locator(errors.loginError).isVisible()) {
    return "account-not-found";
  } else {
    await expect(page.locator(".ico-logout")).toBeVisible();
    return "logged";
  }
}
