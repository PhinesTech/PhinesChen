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
  companyName: string;
  mailingAddress: string;
  reasonForDonaation: string;
  storageRequirements: string;
  quantity: Number;
  contactName: string;
  phoneNumber: string;
  productDescription: string;
  packagingDetails: string;
  listOfIngredients: string;
};
