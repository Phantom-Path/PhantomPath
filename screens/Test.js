import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Platform, KeyboardAvoidingView, SafeAreaView } from "react-native";
import Fire from "../Fire";
import firebase from "firebase";
require("firebase/firestore")

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    messages: [],
  };


  get user() {
    return {
      _id: firebase.auth().currentUser.uid, //Fire.uid, adjust?
      name: firebase.auth().currentUser.email //this.props.navigation.state.params.name, //change
    };
  }

  componentDidMount() {
    Fire.get((message) =>
      this.setState((previous) => ({
        message: GiftedChat.append(previous.messages, message),
      }))
    );
  }
  //this sets the messages

  componentWillUnmount() {
    Fire.off;
  }

  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        //[{text: "someshit", user: "nigga"}, {text: "Other shit", user: "nigga"}, {text: "this shit", user: "nigga"}]
        //messages is an array of objects
        onSend={Fire.send}
        user={this.user}
        //{uid: 123, name: "nigga"}
        //user is an object
      />
      // <GiftedChat
      // messages={this.state.messages}
      // onSend={Fire.send}
      // user={this.user}
      // />
    );

    if (Platform.OS === "android") {
      return (

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={30}
          enabled
        >
          {chat}
        </KeyboardAvoidingView>

      );
    }
    // console.log("navigation---->", this.props.navigation)
    // console.log("Fire---->", Fire)
    // console.log("this.props---->", this.props)
    // console.log("auth---->", firebase.auth())
    console.log("state.message", this.state.messages)
    console.log("firebase database", firebase.database().ref())
    console.log("firebase database User", firebase.firestore()
    .collection("users"))

    //firebase.database().ref("messages")
    //this.props.navigation.state.params.name
    return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
  }
}

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
