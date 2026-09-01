import { Page, expect } from "@playwright/test";

import { user_register } from "../interfaces/user.register.interfaces";

class name {
  constructor(private page: Page) {}

  async register(User: user_register) {
    await this.page.locator(`input[value="${User.gender}"]`).check();
    await expect(this.page.locator(".button-1.register-button")).toBeVisible();
    await this.page.locator(".button-1.register-button").click();

    await this.page.locator('input[id="FirstName"]').fill(User.firstName);
    await this.page.locator('input[id="LastName"]').fill(User.lastName);
    await this.page.locator('input[id="Email"]').fill(User.Email);
    await this.page.locator('input[id="Company"]').fill(User.companyName);
    await this.page.locator('input[id="Password"]').fill(User.Password);
    await this.page.locator('input[id="ComfirmPassword"]').fill(User.Password);

    await expect(this.page.locator(".button-1.register-button")).toBeVisible();
    await this.page.locator(".button-1.register-next-step-button").click();
  }
}
