import type { Page } from "@playwright/test";
import type { user_register } from "../../interfaces/user.register.interfaces";

export async function fillRegistrationForm(
  page: Page,
  user: user_register,
  skipFields: string[] = [],
) {
  if (!skipFields.includes("title")) {
    await page.locator(`input[name="title"][value="${user.title}"]`).check();
  }

  if (!skipFields.includes("password")) {
    await page.locator('[data-qa="password"]').fill(user.password);
  }

  if (!skipFields.includes("birthDay")) {
    await page.locator('[data-qa="days"]').selectOption(user.birthdata.day);
  }

  if (!skipFields.includes("birthMonth")) {
    await page.locator('[data-qa="months"]').selectOption(user.birthdata.month);
  }

  if (!skipFields.includes("birthYear")) {
    await page.locator('[data-qa="years"]').selectOption(user.birthdata.year);
  }

  if (!skipFields.includes("firstName")) {
    await page.locator('[data-qa="first_name"]').fill(user.firstName);
  }

  if (!skipFields.includes("lastName")) {
    await page.locator('[data-qa="last_name"]').fill(user.lastName);
  }

  if (!skipFields.includes("company")) {
    await page.locator('[data-qa="company"]').fill(user.company);
  }

  if (!skipFields.includes("address")) {
    await page.locator('[data-qa="address"]').fill(user.address);
  }

  if (!skipFields.includes("address2")) {
    await page.locator('[data-qa="address2"]').fill(user.address2);
  }

  if (!skipFields.includes("country")) {
    await page.locator('[data-qa="country"]').selectOption(user.country);
  }

  if (!skipFields.includes("state")) {
    await page.locator('[data-qa="state"]').fill(user.state);
  }

  if (!skipFields.includes("city")) {
    await page.locator('[data-qa="city"]').fill(user.city);
  }

  if (!skipFields.includes("zipCode")) {
    await page.locator('[data-qa="zipcode"]').fill(user.zipCode);
  }

  if (!skipFields.includes("mobileNumber")) {
    await page.locator('[data-qa="mobile_number"]').fill(user.mobileNumber);
  }
}
