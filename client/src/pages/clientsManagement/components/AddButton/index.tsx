import React from 'react';
import { Button, Modal } from 'antd-mobile';
import useAdd from './useAdd';
const { prompt } = Modal;

interface IAddButtonProps {}

const AddButton: React.FC<IAddButtonProps> = (props) => {
  const { add } = useAdd();
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
              onPress: (value) => add(value),
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
