import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
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
      ></MapView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   Map: {
//     // flex: 1,
//     // backgroundColor: '#fff',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
