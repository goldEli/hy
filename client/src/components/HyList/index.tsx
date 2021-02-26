import React from 'react';
import { List } from 'antd-mobile';
import HyListItem from './HyListItem';
import { IClient } from '@/api/clients';

interface IHyListProps {
  data: { id: string; name: string }[];
  update: (data: IClient) => void;
  del: (id: string) => void;
}

const HyList: React.FC<IHyListProps> = (props) => {
  return (
    <List>
      {props.data.map((item) => {
        return (
          <HyListItem
            update={props.update}
            del={props.del}
            key={item.id}
            id={item.id}
            name={item.name}
          />
        );
      })}
    </List>
  );
};

export default HyList;
