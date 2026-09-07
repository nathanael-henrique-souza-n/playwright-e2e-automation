import type { Page } from "@playwright/test";

import { LoginPage } from "../../POM/login.page";
import type { user_login } from "../../interfaces/user.login.interface";

export async function login(page: Page, user: user_login) {
  const login = new LoginPage(page);

  await login.login(user);
}
