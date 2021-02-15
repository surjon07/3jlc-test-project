import React, { Component } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Container, Button, Content, Item, Input, Text } from 'native-base';

class CreatePerson extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name              : '',
            middle_name             : '',
            last_name               : '',
            birth_date              : '',
            address_1               : '',
            address_2               : '',
            city_or_municipality    : '',
            province                : '', 
            post_code               : '',
            salary                  : ''
        }             

    }

    createPerson = () => {

        fetch('http://192.168.110.108:8000/api/person', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then((response) => response.json())
        .then((responseJson) => {
            Alert.alert(JSON.stringify(responseJson.message));
        })        
        .catch((error) => {
            console.error(error);
        });

    }

    render() {
        return (

            <Container style={styles.Container}>

                <Content>

                    <Item style={styles.InputItems} rounded>
                        <Input placeholder = "First Name" onChangeText = {value => this.setState({first_name: value})}/>
                    </Item>

                    <Item style={styles.InputItems} rounded>
                        <Input placeholder = "Middle Name" onChangeText = {value => this.setState({middle_name: value})}/>
                    </Item>

                    <Item style={styles.InputItems} rounded>
                        <Input placeholder = "Last Name" onChangeText = {value => this.setState({last_name: value})}/>
                    </Item>

                    <Item style={styles.InputItems} rounded>
                        <Input placeholder = "Date Of Birth" onChangeText = {value => this.setState({birth_date: value})}/>
                    </Item>

                    <Item style={styles.InputItems} rounded>
                        <Input placeholder = "Address 1" onChangeText = {value => this.setState({address_1: value})}/>
                    </Item>

                    <Item style={styles.InputItems} rounded>
                        <Input placeholder = "Address 2" onChangeText = {value => this.setState({address_2: value})}/>
                    </Item>

                    <Item style={styles.InputItems} rounded>
                        <Input placeholder = "City or Municipality" onChangeText = {value => this.setState({city_or_municipality: value})}/>
                    </Item>

                    <Item style={styles.InputItems} rounded>
                        <Input placeholder = "Province" onChangeText = {value => this.setState({province: value})}/>
                    </Item>

                    <Item style={styles.InputItems} rounded>
                        <Input placeholder = "Post code" onChangeText = {value => this.setState({post_code: value})}/>
                    </Item>

                    <Item style={styles.InputItems} rounded>
                        <Input placeholder = "Salary" onChangeText = {value => this.setState({salary: value})}/>
                    </Item>

                    <Item style={styles.Spacer}></Item>

                    <Button style={styles.Buttons} rounded block info onPress={ this.createPerson }>
                        <Text>Save</Text>
                    </Button>
                    
                    <Button style={styles.Buttons} rounded block light onPress={()=>{ this.props.navigation.navigate("home"); }}>
                        <Text>Cancel</Text>
                    </Button>

                </Content>

            </Container>

        );
    }

}

const styles = StyleSheet.create({
    Container: {
        padding: 20
    },
    InputItems: {
        margin: 5,
        padding: .5,
        paddingLeft: 15,
        borderWidth: 10,
        borderRadius: 5,
        borderColor: '#97e9f0'
    },
    Spacer: {
        marginTop: 20,
        marginBottom: 20
    },
    Buttons: {
        margin: 5,
        padding: .5
    }
});

export default CreatePerson;