import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

import Logo from '../components/Logo';
import { serverGet, serverUpdate } from '../services/Fetch';
import { storeToken } from '../services/Token';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.getName = this.getName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getName(token) {
    const { navigate } = this.props.navigation;
    serverGet('profile', token)
      .then((res) => {
        navigate('Dashboard', { name: res.firstname });
      })
  }

  handleSubmit() {
    const { navigate } = this.props.navigation;
    var params = {
      email: this.state.email,
      password: this.state.password,
    }
    serverUpdate('POST', 'auth/login', params)
      .then((res) => {
        if(res.message) {
          Alert.alert("Invalid credentials");
        }
        else {
          storeToken(res.auth_token);
          this.getName(res.auth_token);
        }
    });
  }
   render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <Logo/>
        <TextInput
          onChangeText={(value) => this.setState({email: value})}
          style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor="white"
        />
        <TextInput
          onChangeText={(value) => this.setState({password: value})}
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="white"
        />
        <View style={styles.button}>
          <Button
            onPress={this.handleSubmit}
            title="Login"
            color="#ffffff"
          />
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}> Don't have an account yet?</Text> 
          <Button
              title= "Sign up here!"
              color='#ffffff'
              fontSize = '30'
              onPress={() => {
                navigate('Register');
          }}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03a9f4',
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  signupTextCont: {
    marginTop: 250,
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'row',
    marginBottom: 50,
    },
  signupText: {
    color: 'white',
    fontSize: 16,
  },
  inputBox: {
    width: 300,
    height: 40,
    fontSize: 18,
    borderWidth: 2, 
    borderRadius: 20,
    borderColor: '#ffffff',
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom: 20,
    paddingHorizontal: 16,
    color: '#ffffff'
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#01579b',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#01579b',
    marginBottom: 20,
    justifyContent:'center',
  },
});

export default Login;
