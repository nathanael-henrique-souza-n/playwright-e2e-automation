import { faker } from "@faker-js/faker";
import type { checkout } from "../interfaces/checkout.interface";

export function checkoutFactory(overrider: Partial<checkout> = {}) {
  return {
    country: faker.helpers.arrayElement(["Brazil"]),
    State_province: faker.helpers.arrayElement(["New Yourk"]),
    city: faker.location.city(),
    Address1: faker.location.streetAddress(),
    Address2: faker.location.secondaryAddress(),
    Zip_postalCode: faker.location.zipCode(),
    PhoneNumber: faker.phone.number(),
    faxNumber: faker.phone.number(),

    shipping_method: faker.helpers.arrayElement([
      "Ground ($0.00)",
      "Next Day Air ($0.00)",
      "2nd Day Air ($0.00)",
    ]),
    ...overrider,
  };
}
