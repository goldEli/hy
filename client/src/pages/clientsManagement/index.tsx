import React, { useEffect } from 'react';
import { Box } from '@/components';
import { SearchBar, WhiteSpace, SwipeAction, List, NavBar } from 'antd-mobile';
import { useQuery } from 'react-query';
import { API_CLIENTS_LIST, getClients, IClient } from '@/api/clients';
import AddButton from './components/AddButton';
import HyList from '@/components/HyList';

interface IClientsManagementProps {}

const ClientsManagement: React.FC<IClientsManagementProps> = (props) => {
  const { data } = useQuery<IClient[]>(API_CLIENTS_LIST, getClients);
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
        <AddButton />
        <WhiteSpace />
        <HyList data={data || []} />
      </Box>
    </>
  );
};

export default ClientsManagement;
