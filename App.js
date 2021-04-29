import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, {  Marker, Callout } from "react-native-maps";
//PROVIDER_GOOGLE,

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <MapView
        //provider={PROVIDER_GOOGLE}
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
        <Marker
          coordinate={{
            latitude: 40.705137,
            longitude: -74.007624,
          }}
          // key={idx}
          image={require('./assets/ironman.png')}
          width={30}
          height={30}
          // icon="red"
        >
        </Marker>
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
    height: '100%'
  }
});
