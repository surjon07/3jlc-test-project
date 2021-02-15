import React, { Component } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Container, Button, Content, Item, Input, Text } from 'native-base';

class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id                      : 0,
            first_name              : '',
            middle_name             : '',
            last_name               : '',
            birth_date              : '',
            address_1               : '',
            address_2               : '',
            city_or_municipality    : '',
            province                : '', 
            post_code               : '',
            salary                  : 0
        }             

    }

    componentDidMount() {
        this.setState(this.props.route.params);
    }

    render() {
        return (

            <Container style={styles.Container}> 

                <Content>

                    <Item style={styles.InputItems} rounded>
                        <Text>{this.state.first_name} {this.state.middle_name} {this.state.last_name}</Text>
                    </Item>

                    <Item style={styles.InputItems} rounded>
                        <Text>{this.state.birth_date}</Text>
                    </Item>

                    <Item style={styles.InputItems} rounded>
                        <Text>{this.state.address_1}, {this.state.address_2}</Text>
                    </Item>

                    <Item style={styles.InputItems} rounded>
                        <Text>{this.state.city_or_municipality}, {this.state.province}, {this.state.post_code}</Text>
                    </Item>

                    <Item style={styles.InputItems} rounded>
                        <Text>{this.state.salary + ''}</Text>
                    </Item>

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

export default Person;