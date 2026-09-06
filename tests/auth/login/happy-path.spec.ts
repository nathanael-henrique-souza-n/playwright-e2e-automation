import { test, expect } from "@playwright/test";
import { LoginPage } from "../POM/login.page";

import user from "../fixtures/users.json" with { type: "json" };

test.describe("Happy Path", () => {
  test.describe("Positive scenarios", () => {
    test("BR-001 - User should be able to login with valid credentials", async ({
      page,
    }) => {});
  });
});
