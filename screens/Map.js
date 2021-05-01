
import React from "react";
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity } from "react-native";
import MapView, {  Marker, Callout } from "react-native-maps";

//PROVIDER_GOOGLE,

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView
        // provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 40.6734,
          longitude: -74.0083,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        loadingEnabled
        loadingBackgroundColor="white"
        loadingIndicatorColor="black"
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});



//Step1
// import React, { Component } from 'react';
// import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import * as Location from 'expo-location';

// export default class Map extends Component {
// 	constructor(){
//     super();
//     this.state = {
//         ready: false,
//         where: {lat: null, lng: null},
//         error: null
//     }
// }
// componentDidMount(){
//     // let geoOptions = {
//     //     enableHighAccuracy: true,
//     //     timeOut: 20000,
//     //     maximumAge: 60 * 60 * 24
//     // };
//     this.setState({ready:false, error: null });
//     navigator.geolocation.getCurrentPosition( this.geoSuccess );
// }
// geoSuccess = (position) => {
//     console.log(position.coords.latitude);

//     this.setState({
//         ready:true,
//         where: {lat: position.coords.latitude,lng:position.coords.longitude }
//     })
// }
// // geoFailure = (err) => {
// //     this.setState({error: err.message});
// // }
// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<Text>Lattitude: {this.state.where.lat}, Longitude: {this.state.where.lng}</Text>
// 			</View>
// 		);
// 	}
// }


// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#F5FCFF'
// 	},
// 	welcome: {
// 		fontSize: 20,
// 		textAlign: 'center',
// 		margin: 10
// 	}
// })


//Step 2
// import React, { useState, useEffect } from 'react';
// import { Platform, Text, View, StyleSheet } from 'react-native';
// import * as Location from 'expo-location';

// export default function Map() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   let text = 'Waiting..';
//   let newText
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.parse(location);
//     newText = JSON.parse(text)
//   }

//   return (
//     <View >
//       <Text >{newText.coords.latitude}</Text>
//     </View>
//   );
// }



//Step 3
// import React, { Component } from 'react';
// import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import * as Location from 'expo-location';

// export default class Map extends Component {
// 	constructor(){
//     super();
//     this.state = {
//       latitude: null,
//       longitude: null,
//       speed: null,
//       accuracy: null,
//       heading: null,
//       timestamp: null,
//       altitude: null,
//     }
// }
// componentDidMount(){
//   //Alert.alert('Updated');
//   this.watchId = navigator.geolocation.watchPosition(
//       (position) => {
//         // lastpos = JSON.stringify(position);
//         this.getDeviceStatus();
//         this.setState({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           speed: position.coords.speed,
//           accuracy: position.coords.accuracy,
//           heading: position.coords.heading,
//           timestamp: position.timestamp,
//           altitude: position.coords.altitude
//         });
//       },
//       (error) => this.setState({ error: error.message }),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 5 },
//     );
// }
// getDeviceStatus()
// {
//   //Alert.alert('Device');
// }
// componentWillUnmount() {
//   navigator.geolocation.clearWatch(this.watchId);
// }

// render(){
// return(
//       <View>
//       <Text> {this.state.latitude} </Text>
//       <Text> {this.state.longitude} </Text>
//       <Text> {this.state.speed} </Text>
//       <Text> {this.state.accuracy} </Text>
//       <Text> {this.state.heading} </Text>
//       <Text> {this.state.timestamp} </Text>
//       <Text> {this.state.altitude} </Text>
//       </View>
// )
// }
// }


// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#F5FCFF'
// 	},
// 	welcome: {
// 		fontSize: 20,
// 		textAlign: 'center',
// 		margin: 10
// 	}
// })
