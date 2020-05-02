export type Token = {
    tokenType: string;
    accessToken: string;
    refreshToken: string;
    expiresIn: string;
};

export type User = {
    id: string;
    name: string;
    companyName: string;
    email: string;
    donatedFood: Array<string>;
    requestedFood: Array<string>;
    role: string;
};

type Address = {
    street: string;
    city: string;
    zip: Number;
};

export type RequestFormProps = {
    token: Token;
    user: User;
    location: any;
};

export type RequestFormState = {
    specificRequest: string;
    householdSize: Number;
    dietaryRestrictions: string;
    allergies: string;
    address: Address;
};
