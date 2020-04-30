export type StorageProps = {
  storage: Array<Object>;
}

export type StorageState = {
  currentStorage: Array<Object>;
  currentPage: number;
  totalPages: number;
};

export type StorageModel = {
    id: string | number | undefined,
    product_name: string,
    product_amount: number,
    product_group: string,
    distribution_to: string,
    distribution_from: string,
    expiration_date: string,
    pack_date: string,
    sell_by_date: string,
    use_by_date: string,
}
