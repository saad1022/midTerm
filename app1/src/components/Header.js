import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';


class HeaderTitle extends Component {
  render() {
    return (
        <Container>
            <Header>
                <Left/>
                  <Body>
                    <Title>Saad Ali Afandi</Title>
                  </Body>
                <Right />
            </Header>
        </Container>
    );
  }
}

export default HeaderTitle;