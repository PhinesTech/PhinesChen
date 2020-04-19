
type Address = {
  street: String;
  city: String;
  zip: Number;
}

export type RequestFormProps = {
  userId: String;
  accessToken: String;
};

export type RequestFormState = {
  householdSize: Number;
  dietaryRestrictions: String;
  allergies: String;
  address: Address;
};
