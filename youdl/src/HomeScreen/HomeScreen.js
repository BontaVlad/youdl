import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, List, ListItem, SwipeRow} from "native-base";
import urls from "../Core/urls.js"
import Donkey from "../Core/Donkey.js"

import LoginScreen from "../LoginScreen/LoginScreen.js";

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true,
            items: []
        }
    }

    componentWillMount() {
        this.fetchData();
    }

    detail(item) {
        this.props.navigation.navigate("Detail", {item: item});
    }

    async fetchData(){
        try{
            let response = await Donkey.get(urls.PLAYLISTS);
            // let response = await Donkey.get('https://httpbin.org/anything');
            console.log(response);
            this.setState({items: response});
            //this.props.navigation.setParams({isAnimating: false});
        } catch(error){
            console.error(error);
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
                    <Title>HomeScreen</Title>
                </Body>
                <Right />
                </Header>
                <Content padder>

                <List dataArray={this.state.items}
                    renderRow={(item) =>
                               <SwipeRow
                               leftOpenValue={75}
                               rightOpenValue={-75}
                               left={
                                       <Button success onPress={() => alert('Add')}>
                                       <Icon active name="add" />
                                       </Button>
                               }
                               body={
                                       <ListItem button onPress={() => this.detail(item)}>
                                       <Text>{item.name}</Text>
                                       </ListItem>
                               }
                               right={
                                       <Button danger onPress={() => alert('Trash')}>
                                       <Icon active name="trash" />
                                       </Button>
                               }
                               />
                }>
                </List>
                </Content>
            </Container>
        );
    }
}
