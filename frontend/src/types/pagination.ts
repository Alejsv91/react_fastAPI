export interface PaginationParams {
    page?: number;
    size?: number;
}

export interface PaginationResponse<T> {
    items: T[];
    total: number;
    page: number;
    size: number
}