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
import * as Location from "expo-location";

//PROVIDER_GOOGLE, api key:

export default class LocationDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: 40.7051,
      longitude: -74.0092,
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
  }

  render() {
    return (
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
            pinColor="red"
          ></Marker>

          <Marker
            coordinate={{
              latitude: 40.705137,
              longitude: -74.007624,
            }}
            pinColor="red"
          ></Marker>
          <Marker
            coordinate={{
              latitude: 40.715317,
              longitude: -73.999542,
            }}
            pinColor="red"
          ></Marker>
          <Marker
            coordinate={{
              latitude: 40.705417,
              longitude: -74.017241,
            }}
            pinColor="red"
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
