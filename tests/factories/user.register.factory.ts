import { faker } from "@faker-js/faker";
import type { user_register } from "../interfaces/user.register.interfaces";

export function userRegister(overrider: Partial<user_register> = {}) {
  return {
    gender: faker.helpers.arrayElement(["Male", "Female"]),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    company_name: faker.company.name(),
    password: faker.internet.password(),
    ...overrider,
  };
}
