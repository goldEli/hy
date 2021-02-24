import React from 'react';
import { IRegion } from '@/type';
import { SearchBar, Button, WhiteSpace, NavBar, WingBlank } from 'antd-mobile';
import HyList from '@/components/HyList';

interface IShowBuildingProps {}

const ShowBuilding: React.FC<IShowBuildingProps> = (props) => {
  const [data, setData] = React.useState<IRegion[]>([
    { id: '1', name: '食堂' },
    { id: '2', name: '收费大厅' },
    { id: '3', name: '办公楼' },
    { id: '4', name: '配电室' },
  ]);
  return (
    <>
      <NavBar mode="light">配电厂</NavBar>
      <WingBlank>
        <SearchBar placeholder="Search" maxLength={8} />
        <WhiteSpace />
        <HyList data={data} />
      </WingBlank>
    </>
  );
};

export default ShowBuilding;
