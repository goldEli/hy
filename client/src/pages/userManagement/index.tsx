import React from "react";
import Taro, { Config } from "@tarojs/taro";
import { View, Text, Button } from "@tarojs/components";
import { AtList, AtListItem, AtSearchBar, AtSwipeAction } from "taro-ui";
import { Box } from "src/components";

interface IUserManagementProps {}
const options: {
  id?: string;
  key: string;
  text: string;
  style: any;
}[] = [
  {
    key: "modify",
    text: "修改",
    style: {
      backgroundColor: "#6190E8"
    }
  },
  {
    key: "delete",
    text: "删除",
    style: {
      backgroundColor: "#FF4949"
    }
  }
];

const UserManagement: React.FC<IUserManagementProps> = props => {
  const [value, setValue] = React.useState("");
  const onChange = (value: string) => {
    setValue(value);
  };
  return (
    <Box>
      <Text>UserManagement</Text>
      <AtSearchBar value={value} actionName="搜一下" onChange={onChange} />
      <AtList>
        <AtSwipeAction
          autoClose
          options={options}
        >
          <AtListItem title="shevchenko" arrow="right" />
        </AtSwipeAction>
      </AtList>
    </Box>
  );
};

export default UserManagement;
