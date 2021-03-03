import { IResponse } from 'src/interfaces/response.interface';
interface IParam {
  data?: any;
  message?: string;
  status?: number;
}
export const successResponse = (options?: IParam) => {
  const { data, message, status } = options;
  const res: IResponse<any> = {
    data: data || {},
    message: message || 'success',
    status: status || 200,
  };
  return res;
};

export const errorResponse = (options?: IParam) => {
  const { data, message, status } = options;
  const res: IResponse<any> = {
    data: data || {},
    message: message || 'error',
    status: status || 500,
  };
  return res;
};
