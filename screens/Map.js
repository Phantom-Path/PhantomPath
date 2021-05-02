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
      >
        <Marker
          coordinate={{
            latitude: 40.6734,
            longitude: -74.0083,
          }}
        ></Marker>
      </MapView>
    </View>
  );
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
