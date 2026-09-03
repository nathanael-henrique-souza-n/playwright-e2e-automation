import type { Page } from "@playwright/test";

import { register, login } from "./custom.commands";

export async function registerOrLogin(page: Page) {
  let result = await login(page);

  if (result === "account-not-found") {
    await register(page);
  }
}
