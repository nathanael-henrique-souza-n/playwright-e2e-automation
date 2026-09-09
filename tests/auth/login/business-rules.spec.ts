import { test, expect } from "@playwright/test";

import { userLogin } from "../../factories/user.login.factory";
import { login } from "../../helper/auth/login";

test.describe("Negative scenarios", () => {
  test("BR-002 - User cannot log in with unregistered credential", async ({
    page,
  }) => {
    let unregisteredUser = userLogin();
    await login(page, unregisteredUser);

    await expect(
      await page.getByText("Your email or password is incorrect!"),
    ).toBeVisible();
  });
});
