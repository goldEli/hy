import React from 'react';
import styled from 'styled-components';
import { NavBar, Icon, Card, WingBlank, WhiteSpace, List } from 'antd-mobile';

interface IShowImagesProps {}

const Item = List.Item;
const Brief = Item.Brief;

const ImgBox = styled.img`
  width: 100%;
`;

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
        <Card>
          <Card.Body>
            <ImgBox src={require('../../assets/pig.png')} alt="" />
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <ImgBox src={require('../../assets/pig.png')} alt="" />
          </Card.Body>
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    </div>
  );
};

export default ShowImages;
