import React from 'react';
import { Popover, NavBar, Icon } from 'antd-mobile';
import HyListItem from './HyListItem';


interface IListProps {
  data: {id:string, name:string}[]
}

const List: React.FC<IListProps> = (props) => {

  return (
    <>
      {
        props.data.map(item => {
          return <HyListItem key={item.id} id={item.id} name={item.name}/>
        })
      }
    </>
  )
};

export default List;
