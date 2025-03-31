export interface Columns {
    field: string;
    header: string;
}

export interface Pagination {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}