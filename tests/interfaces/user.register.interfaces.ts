import type { Birth_date } from "./birth_date";

export interface user_register {
  title: "Mr" | "Mrs";
  name: string;
  email: string;
  password: string;
  birthdata: Birth_date;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  mobileNumber: string;
}
