export type Token = {
  tokenType: String;
  accessToken: String;
  refreshToken: String;
  expiresIn: String;
}

export type User = {
  id: String;
  name: String;
  companyName: String;
  email: String;
  donatedFood: Array<String>;
  requestedFood: Array<String>;
  role: String;
}

export type DonateFormProps = {
  token: Token;
  user: User;
  location: any;
};

export type DonateFormState = {
  companyName: String;
  mailingAddress: String;
  reasonForDonaation: String;
  storageRequirements: String;
  quantity: Number;
  contactName: String;
  phoneNumber: String;
  productDescription: String;
  packagingDetails: String;
  listOfIngredients: String;
};
