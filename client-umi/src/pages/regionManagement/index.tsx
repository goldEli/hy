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
  ]);
  return (
    <Box>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
      >
        区域
      </NavBar>
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
  );
};

export default RegionManagement;
