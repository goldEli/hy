import React from 'react';
import styled from 'styled-components';
import { NavBar, Icon, Card, WingBlank, WhiteSpace, List } from 'antd-mobile';

interface IShowImagesProps {}

const Item = List.Item;
const Brief = Item.Brief;

const ImgBox = styled.img`
  width: 100%;
`;
const data = [
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
  },
];

const ShowImages: React.FC<IShowImagesProps> = (props) => {
  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
      >
        配电室
      </NavBar>
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        {data.map((item) => {
          return (
            <Card key={item.id}>
              <Card.Body>
                <ImgBox src={item.url} alt="" />
              </Card.Body>
            </Card>
          );
        })}
        <WhiteSpace size="lg" />
      </WingBlank>
    </div>
  );
};

export default ShowImages;
