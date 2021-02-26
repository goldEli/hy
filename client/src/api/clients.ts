import { http } from '@/utils/http';

export const API_CLIENTS_LIST = '/api/clients/list';
export interface IClient {
  id: string;
  name: string;
}

export const getClients = () => http(API_CLIENTS_LIST);
