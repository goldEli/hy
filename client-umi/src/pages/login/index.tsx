import React from 'react';
import { List, InputItem, Button } from 'antd-mobile';
import { Box } from '@/components';

interface ILoginProps {}

const Login: React.FC<ILoginProps> = (props) => {
  return (
    <Box>
      <List renderHeader={() => 'Login'}>
        <InputItem type="text" placeholder="username">
          username
        </InputItem>
        <InputItem type="password" placeholder="password">
          password
        </InputItem>
      </List>
      <Button type="primary">Login</Button>
    </Box>
  );
};

export default Login;
