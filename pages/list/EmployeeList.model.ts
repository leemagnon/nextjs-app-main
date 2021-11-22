export interface EmployeeListRequestParams {
    page: number;
    limit: 20;
}

export interface EmployeeListResponse {
    data: EmployeeInfo[];
    total: number;
}

export interface EmployeeInfo {
    id: string;
    email: string;
    no: string;
    is_bannded: boolean;
}