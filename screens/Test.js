// @refresh reset

import React, { useState, useEffect, useCallback } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, TextInput, View, Button } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";

const db = firebase.firestore();
const chatsRef = db.collection("chats");

export default function App() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    readUser();
    const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
      const messagesFirestore = querySnapshot
        .docChanges()
        .filter(({ type }) => type === "added")
        .map(({ doc }) => {
          const message = doc.data();
          //createdAt is firebase.firestore.Timestamp instance
          //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
          return { ...message, createdAt: message.createdAt.toDate() };
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      appendMessages(messagesFirestore);
    });
    return () => unsubscribe();
  }, []);

  const appendMessages = useCallback(
    (messages) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, messages)
      );
    },
    [messages]
  );

  async function readUser() {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }
  async function handlePress() {
    const _id = Math.random().toString(36).substring(7);
    const user = { _id, name };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }
  async function handleSend(messages) {
    const writes = messages.map((m) => chatsRef.add(m));
    await Promise.all(writes);
  }

  // if (!user) {
  //   return (
  //     <View style={styles.container}>
  //       <TextInput
  //         style={styles.input}
  //         placeholder="Enter your name"
  //         value={name}
  //         onChangeText={setName}
  //       />
  //       <Button onPress={handlePress} title="Enter the chat" />
  //     </View>
  //   );
  // }
  return <GiftedChat messages={messages} user={user} onSend={handleSend} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    padding: 15,
    marginBottom: 20,
    borderColor: "gray",
  },
});

//-------------------------------------------------------

// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Dimensions,
//   Button,
//   TouchableOpacity,
// } from "react-native";
// import MapView, { Marker, Callout } from "react-native-maps";
// import Geocoder from "react-native-geocoding";
// import Geolocation from "react-native-geolocation-service";
// import * as Location from "expo-location";

// //PROVIDER_GOOGLE, api key:

// export default class LocationDemo extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       latitude: 40.6734,
//       longitude: -74.0083,
//       error: null,
//       Address: null,
//     };
//   }

//   async componentDidMount() {
//     let { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== "granted") {
//       setErrorMsg("Permission to access location was denied");
//       return;
//     }

//     let location = await Location.getCurrentPositionAsync({});
//     let currentLocation = JSON.stringify(location);
//     currentLocation = await JSON.parse(currentLocation);
//     // console.log(currentLocation);
//     this.setState({
//       latitude: currentLocation.coords.latitude,
//       longitude: currentLocation.coords.longitude,
//     });
//   }
//   async componentDidUpdate() {
//     let location = await Location.getCurrentPositionAsync({});
//     let currentLocation = JSON.stringify(location);
//     currentLocation = await JSON.parse(currentLocation);
//     console.log(currentLocation);
//     console.log("updating");
//     this.setState({
//       latitude: currentLocation.coords.latitude,
//       longitude: currentLocation.coords.longitude,
//     });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <MapView
//           // provider={PROVIDER_GOOGLE}
//           style={styles.map}
//           initialRegion={{
//             latitude: this.state.latitude,
//             longitude: this.state.longitude,
//             latitudeDelta: 0.05,
//             longitudeDelta: 0.05,
//           }}
//           loadingEnabled
//           loadingBackgroundColor="white"
//           loadingIndicatorColor="black"
//         >
//           <Marker
//             coordinate={{
//               latitude: this.state.latitude,
//               longitude: this.state.longitude,
//             }}
//           ></Marker>
//         </MapView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });

//-------------------------------------------------------

/* <MapView
          style={StyleSheet.absoluteFillObject}
          initialRegion={{
            latitude: 40.6734,
            longitude: -74.0083,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          loadingEnabled
          loadingBackgroundColor="white"
          loadingIndicatorColor="black"
        >
          {items.map((data, idx) => {
            return (
              <Marker
                coordinate={{
                  latitude: data.latitude,
                  longitude: data.longitude,
                }}
                key={idx}
                pinColor="black"
              >
                <Callout
                  style={styles.callout}
                  tooltip={true}
                  onPress={() => navigation.navigate('GiftDetail', data)}
                >
                  <CalloutText>{data.title}</CalloutText>
                </Callout>
              </Marker>
            );
          })}
        </MapView> */

//-------------------------------------------------------

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function Test() {
//   return (
//     <View style={styles.container}>
//       <Text>Test</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

//-------------------------------------------------------
