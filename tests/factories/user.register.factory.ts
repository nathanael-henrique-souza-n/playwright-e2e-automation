import { faker } from "@faker-js/faker";
import type { user_register } from "../interfaces/user.register.interfaces";

export function RegisterUser(
  overrides: Partial<user_register> = {},
): user_register {
  return {
    title: faker.helpers.arrayElement(["Mr", "Mrs"]),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: "Password@123",

    birthdata: {
      day: "15",
      month: "5",
      year: "2000",
    },

    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),

    company: faker.company.name(),
    address: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),

    country: faker.helpers.arrayElement([
      "India",
      "United States",
      "Canada",
      "Australia",
      "Israel",
      "New Zealand",
      "Singapore",
    ]),
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    mobileNumber: faker.phone.number(),
    ...overrides,
  };
}
