import React from 'react';
import { Popover, SwipeAction, List } from 'antd-mobile';

const Item = Popover.Item;

const myImg = (src: string) => (
  <img
    src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`}
    className="am-icon am-icon-xs"
    alt=""
  />
);

interface IHyListItemProps {
  id: string;
  name: string;
}

const HyListItem: React.FC<IHyListItemProps> = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = React.useState('');
  const onSelect = (opt: any) => {
    // console.log(opt.props.value);
    setVisible(false);
    setSelected(opt.props.value);
  };
  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible);
  };
  return (
    <SwipeAction
      key={props.id}
      style={{ backgroundColor: 'gray' }}
      autoClose
      right={[
        {
          text: 'Modify',
          onPress: () => console.log('修改'),
          style: { backgroundColor: '#108ee9', color: 'white' },
        },
        {
          text: 'Delete',
          onPress: () => console.log('删除'),
          style: { backgroundColor: '#F4333C', color: 'white' },
        },
      ]}
      onOpen={() => console.log('global open')}
      onClose={() => console.log('global close')}
    >
      <List.Item arrow="horizontal" onClick={(e) => console.log(e, 123)}>
        {props.name}
      </List.Item>
    </SwipeAction>
  );
};

export default HyListItem;
