import { http } from '@/utils/http';

export const API_CLIENTS_LIST = '/api/clients/list';
export const API_CLIENTS_ADD = '/api/clients/add'
export interface IClient {
  id: string;
  name: string;
}

export const getClients = () => http(API_CLIENTS_LIST);

export const addClient = (data: Pick<IClient, "name">) => http(API_CLIENTS_ADD, {method: "post", data})
