
import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, List, ListItem} from "native-base";
import RadarChart from "RadarChart";

export default class Details extends React.Component {
    static navigationOptions = {
        title: 'Details',
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.navigation.state.params.item,
            selected: false,
            data = [{
                "speed": 74,
                "balance": 29,
                "explosives": 40,
                "energy": 40,
                "flexibility": 30,
                "agility": 25,
                "endurance": 44
            }],
        }
    }

    onValueChange(obj) {
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
                    <Radar/>
                </Content>
            </Container>
        );
    }
}
