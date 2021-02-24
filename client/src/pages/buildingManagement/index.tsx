import React from 'react';
import { Box } from '@/components';
import {
  SearchBar,
  Button,
  WhiteSpace,
  NavBar,
  Icon,
} from 'antd-mobile';
import { IRegion } from '@/type';
import HyList from '@/components/HyList';

interface IBuildingManagementProps {}

const BuildingManagement: React.FC<IBuildingManagementProps> = (props) => {
  const [data, setData] = React.useState<IRegion[]>([
    { id: '1', name: '食堂' },
    { id: '2', name: '收费大厅' },
    { id: '3', name: '办公楼' },
    { id: '4', name: '配电室' },
  ]);
  return (
    <>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
      >
        建筑管理
      </NavBar>
      <Box>
        <SearchBar placeholder="Search" maxLength={8} />
        <WhiteSpace />
        <Button type="primary">New</Button>
        <WhiteSpace />
        <Button type="primary">生成二维码</Button>
        <WhiteSpace />
        <HyList data={data} />
      </Box>
    </>
  );
};

export default BuildingManagement;
