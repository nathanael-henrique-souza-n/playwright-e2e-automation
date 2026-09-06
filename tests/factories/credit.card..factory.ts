import { faker } from "@faker-js/faker";
import type { card_data } from "../interfaces/card";

export function validCard(overrides: Partial<card_data> = {}): card_data {
  return {
    nameCard: faker.person.fullName(),
    numberCard: faker.finance.creditCardNumber(),
    cvcCard: faker.finance.creditCardCVV(),
    expirationMonthCard: 12,
    expirationYearCard: 2030,
    ...overrides,
  };
}
