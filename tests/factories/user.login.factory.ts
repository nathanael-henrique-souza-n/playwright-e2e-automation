import type { user_login } from "../interfaces/user.login.interface";
import validUserLogin from "../fixtures/users.json";

export function userLogin(overrider: Partial<user_login> = {}) {
  return {
    email: validUserLogin.login.email,
    password: validUserLogin.login.password,
    ...overrider,
  };
}
