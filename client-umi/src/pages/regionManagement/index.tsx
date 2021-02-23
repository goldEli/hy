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
import { IRegion } from '@/type';

interface IRegionManagementProps {}

const RegionManagement: React.FC<IRegionManagementProps> = (props) => {
  const [data, setData] = React.useState<IRegion[]>([
    { id: '1', name: '配电站' },
    { id: '2', name: '调压柜' },
    { id: '3', name: '配气站' },
    { id: '4', name: '办公区域' },
    { id: 'q', name: '办公区域' },
    { id: 'w', name: '办公区域' },
    { id: '5', name: '办公区域' },
    { id: 'a', name: '办公区域' },
    { id: 'r', name: '办公区域' },
    { id: 'd', name: '办公区域' },
    { id: 'f', name: '办公区域' },
    { id: 'z', name: '办公区域' },
    { id: 'x', name: '办公区域' },
    { id: 'c', name: '办公区域' },
    { id: 'v', name: '办公区域' },
    { id: 'b', name: '办公区域' },
    { id: 't', name: '办公区域' },
    { id: 'y', name: '办公区域' },
    { id: 'u', name: '办公区域' },
    { id: 'i', name: '办公区域' },
  ]);
  return (
    <>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
      >
        区域管理
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

export default RegionManagement;
