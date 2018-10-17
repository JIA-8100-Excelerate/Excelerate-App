import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

import Logo from '../components/Logo';
import { serverFetch } from '../services/Fetch';
//import LoginForm from '../components/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const { navigate } = this.props.navigation;
    var params = {
      email: this.state.email,
      password: this.state.password,
    }
    serverFetch('POST', 'auth/login', params)
      .then((res) => {
        if(res.message) {
          Alert.alert("Invalid credentials");
        }
        else {
          console.log("hello!");
          console.log(res.auth_token);
          navigate('Set_Goal_Step1', { 
            name: "Bob"
          });
        }
    });
  }
   render() {
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
                this.props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Register' })
                  ],
            }))
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
