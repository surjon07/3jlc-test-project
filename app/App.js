// In App.js in a new project

import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Icon } from 'native-base';

import People from "./src/pages/people";
import Person from "./src/pages/person";
import Create from "./src/pages/create";
import Update from "./src/pages/update";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const drawer  = createDrawerNavigator();
const stack   = createStackNavigator(); 

export default class App extends Component {

  stackMain = () =>
    <stack.Navigator>
      <stack.Screen 
        name="home" 
        component={People}
        options={{ 
          headerTitle: 'List of People'
        }}
      />
      <stack.Screen 
        name="person" 
        component={Person}
        options={{ 
          headerTitle: "Person's Information"
        }}
      />
      <stack.Screen 
        name="update" 
        component={Update}
        options={{ 
          headerTitle: "Update Person's Information"
        }}
      />
    </stack.Navigator>
    
  stackSecondary = () =>
    <stack.Navigator>
      <stack.Screen 
        name="create" 
        component={Create}
        options={{ 
          headerTitle: 'Create New'
        }}
      />
    </stack.Navigator>
    
  render() {
    return (
      <NavigationContainer>
        <drawer.Navigator>
          <drawer.Screen 
            name="home"    
            children={this.stackMain}
            options={{ 
              drawerLabel: 'List of People' 
            }}
          />
          <drawer.Screen 
            name="create"  
            children={this.stackSecondary}
            options={{ 
              drawerLabel: 'Create New' 
            }}
          />
        </drawer.Navigator> 
      </NavigationContainer>
    );
  }

}