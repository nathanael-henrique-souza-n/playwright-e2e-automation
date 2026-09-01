export interface card {
  credit_card: "Visa" | "Master card" | "Discover" | "Amex";
  cardholder_name: string;
  card_number: number;
  expiration_data: {
    month: number;
    years: number;
  };
  card_code: number;
}
