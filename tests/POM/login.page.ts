import type { Page } from "@playwright/test";
import type { user_login } from "../interfaces/user.login.interface";

export class LoginPage {
  constructor(private page: Page) {}

  async login(User: user_login) {
    await this.page.locator('[data-qa="login-email"]').fill(User.email);
    await this.page.locator('[data-qa="login-password"]').fill(User.password);
    await this.page.locator('[data-qa="login-button"]').click();
  }
}
