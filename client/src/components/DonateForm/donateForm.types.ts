export type Token = {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
}

export type User = {
  id: string;
  name: string;
  companyName: string;
  email: string;
  donatedFood: Array<string>;
  requestedFood: Array<string>;
  role: string;
}

export type DonateFormProps = {
  token: Token;
  user: User;
  location: any;
};

export type DonateFormState = {
  company_name: string;
  mailing_address: string;
  reason_for_donation: string;
  storage_requirements: string;
  product_quantity: Number;
  contact_name: string;
  phone_number: string;
  product_name: string;
  product_description: string;
  packaging_details: string;
  list_of_ingredients: string;
};
