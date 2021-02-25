import React from 'react';
import { List, InputItem, Button } from 'antd-mobile';
import { Box } from '@/components';

interface ILoginProps {}

const Login: React.FC<ILoginProps> = (props) => {
  return (
    <Box>
      <List renderHeader={() => '登录'}>
        <InputItem type="text" placeholder="请输入账号">
          账号
        </InputItem>
        <InputItem type="password" placeholder="请输入密码">
          密码
        </InputItem>
      </List>
      <Button type="primary">登录</Button>
    </Box>
  );
};

export default Login;
