export interface UserCreate {
    first_name: string;
    last_name: string;
    birth_date: string;
    email: string;
    phone?: string;
}

export interface UserResponse extends UserCreate {
    id: number;
}