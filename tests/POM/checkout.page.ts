import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

import type { checkout } from "../interfaces/checkout.interface";

class CheckoutPage {
  constructor(private page: Page) {}

  async Checkout(Checkout: checkout) {
    await this.page
      .locator('select[data-trigger="country-select"]')
      .selectOption(Checkout.country);

    await this.page
      .locator('select[data-trigger="state-select"]')
      .selectOption(Checkout.State_province);

    await this.page
      .locator('input[id="BillingNewAddress_City"]')
      .fill(Checkout.city);

    await this.page
      .locator('input[id="BillingNewAddress_Address1"]')
      .fill(Checkout.Address1);

    await this.page
      .locator('input[id="BillingNewAddress_Address2"]')
      .fill(Checkout.Address2);

    await this.page
      .locator('input[id="BillingNewAddress_ZipPostalCode"]')
      .fill(Checkout.Zip_postalCode);

    await this.page
      .locator('input[id="BillingNewAddress_PhoneNumber"]')
      .fill(Checkout.PhoneNumber.toString());

    await this.page
      .locator("input[BillingNewAddress_FaxNumber]")
      .fill(Checkout.faxNumber.toString());

    await this.page.locator(".method-list");
  }
}
