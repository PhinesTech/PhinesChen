export type Token = {
  tokenType: String;
  accessToken: String;
  refreshToken: String;
  expiresIn: String;
}

export type User = {
  id: String;
  name: String;
  email: String;
  donatedFood: Array<String>;
  requestedFood: Array<String>;
  role: String;
}

type Address = {
  street: String;
  city: String;
  zip: Number;
}

export type RequestFormProps = {
  token: Token;
  user: User;
};

export type RequestFormState = {
  householdSize: Number;
  dietaryRestrictions: String;
  allergies: String;
  address: Address;
};
