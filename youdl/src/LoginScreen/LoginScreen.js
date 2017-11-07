import React, { Component } from 'react';
import { Container, Header, Body, Text, Title, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Alert } from 'react-native';
import Mailer from 'react-native-mail';


export default class InlineLabelExample extends Component {
    submit = () => {
        Mailer.mail({
            subject: 'need help',
            recipients: ['support@example.com'],
            ccRecipients: ['supportCC@example.com'],
            bccRecipients: ['supportBCC@example.com'],
            body: '<b>A Bold Body</b>',
            isHTML: true,
            attachment: {
                path: '',  // The absolute path of the file from which to read data.
                type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf
                name: '',   // Optional: Custom filename for attachment
            }
        }, (error, event) => {
            Alert.alert(
                error,
                event,
                [
                    {text: 'Ok', onPress: () => console.log('OK: Email Error Response')},
                    {text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response')}
                ],
                { cancelable: true }
            )
        });
    }

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Login</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>

                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>

                <Button full
                    style={{ marginTop: 10 }}
                    onPress={() => this.submit()}>
                        <Text>Login</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
