import React from 'react';
import { Button, Modal, Toast } from 'antd-mobile';
import { http } from '@/utils/http';
import { useQueryClient } from "react-query";
import { API_CLIENTS_LIST } from '@/api/clients';
const { prompt } = Modal;

interface IAddButtonProps {}

const AddButton: React.FC<IAddButtonProps> = (props) => {
  const queryClient = useQueryClient()
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
                  http('/api/clients/add', {
                    method: 'post',
                    data: { name: value },
                  })
                    .then(() => {
                      Toast.info('新增成功');
                      queryClient.invalidateQueries(API_CLIENTS_LIST)
                      resolve(value);
                    })
                    .catch((message) => {
                      // Toast.hide()
                      Toast.fail(message);
                      reject();
                    });
                }),
            },
          ],
          'default',
          "",
          ['用户名称'],
        )
      }
    >
      新增
    </Button>
  );
};

export default AddButton;
