import type { user_login } from "../interfaces/user.login.interface";
import { faker } from "@faker-js/faker";

export function userLogin(overrider: Partial<user_login> = {}) {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    ...overrider,
  };
}
