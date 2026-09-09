import type { Page } from "@playwright/test";

import { RegisterPage } from "../../POM/register.page";

import type { user_register } from "../../interfaces/user.register.interfaces";

export async function register(
  page: Page,
  user: user_register,
  skipFields: string[] = [],
) {
  const registerPage = new RegisterPage(page);

  await registerPage.fillRegistrationForm(user, skipFields);
}
