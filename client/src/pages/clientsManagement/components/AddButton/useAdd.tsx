import { addClient, API_CLIENTS_LIST, IClient } from '@/api/clients';
import { Toast } from 'antd-mobile';
import { useMutation, useQueryClient } from 'react-query';

export default function useAdd() {
  const queryClient = useQueryClient();
  const mutation = useMutation(addClient);

  function add(value: string) {
    return new Promise((resolve, reject) => {
      Toast.loading('请稍后...', 30);
      mutation
        .mutateAsync({ name: value })
        .then((data: IClient) => {
          Toast.info('新增成功', 1);
          const prev = queryClient.getQueryData<IClient[]>(API_CLIENTS_LIST);
          if (prev) {
            queryClient.setQueryData<IClient[]>(API_CLIENTS_LIST, [
              ...prev,
              data,
            ]);
          }
          resolve(value);
        })
        .catch((data) => {
          Toast.fail(typeof data === 'string' ? data : '新增失败');
          reject();
        });
    });
  }

  return { add };
}
