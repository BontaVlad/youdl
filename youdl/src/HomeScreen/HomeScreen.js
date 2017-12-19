import React from "react";
import { StatusBar, ListView, Modal} from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, List, ListItem, SwipeRow, Form, Item, Input, Label } from "native-base";
import urls from "../Core/urls.js"
import Donkey from "../Core/Donkey.js"
import _ from 'lodash';

import LoginScreen from "../LoginScreen/LoginScreen.js";

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true,
            items: [],
            modalVisible: false,
            modalValue: '',
            modalCallback: null,
        }
    }

    componentWillMount() {
        this.fetchData();

    }

    detail(item) {
        this.props.navigation.navigate("Detail", {item: item});
    }

    async fetchData(){
        // let response = await Donkey.get(urls.PLAYLISTS);
        let response = 
            [
                {
                    "id": 3,
                    "owner": 1,
                    "name": "Test",
                    "items": []
                },
                {
                    "id": 4,
                    "owner": 1,
                    "name": "Test2",
                    "items": []
                },
                {
                    "id": 7,
                    "owner": 1,
                    "name": "Test 3",
                    "items": []
                },
                {
                    "id": 8,
                    "owner": 1,
                    "name": "Test 4",
                    "items": []
                },
                {
                    "id": 9,
                    "owner": 1,
                    "name": "Test 5",
                    "items": []
                },
                {
                    "id": 10,
                    "owner": 1,
                    "name": "Test 6",
                    "items": []
                }
            ];
        // let response = await Donkey.get('https://httpbin.org/uuid');
        this.setState({items: response});
        //this.props.navigation.setParams({isAnimating: false});
    }

    async addVideo() {
    }

    async addPlaylist() {
        console.warn(this.state.modalValue);
        let response = await Donkey.post(urls.PLAYLISTS, {name: this.state.modalValue});
        // this.setState({items: response});
    }

    async delete(id) {
        // make a more pretty url build
        try {
            // await Donkey.delete(urls.PLAYLISTS + id + '/');
            _.remove(this.state.items, {id: id});
            this.setState({items: this.state.items});
        }
        catch(error) {
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
                <Right>
                    <Button success onPress={() => {
                        this.setState({modalVisible: true})
                        this.setState({modalCallback: this.addPlaylist})}
                                            }>
                    <Icon active name="add" />
                    </Button>
                </Right>
                </Header>
                <Content padder>

                <List dataArray={this.state.items}
                    renderRow={(item) =>
                               <SwipeRow
                               leftOpenValue={75}
                               rightOpenValue={-75}
                               left={
                                       <Button success onPress={() => {
                                           this.setState({modalVisible: true})
                                           this.setState({modalCallback: this.addVideo})}
                                                               }>
                                       <Icon active name="add" />
                                       </Button>
                               }
                               body={
                                       <ListItem button onPress={() => this.detail(item)}>
                                       <Text>{item.name}</Text>
                                       </ListItem>
                               }
                               right={
                                       <Button danger onPress={() => this.delete(item.id)}>
                                       <Icon active name="trash" />
                                       </Button>
                               }
                               />
                }>
                </List>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}} >
                    <Content>
                    <Form>
                        <Item inlineLabel>
                            <Label>Name</Label>
                            <Input
                                value={this.state.videoUrl}
                                onChangeText={(modalValue) => this.setState({modalValue})}
                            />
                        </Item>

                        <Button onPress={() => {
                            this.state.modalCallback()
                            this.setState({modalVisible: false})
                        }}>
                        <Text>Add</Text>
                        </Button>

                        <Button onPress={() => {
                            this.setState({modalVisible: false})
                            this.setState({modalValue: ''})
                        }}>
                            <Text>Cancel</Text>
                        </Button>
                    </Form>
                </Content>
                </Modal>

                </Content>
            </Container>
        );
    }
}
