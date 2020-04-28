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

export type DashboardProps = {
  token: Token;
  user: User;
  location: any;
};

export type DashboardState = {
  dashboard: string;
  storage: Array<Object>;
  requests: Array<Object>;
  donations: Array<Object>;
};
