import { http } from '@/utils/http';
import { Toast } from 'antd-mobile';
import { useMutation, useQueryClient } from 'react-query';

export const API_CLIENTS_LIST = '/api/clients/list';
export const API_CLIENTS_ADD = '/api/clients/add';
export const API_CLIENTS_DEL = '/api/clients/del';
export const API_CLIENTS_UPDATE = '/api/clients/update';
export interface IClient {
  id: string;
  name: string;
}

export const getClients = () => http(API_CLIENTS_LIST);
export const addClient = (data: Pick<IClient, 'name'>) =>
  http(API_CLIENTS_ADD, { method: 'post', data });
export const delClient = (data: Pick<IClient, 'id'>) =>
  http(API_CLIENTS_DEL, { method: 'post', data });
export const updateClient = (data: IClient) =>
  http(API_CLIENTS_UPDATE, { method: 'post', data });

export function useAddClient() {
  const queryClient = useQueryClient();
  const mutation = useMutation(addClient);

  function add(value: string) {
    Toast.loading('请稍等...', 30);
    return new Promise((resolve, reject) => {
      mutation
        .mutateAsync({ name: value })
        .then((data: IClient) => {
          const prev = queryClient.getQueryData<IClient[]>(API_CLIENTS_LIST);
          if (prev) {
            queryClient.setQueryData<IClient[]>(API_CLIENTS_LIST, [
              ...prev,
              data,
            ]);
          }
          // Toast.success('新增成功', 1);
          Toast.hide();
          resolve(value);
        })
        .catch((data) => {
          Toast.success('新增失败');
          reject();
        });
    });
  }

  return { add };
}

export function useDelClient() {
  const queryClient = useQueryClient();
  const mutation = useMutation(delClient);

  function del(id: string) {
    const prev = queryClient.getQueryData<IClient[]>(API_CLIENTS_LIST);
    if (prev) {
      queryClient.setQueryData<IClient[]>(
        API_CLIENTS_LIST,
        prev.filter((item) => item.id !== id),
      );
    }
    mutation.mutateAsync({ id });
  }

  return { del };
}

export function useUpdateClient() {
  const queryClient = useQueryClient();
  const mutation = useMutation(updateClient);

  function update(data: IClient) {
    const prev = queryClient.getQueryData<IClient[]>(API_CLIENTS_LIST);
    if (prev) {
      queryClient.setQueryData<IClient[]>(
        API_CLIENTS_LIST,
        prev.map((item) => ({
          ...item,
          name: data.id === item.id ? data.name : item.name,
        })),
      );
    }
    mutation.mutate(data);
  }

  return { update };
}
