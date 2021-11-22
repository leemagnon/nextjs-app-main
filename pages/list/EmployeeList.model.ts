export type EmployeeListRequestParams = {
    page: number;
    limit: 20;
}

export type EmployeeListResponse = {
    data: EmployeeInfo[];
    total: number;
}

export type EmployeeInfo = {
    id: string;
    email: string;
    no: string;
    is_bannded: boolean;
}