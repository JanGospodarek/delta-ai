export interface IResponse<T> {
  status: 'success' | 'error';
  message?: string;
  data?: T;
}
