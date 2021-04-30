import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-community/google-signin";

GoogleSignin.configure({
  webClientId: "",
  offlineAccess: true,
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGoogleInfo: {},
      loaded: false,
    };
  }
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({
        userGoogleInfo: userInfo,
        loaded: true,
      });
      console.log(this.state.userGoogleInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("e 1");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("e 2");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("e 3");
      } else {
        console.log(error.message);
      }
    }
  };
  render() {
    return (
      <View>
        <GoogleSigninButton
          style={{ width: 222, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
        />
        {this.state.loaded ? (
          <View>
            <Text>{this.state.userGoogleInfo.user.name}</Text>
            <Text>{this.state.userGoogleInfo.user.email}</Text>
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: this.state.userGoogleInfo.user.photo }}
            />
          </View>
        ) : (
          <Text>Not SignedIn</Text>
        )}
      </View>

      // <div className='container'>
      //   <form onSubmit={handleSubmit} name={name}>
      //     <div>
      //       <label htmlFor='username'>
      //         <small>Username</small>
      //       </label>
      //       <input name='username' type='text' />
      //     </div>
      //     <div>
      //       <label htmlFor='password'>
      //         <small>Password</small>
      //       </label>
      //       <input name='password' type='password' />
      //     </div>
      //     <div>
      //       <button type='submit'>{displayName}</button>
      //     </div>
      //     {error && error.response && <div> {error.response.data} </div>}
      //   </form>
      // </div>
    );
  }
}

// const mapDispatch = (dispatch) => {
// 	return {
// 		handleSubmit(evt) {
// 			evt.preventDefault();
// 			const formName = evt.target.name;
// 			const username = evt.target.username.value;
// 			const password = evt.target.password.value;
// 			dispatch(authenticate(username, password, formName));
// 		},
// 	};
// };

// export const Login = connect(mapLogin, mapDispatch)(AuthForm);
// export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
