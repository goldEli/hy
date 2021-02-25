import React from 'react';
import { Box } from '@/components';
import {
  SearchBar,
  Button,
  WhiteSpace,
  WingBlank,
  SwipeAction,
  List,
  NavBar,
  Icon,
} from 'antd-mobile';
import { IUser } from '@/type';

interface IUserManagementProps {}

const UserManagement: React.FC<IUserManagementProps> = (props) => {
  const [data, setData] = React.useState<IUser[]>([
    { id: '1', name: 'Shevchenko' },
    { id: '2', name: 'Seedorf' },
    { id: '3', name: 'Kaka' },
    { id: '4', name: 'Inzaghi' },
    { id: '5', name: 'Pirlo' },
    { id: '6', name: 'Gattuso' },
    { id: '7', name: 'Nesta' },
  ]);
  return (
    <>
      <NavBar
        mode="light"
        // icon={<Icon type="left" />}
        // onLeftClick={() => console.log('onLeftClick')}
      >
        用户管理
      </NavBar>
      <Box>
        <SearchBar placeholder="Search" maxLength={8} />
        <WhiteSpace />
        <Button type="primary">New</Button>
        <WhiteSpace />
        <List>
          {data.map((item) => {
            return (
              <SwipeAction
                key={item.id}
                style={{ backgroundColor: 'gray' }}
                autoClose
                right={[
                  {
                    text: 'Modify',
                    onPress: () => console.log('reply'),
                    style: { backgroundColor: '#108ee9', color: 'white' },
                  },
                  {
                    text: 'Delete',
                    onPress: () => console.log('delete'),
                    style: { backgroundColor: '#F4333C', color: 'white' },
                  },
                ]}
                onOpen={() => console.log('global open')}
                onClose={() => console.log('global close')}
              >
                <List.Item arrow="horizontal" onClick={(e) => console.log(e)}>
                  {item.name}
                </List.Item>
              </SwipeAction>
            );
          })}
        </List>
      </Box>
    </>
  );
};

export default UserManagement;
