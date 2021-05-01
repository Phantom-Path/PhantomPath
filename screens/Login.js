// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   TextInput,
//   Alert,
//   Image,
//   Button,
// } from "react-native";

// export default function Login({ navigation }) {
//   const [user, setUser] = useState([
//     { id: 1, username: "Kevin", password: "123" },
//     { id: 2, username: "Altus", password: "123" },
//     { id: 3, username: "Kavin", password: "123" },
//     { id: 4, username: "Andrew", password: "123" },
//   ]);

//   const [userText, setUserText] = useState("");

//   const [keyText, setkeyText] = useState("");

//   const login = (userText, keyText) => {
//     if (!userText && !keyText) {
//       Alert.alert("Error", "Please enter a ticker", { username: "Ok" });
//     } else {
//       setUser((prevUsername) => {
//         [
//           { id: Math.random(), username: userText, password: keyText },
//           ...prevUsername,
//         ];
//       });
//     }
//   };

//   return (
//     //<Container>
//     <View style={styles.container}>
//       <Text style={styles.text}>Username</Text>
//       <TextInput
//         placeholder="Username"
//         style={styles.input}
//         onChangeText={(textValue) => setUserText(textValue)}
//       />

//       <Text style={styles.text}>Password</Text>
//       <TextInput
//         placeholder="Password"
//         style={styles.input}
//         onChangeText={(textValue) => setkeyText(textValue)}
//       />

//       <TouchableOpacity style={styles.btn} onPress={() => login(userText, keyText)}>
//         <Text style={styles.btnText}>Sign In</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => navigation.navigate("Home")}
//       >
//         <Text style={styles.btnText}>Home</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.btn}
//         onPress={() => navigation.navigate("Map")}
//       >
//         <Text style={styles.btnText}>Map</Text>
//       </TouchableOpacity>
//     </View>
//     //</Container>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     color: "#fff",
//     fontSize: 23,
//     textAlign: "center",
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   btn: {
//     backgroundColor: "#c2bad8",
//     padding: 9,
//     margin: 5,
//   },
//   btnText: {
//     color: "darkslateblue",
//     fontSize: 20,
//     textAlign: "center",
//   },
// });
import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";

import firebase from "firebase";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />

        <Button onPress={() => this.onSignUp()} title="Sign In" />
      </View>
    );
  }
}

export default Login;
