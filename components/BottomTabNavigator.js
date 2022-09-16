import React,{Component} from "react";
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// You can import from local files
import SearchScreen from '../screens/Search';
import TransactionScreen from '../screens/Transaction';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

const Tab = createBottomTabNavigator()

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer> 
        <Tab.Navigator>
            <Tab.Screen name="Transaction" component={TransactionScreen}/>
            <Tab.Screen name="Search" component={SearchScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
