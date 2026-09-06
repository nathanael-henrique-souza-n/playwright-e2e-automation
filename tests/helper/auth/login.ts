import type { Page } from "@playwright/test";
import { userLogin } from "../../factories/user.login.factory";
import user from "../../fixtures/users.json" with { type: "json" };

export async function login(page: Page, overrider = {}) {
  const data = {
    email: user.email,
    password: user.password,
    ...overrider,
  };
  await page.locator('[data-qa="login-email"]').fill(data.email);

  await page.locator('[data-qa="login-password"]').fill(data.password);

  await page.locator('[data-qa="login-button"]').click();
}
