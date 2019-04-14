import React, { Component } from "react";
import { Container, Header, Content, Accordion,Left, Body, Right,Title,Footer, FooterTab, Button, Icon, Text } from "native-base";
const dataArray = [
  { title: "Experience", content: "Visual Baisc Developer" },
  { title: "MCS", content: "Masters in Computer Science" },
  { title: "B.Com", content: "University Of Karachi" }
];
export default class AccordionHeaderContentStyleExample extends Component {
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

        <Content padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
          />
        </Content>

        <Footer>
          <FooterTab>
            <Button vertical active>
              <Text>saadaliafandi@gmail.com</Text>
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