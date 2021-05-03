//Kevin
//User.belongsToMany(User, { as: 'friends', through: 'friendship' })
//User.belongsTo(Coffee, { as: 'favoriteCoffee' })

//Hello World
//Test for github # 2


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

// //PROVIDER_GOOGLE, api key: AIzaSyBeWkpKhK1nC-tDdfyas_ze7WFtfueHFjE

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
//     Geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//         // Geocoder.from(position.coords.latitude, position.coords.longitude)
//         //   .then((json) => {
//         //     console.log(json);
//         //     var addressComponent = json.results[0].address_components;
//         //     this.setState({
//         //       Address: addressComponent,
//         //     });
//         //     console.log(addressComponent);
//         //   })
//         //   .catch((error) => console.warn(error));
//       }
//       // (error) => {
//       //   // See error code charts below.
//       //   this.setState({
//       //     error: error.message,
//       //   }),
//       //     console.log(error.code, error.message);
//       // },
//       // {
//       //   enableHighAccuracy: false,
//       //   timeout: 10000,
//       //   maximumAge: 100000,
//       // }
//     );
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

// {
//   /* <MapView
//           style={StyleSheet.absoluteFillObject}
//           initialRegion={{
//             latitude: 40.6734,
//             longitude: -74.0083,
//             latitudeDelta: 0.05,
//             longitudeDelta: 0.05,
//           }}
//           loadingEnabled
//           loadingBackgroundColor="white"
//           loadingIndicatorColor="black"
//         >
//           {items.map((data, idx) => {
//             return (
//               <Marker
//                 coordinate={{
//                   latitude: data.latitude,
//                   longitude: data.longitude,
//                 }}
//                 key={idx}
//                 pinColor="black"
//               >
//                 <Callout
//                   style={styles.callout}
//                   tooltip={true}
//                   onPress={() => navigation.navigate('GiftDetail', data)}
//                 >
//                   <CalloutText>{data.title}</CalloutText>
//                 </Callout>
//               </Marker>
//             );
//           })}
//         </MapView> */
// }

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
