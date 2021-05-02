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
