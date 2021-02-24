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

export default BuildingManagement;