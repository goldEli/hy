import React from 'react';
import { Button, List, Modal, Icon } from 'antd-mobile';
import {
  IClient,
  useAddClient,
  useDelClient,
  useUpdateClient,
} from '@/api/clients';

interface IHyListItemProps {
  id: string;
  name: string;
  update: (data: IClient) => void;
  del: (id: string) => void;
}

const HyListItem: React.FC<IHyListItemProps> = (props) => {
  const { del } = useDelClient();
  const { update } = useUpdateClient();
  const onOptions = (e: any) => {
    e.stopPropagation();
    Modal.operation([
      { text: '删除', onPress: () => del(props.id) },
      {
        text: '修改',
        onPress: () =>
          Modal.prompt(
            '修改',
            '请输入用户名称',
            [
              { text: '取消' },
              {
                text: '确定',
                onPress: (value) => update({ name: value, id: props.id }),
              },
            ],
            'default',
            props.name,
            ['用户名称'],
          ),
      },
    ]);
  };

  return (
    <List.Item
      onClick={(e) => console.log(123)}
      extra={<Icon onClick={onOptions} type="ellipsis" />}
    >
      {props.name}
    </List.Item>
  );
};

export default HyListItem;
