import type { Page } from "@playwright/test";

import type { user_login } from "../interfaces/user.login.interface";

class LoginPage {
  constructor(private page: Page) {}

  async login(User: user_login) {
    await this.page.locator('input[id="Email"]').fill(User.email);
    await this.page.locator('input[id="Password"]').fill(User.password);
    await this.page.locator(".button-1.login-button").click();
  }
}
