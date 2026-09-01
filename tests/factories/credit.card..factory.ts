import { faker } from "@faker-js/faker";
import type { card } from "../interfaces/card";

export function card(overrider: Partial<card> = {}) {
  return {
    credit_card: faker.helpers.arrayElement([
      "Visa",
      "Master card",
      "Discover",
      "Amex",
    ]),
    cardholder_name: faker.person.fullName(),
    card_number: faker.finance.creditCardNumber(),
    expiration_data: {
      month: faker.helpers.arrayElement([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      ]),
      years: faker.helpers.arrayElement([
        2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
      ]),
    },
    card_code: faker.number.int({ min: 100, max: 999 }),
    ...overrider,
  };
}
