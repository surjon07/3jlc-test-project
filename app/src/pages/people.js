import React, { Component } from 'react';
import { StyleSheet, Alert, SafeAreaView, View, FlatList } from 'react-native';
import { Container, Content, ListItem, Button, Left, Right, Body, Icon, H1, H2, H3, Text  } from 'native-base';


class People extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people : [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.listPeople();
    }

    listPeople = () => {
 
        this.setState({isLoading: true});

        fetch('http://192.168.110.108:8000/api/persons')
            .then((res) => res.json())
            .then((resJson) => {
                this.setState({
                    isLoading: false,
                    people : resJson.data
                });
            })
            .catch((error) => {
                console.error(error);
            });

    }

    viewPerson(item) {
        this.props.navigation.navigate('person', item);
    }

    updatePerson(item) {
        this.props.navigation.navigate('update', item);
    }

    removePerson(id) {
        
        fetch('http://192.168.110.108:8000/api/person/' + id, {
            method: 'DELETE',
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
        let { people, isLoading } = this.state;
        return (
            
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={people}
                    renderItem= {({ item }) => (
                        <ListItem key={item.id}>
                            <Body>
                                <H3 style={styles.ListData}>ID #{item.id}</H3>
                                <H2 style={styles.ListData}>{item.first_name} {item.middle_name} {item.last_name}</H2>
                                <H3 style={styles.ListData}>Salary: {item.salary}</H3>
                            </Body>
                            <Right>
                                <Button style={styles.Buttons} primary small rounded
                                    onPress={() => {
                                        this.viewPerson(item);
                                    }}
                                >
                                    <Icon name='eye' />
                                </Button>
                                <Button style={styles.Buttons} info small rounded
                                    onPress={() => {
                                        this.updatePerson(item);
                                    }}
                                >
                                    <Icon name='pencil' />
                                </Button>
                                <Button style={styles.Buttons} danger small rounded
                                    onPress={() => {
                                        this.removePerson(item.id);
                                    }}
                                >
                                    <Icon name='trash' />
                                </Button>
                            </Right>
                        </ListItem>
                    )}
                    keyExtractor={item => item.id+''}
                    refreshing={isLoading}
                    onRefresh={this.listPeople}
                />
            </SafeAreaView>

            
            // <Container>
            //     <Content>

            //         {this.state.people.map((item) => {
            //             return (                            
            //                 <ListItem key={item.id}>
            //                     <Body>
            //                         <H3 style={styles.ListData}>ID #{item.id}</H3>
            //                         <H2 style={styles.ListData}>{item.first_name} {item.middle_name} {item.last_name}</H2>
            //                         <H3 style={styles.ListData}>Salary: {item.salary}</H3>
            //                     </Body>
            //                     <Right>
            //                         <Button style={styles.Buttons} primary small rounded
            //                             onPress={() => {
            //                                 this.viewPerson(item);
            //                             }}
            //                         >
            //                             <Icon name='eye' />
            //                         </Button>
            //                         <Button style={styles.Buttons} info small rounded
            //                             onPress={() => {
            //                                 this.updatePerson(item);
            //                             }}
            //                         >
            //                             <Icon name='pencil' />
            //                         </Button>
            //                         <Button style={styles.Buttons} danger small rounded
            //                             onPress={() => {
            //                                 this.removePerson(item.id);
            //                             }}
            //                         >
            //                             <Icon name='trash' />
            //                         </Button>
            //                     </Right>
            //                 </ListItem>
            //             )
            //         })}
                    

            //     </Content>
            // </Container>
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
    },
    ListData: {
        paddingLeft: 0,
        marginLeft: 0
    }
});

export default People;