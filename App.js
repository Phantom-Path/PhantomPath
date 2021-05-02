import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import { store } from "./store";

import * as firebase from "firebase";
// import { Provider } from 'react-redux'
//PROVIDER_GOOGLE,

const firebaseConfig = {
  apiKey: "AIzaSyBkAffiM30sGBZjz87CS7EcS7fS43kGAJ0",
  authDomain: "phantompath-330cc.firebaseapp.com",
  projectId: "phantompath-330cc",
  storageBucket: "phantompath-330cc.appspot.com",
  messagingSenderId: "168126105367",
  appId: "1:168126105367:web:5b3401ca04d6891e645952",
  measurementId: "G-C67ZDG901B",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import Map from "./screens/Map";
import Profile from "./screens/Profile";
import Friends from "./screens/Friends";
import Chat from "./screens/Chat";
import CreateChat from "./screens/CreateChat";

import Landing from "./screens/Landing";
import Register from "./screens/Register";
import Login from "./screens/Login";

import Test from "./screens/Test"; //test

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      // headerMode="screen"
      // screenOptions={{
      //   headerTintColor: 'white',
      //   headerStyle: { backgroundColor: 'tomato' },
      // }}
    >
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
      <Stack.Screen
        name="Friends"
        component={Friends}
        // options={{
        //   title: 'My profile',
        // }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
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
      />
      <Stack.Screen
        name="Test"
        component={Test} //test
        // options={{
        //   gestureEnabled: false,
        // }}
      />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Loading</Text>
        </View>
      );
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      <Provider store={store}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </Provider>
    );
  }
}
