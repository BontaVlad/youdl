
import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, List, ListItem} from "native-base";

export default class Details extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.state.params.item,
        }
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
                    <Text>{this.state.item.name}</Text>
                </Content>
            </Container>
        );
    }
}
