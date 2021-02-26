import React, { useEffect } from 'react';
import { Box } from '@/components';
import {
  SearchBar,
  Button,
  WhiteSpace,
  SwipeAction,
  List,
  NavBar,
} from 'antd-mobile';
import { IUser } from '@/type';
import { http } from '@/utils/http';
import { useQuery } from 'react-query';
import { API_CLIENTS_LIST, getClients, IClient } from '@/api/clients';

interface IUserManagementProps {}

const UserManagement: React.FC<IUserManagementProps> = (props) => {
  const { data } = useQuery<IClient>(API_CLIENTS_LIST, getClients);
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
        <Button type="primary">新增</Button>
        <WhiteSpace />
        <List>
          {data?.map((item) => {
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
