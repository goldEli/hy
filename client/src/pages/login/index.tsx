import React from "react";
import Taro, { Config } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { AtButton, AtInput } from "taro-ui";
import { Box } from "src/components";

interface ILoginProps {}

const Login: React.FC<ILoginProps> = props => {
  const onChange = () => {};
  return (
    <Box className="hy-login">
      <Text>Login</Text>
      <AtInput
        name="value1"
        title="username"
        type="text"
        placeholder="username"
        onChange={onChange}
      />
      <AtInput
        name="value2"
        title="password"
        type="password"
        placeholder="password"
        onChange={onChange}
      />
      <AtButton type="primary">Login</AtButton>
    </Box>
  );
};

export default Login;
