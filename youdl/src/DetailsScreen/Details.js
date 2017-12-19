
import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, List, ListItem, Form, Item, Input } from "native-base";
import StockLineChartBasic from "./StockLine.js";

export default class Details extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.state.params.item,
            selected: false,
        }
    }

    saveName(text) {
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                        <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Song view</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Form>
                        <Item regular>
                <Input
                       onChangeText={(text) => this.saveName(text)}
                       placeholder={this.state.item.name}/>
                        </Item>
                    </Form>
                    <StockLineChartBasic />
                </Content>
            </Container>
        );
    }
}
