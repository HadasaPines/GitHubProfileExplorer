export interface ApiError {
  message: string;
  status: number;
  documentation_url?: string;
}

export type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: ApiError };
