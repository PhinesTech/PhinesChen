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

export type ProfileProps = {
  token: Token;
  user: User;
  location: any;
};
