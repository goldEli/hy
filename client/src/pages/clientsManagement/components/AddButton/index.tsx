import React from 'react';
import { Button, Modal, Toast } from 'antd-mobile';
import { useMutation, useQueryClient } from 'react-query';
import { addClient, API_CLIENTS_LIST, IClient } from '@/api/clients';
const { prompt } = Modal;

interface IAddButtonProps {}

const AddButton: React.FC<IAddButtonProps> = (props) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(addClient);
  return (
    <Button
      type="primary"
      onClick={() =>
        prompt(
          '新增',
          '请输入用户名称',
          [
            { text: '取消' },
            {
              text: '确定',
              onPress: (value) =>
                new Promise((resolve, reject) => {
                  Toast.loading('请稍后...', 30);
                  mutation
                    .mutateAsync({ name: value })
                    .then((data: IClient) => {
                      Toast.info('新增成功', 1);
                      const prev = queryClient.getQueryData<IClient[]>(
                        API_CLIENTS_LIST,
                      );
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
                }),
            },
          ],
          'default',
          '',
          ['用户名称'],
        )
      }
    >
      新增
    </Button>
  );
};

export default AddButton;
