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

// import React, { useState } from "react";
// import { StyleSheet, View, Text, Button, Linking } from "react-native";
// import RNLocation from "react-native-location";

// RNLocation.configure({
//   distanceFilter: null,
// });

// const Test = ({ url }) => {
//   [viewLocation, isViewLocation] = useState([]);

//   const [tweet, setTweet] = useState([
//     viewLocation.longitude,
//     viewLocation.latitude,
//   ]);

//   const tweetLocation = () => {
//     let twitterParams = [];

//     try {
//       if (tweet) twitterParams.push("text=" + encodeURI(tweet));

//       const url = "https://twitter.com/intent/tweet?" + twitterParams.join("&");

//       Linking.openURL(url);
//     } catch (error) {
//       alert("Something went wrong");
//     }
//   };

//   const getLocation = async () => {
//     let permission = await RNLocation.checkPermission({
//       ios: "whenInUse", // or 'always'
//       android: {
//         detail: "coarse", // or 'fine'
//       },
//     });

//     console.log(permission);

//     let location;
//     if (!permission) {
//       permission = await RNLocation.requestPermission({
//         ios: "whenInUse",
//         android: {
//           detail: "coarse",
//           rationale: {
//             title: "We need to access your location",
//             message: "We use your location to show where you are on the map",
//             buttonPositive: "OK",
//             buttonNegative: "Cancel",
//           },
//         },
//       });
//       console.log(permission);
//       location = await RNLocation.getLatestLocation({ timeout: 100 });
//       console.log(location);
//       isViewLocation(location);
//     } else {
//       location = await RNLocation.getLatestLocation({ timeout: 100 });
//       console.log(location);
//       isViewLocation(location);
//       setTweet([viewLocation.longitude, viewLocation.latitude]);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text>React Native Geolocation</Text>
//       <View
//         style={{ marginTop: 10, padding: 10, borderRadius: 10, width: "40%" }}
//       >
//         <Button title="Get Location" onPress={getLocation} />
//       </View>
//       <Text>Latitude: {viewLocation.latitude} </Text>
//       <Text>Longitude: {viewLocation.longitude} </Text>
//       <View
//         style={{ marginTop: 10, padding: 10, borderRadius: 10, width: "40%" }}
//       >
//         <Button title="Send Location" onPress={tweetLocation} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// export default Test;

//-------------------------------------------------------

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import Geocoder from "react-native-geocoding";
import Geolocation from "react-native-geolocation-service";
import * as Location from "expo-location";

//PROVIDER_GOOGLE, api key:

export default class LocationDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: 40.6734,
      longitude: -74.0083,
      error: null,
      Address: null,
    };
  }

  async componentDidMount() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    let currentLocation = JSON.stringify(location);
    currentLocation = await JSON.parse(currentLocation);
    console.log(currentLocation);
    this.setState({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
    });

    // async componentDidMount() {
    //   let { status } = await Location.requestForegroundPermissionsAsync();
    //   if (status !== "granted") {
    //     setErrorMsg("Permission to access location was denied");
    //     return;
    //   }

    //   let location = await Location.getCurrentPositionAsync({});
    //   let currentLocation = JSON.stringify(location);
    //   currentLocation = await JSON.parse(currentLocation);
    //   console.log(location);
    //   this.setState({
    //     latitude: location.coords.latitude,
    //     longitude: location.coords.longitude,
    //   });
  }

  render() {
    return (
      // <View>
      //   <Text>{this.state.latitude}</Text>
      //   <Text>{this.state.longitude}</Text>
      // </View>
      <View style={styles.container}>
        <MapView
          // provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          loadingEnabled
          loadingBackgroundColor="white"
          loadingIndicatorColor="black"
        >
          <Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
          ></Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

//-------------------------------------------------------

{
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
}

//-------------------------------------------------------

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function Test () {
//   return (
//     <View style={styles.container}>
//       <Text>Test</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//-------------------------------------------------------

// import React, { useState, useEffect } from "react";
// import { Platform, Text, View, StyleSheet } from "react-native";
// import * as Location from "expo-location";

// export default function Map() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   let text = "Waiting..";
//   let newText;
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);

//     console.log(JSON.parse(text).coords.longitude);
//   }

//   return (
//     <View>
//       <Text>{text}</Text>
//     </View>
//   );
// }
