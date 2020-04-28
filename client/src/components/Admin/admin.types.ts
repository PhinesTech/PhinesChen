export type AdminProps = {
  requests: Array<Object>;
  donations: Array<Object>;
}

export type DonationModel = {
    id: string | number | undefined,
    companyName: string,
    mailingAddress: string,
    reasonForDonation: string,
    storageRequirements: string,
    quantity: number,
    contactName: string,
    phoneNumber: string,
    productDescription: string,
    packagingDetails: string,
    listOfIngredients: string,
}
