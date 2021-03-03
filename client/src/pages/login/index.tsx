import React from 'react';
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { Box } from '@/components';
import _ from 'lodash';
import { http } from '@/utils/http';
import { history } from 'umi';

interface ILoginProps {}

interface IUser {
  name: string;
  password: string;
}

const Login: React.FC<ILoginProps> = (props) => {
  const [user, setUser] = React.useState<IUser>({
    name: '',
    password: '',
  });

  const onChange = (key: keyof IUser, value: string) => {
    setUser((prev) => ({ ...prev, [key]: value }));
  };
  const onLogin = () => {
    if (_.isEmpty(user.name)) {
      Toast.fail('请输入账号');
      return;
    }
    if (_.isEmpty(user.password)) {
      Toast.fail('请输入密码');
      return;
    }
    http('/api/user/login', {
      data: user,
      method: 'POST',
    })
      .then(() => {
        history.push('/');
      })
      .catch((message) => {
        Toast.fail(message);
      });
  };

  return (
    <Box>
      <List renderHeader={() => '登录'}>
        <InputItem
          value={user.name}
          type="text"
          placeholder="请输入账号"
          onChange={(value) => onChange('name', value)}
        >
          账号
        </InputItem>
        <InputItem
          value={user.password}
          type="password"
          placeholder="请输入密码"
          onChange={(value) => onChange('password', value)}
        >
          密码
        </InputItem>
      </List>
      <Button onClick={onLogin} type="primary">
        登录
      </Button>
    </Box>
  );
};

export default Login;
