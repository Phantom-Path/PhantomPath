// //@refresh reset

// import React, { useState, useEffect, useCallback } from "react";
// import { GiftedChat } from "react-native-gifted-chat";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StyleSheet, TextInput, View, Button } from "react-native";
// import * as firebase from "firebase";
// import "firebase/firestore";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyBkAffiM30sGBZjz87CS7EcS7fS43kGAJ0",
// //   authDomain: "phantompath-330cc.firebaseapp.com",
// //   projectId: "phantompath-330cc",
// //   storageBucket: "phantompath-330cc.appspot.com",
// //   messagingSenderId: "168126105367",
// //   appId: "1:168126105367:web:5b3401ca04d6891e645952",
// //   measurementId: "G-C67ZDG901B",
// // };

// // if (firebase.apps.length === 0) {
// //   firebase.initializeApp(firebaseConfig);
// // }

// const db = firebase.firestore();
// const chatsRef = db.collection("chats");

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [name, setName] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     readUser();
//     const unsubscribe = chatsRef.onSnapshot((querySnapshot) => {
//       const messagesFirestore = querySnapshot
//         .docChanges()
//         .filter(({ type }) => type === "added")
//         .map(({ doc }) => {
//           const message = doc.data();
//           //createdAt is firebase.firestore.Timestamp instance
//           //https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp
//           return { ...message, createdAt: message.createdAt.toDate() };
//         })
//         .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
//       appendMessages(messagesFirestore);
//     });
//     return () => unsubscribe();
//   }, []);

//   const appendMessages = useCallback(
//     (messages) => {
//       setMessages((previousMessages) =>
//         GiftedChat.append(previousMessages, messages)
//       );
//     },
//     [messages]
//   );

//   async function readUser() {
//     const user = await AsyncStorage.getItem("user");
//     if (user) {
//       setUser(JSON.parse(user));
//     }
//   }
//   async function handlePress() {
//     const _id = Math.random().toString(36).substring(7);
//     const user = { _id, name };
//     await AsyncStorage.setItem("user", JSON.stringify(user));
//     setUser(user);
//   }
//   async function handleSend(messages) {
//     const writes = messages.map((m) => chatsRef.add(m));
//     await Promise.all(writes);
//   }

//   // if (!user) {
//   //   return (
//   //     <View style={styles.container}>
//   //       <TextInput
//   //         style={styles.input}
//   //         placeholder="Enter your name"
//   //         value={name}
//   //         onChangeText={setName}
//   //       />
//   //       <Button onPress={handlePress} title="Enter the chat" />
//   //     </View>
//   //   );
//   // }
//   return <GiftedChat messages={messages} user={user} onSend={handleSend} />;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 30,
//   },
//   input: {
//     height: 50,
//     width: "100%",
//     borderWidth: 1,
//     padding: 15,
//     marginBottom: 20,
//     borderColor: "gray",
//   },
// });

//-------------------------------------> Original WE NEED THIS BEOW

import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { Platform, KeyboardAvoidingView, SafeAreaView } from "react-native";
import Fire from "../Fire";

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  get user() {
    return {
      _id: Fire.uid, //adjust?
      name: this.props.navigation.state.params.name, //change
    };
  }

  componentDidMount() {
    Fire.get((message) =>
      this.setState((previous) => ({
        message: GiftedChat.append(previous.messages, message),
      }))
    );
  }

  componentWillUnmount() {
    Fire.off;
  }

  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.send}
        user={this.user}
      />
      // <GiftedChat
      // messages={this.state.messages}
      // onSend={Fire.send}
      // user='altus'
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
    return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
  }
}


//------------> Extra stuff

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
