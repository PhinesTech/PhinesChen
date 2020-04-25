export type PaginationProps = {
    totalRecords: Number;
    pageLimit: Number;
    pageNeighbours: number;
    onPageChanged: Function;
};

export type PaginationState = {
    pageLimit: Number;
    totalRecords: Number;
    pageNeighbours: Number;
    totalPages: Number;
    currentPage: Number;
};
