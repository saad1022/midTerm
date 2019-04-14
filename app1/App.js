import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text ,Left, Body, Right, Title } from 'native-base';
export default class FooterTabsIconTextExample extends Component {
  render() {
    return (
      <Container>

        <Header >
        <Left/>
          <Body>
            <Title>Saad Ali Afandi</Title>
          </Body>
          <Right />
          </Header>

        <Content />

        <Footer>
          <FooterTab>
            <Button vertical active>
              <Text>saadaliafnadi@gmail.com</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>+92-3222857875</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}