import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

import type { user_register } from "../interfaces/user.register.interfaces";

export class registerPage {
  constructor(private page: Page) {}

  async register(User: user_register) {
    await this.page.locator(`input[value="${User.title}"]`).check();
    await expect(this.page.locator(".button-1.register-button")).toBeVisible();
    await this.page.locator(".button-1.register-button").click();

    await this.page.locator('[inputid="FirstName"]').fill(User.firstName);
    await this.page.locator('[inputid="LastName"]').fill(User.lastName);
    await this.page.locator('[inputid="Email"]').fill(User.email);
    await this.page.locator('input[id="Company"]').fill(User.company);
    await this.page.locator('input[id="Password"]').fill(User.password);
    await this.page.locator('input[id="ComfirmPassword"]').fill(User.password);

    await expect(this.page.locator(".button-1.register-button")).toBeVisible();
    await this.page.locator(".button-1.register-next-step-button").click();
  }
}
