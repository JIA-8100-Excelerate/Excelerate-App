import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import Logo from '../components/Logo';
import { serverFetch } from '../services/Fetch';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      firstName: '',
      lastName: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const { navigate } = this.props.navigation;
    var params = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      firstname: this.state.firstName,
      lastname: this.state.lastName,
    }
    serverFetch('POST', 'signup', params)
      .then((res) => {
        if(!res.auth_token) {
          console.log(res.message);
          Alert.alert(res.message);
        }
        else {
          console.log("worked");
          navigate('Set_Goal_Step1', { name: this.state.firstName });
        }
    });

  }
   render() {
    return(
      <View style={styles.container}>
        <Logo/>
        <TextInput onChangeText={(value) => this.setState({firstName: value})}
          style={styles.inputBox}
          placeholder="First Name"
          placeholderTextColor="white"
          />
          <TextInput onChangeText={(value) => this.setState({lastName: value})}
          style={styles.inputBox}
          placeholder="Last Name"
          placeholderTextColor="white"
          />
        <TextInput onChangeText={(value) => this.setState({email: value})}
        style={styles.inputBox}
          placeholder="Email"
          placeholderTextColor="white"
          />
          <TextInput onChangeText={(value) => this.setState({password: value})}
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="white"
          />  
          <TextInput onChangeText={(value) => this.setState({password_confirmation: value})}
          style={styles.inputBox}
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor="white"
          />  
          <View style={styles.button}>
            <Button   
            onPress={this.handleSubmit}
            title= "Register"
            color='#ffffff'
            >
            </Button>
          </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}> Already have an account?</Text>
          <Button
              title= "Login here!"
              color='#ffffff'
              fontSize = '30'
              fontWeight = '900'
              onPress={() => {
                this.props.navigation.dispatch(StackActions.reset({
                  index: 0,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Login' })
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
    justifyContent:'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems:'center',
    justifyContent:'center',
    marginVertical: '16',
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 150,
  },
  signupText: {
    color: 'white',
    fontSize: 16
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

export default Register;
