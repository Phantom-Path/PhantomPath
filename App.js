import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import MapView, {  Marker, Callout } from "react-native-maps";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login'
import Home from './screens/Home'
import Friends from './screens/Friends'
import Chat from './screens/Chat'
import CreateChat from './screens/CreateChat'
import Map from './screens/Map'
//PROVIDER_GOOGLE,


const Stack = createStackNavigator();

function MyStack () {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      // headerMode="screen"
      // screenOptions={{
      //   headerTintColor: 'white',
      //   headerStyle: { backgroundColor: 'tomato' },
      // }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        // options={{
        //   title: 'Awesome app',
        // }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{
        //   title: 'Awesome app',
        // }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        // options={{
        //   title: 'My profile',
        // }}
      />
      {/* <Stack.Screen
        name="Friends"
        component={Friends}
        // options={{
        //   title: 'My profile',
        // }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        // options={{
        //   gestureEnabled: false,
        // }}
      />
      <Stack.Screen
        name="CreateChat"
        component={CreateChat}
        // options={{
        //   gestureEnabled: false,
        // }}
      /> */}
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    // <Text>Hello World!</Text>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
