import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import Logo from '../components/Logo';
import { serverPost } from '../services/Fetch';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { retrieveToken } from '../services/Token';
import { serverGet } from '../services/Fetch';
import { serverPut } from '../services/Fetch';
class Update_Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      firstName: '',
      lastName: '',
      arr: '',
    }
    retrieveToken()
      .then((token) => {
        this.state.token = token;
        serverGet('profile', token)
          .then((res) => {
            this.setState({arr: res})
            console.log(this.state.arr);
        });
      });  
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit() {
    const { navigate } = this.props.navigation;
    var params = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    }
    serverPut('profile', params, this.state.token)
      .then((res) => {
        if(res.message) {
          Alert.alert("Invalid credentials");
        }
        else {
          Alert.alert("You successfully updated your profile");
          navigate('Dashboard', { name: this.state.firstName });
        }
    });
  }
  render() {
    const { navigate } = this.props.navigation;
    return(
      <KeyboardAwareScrollView style={styles.scrollView}>
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
              title= "Update"
              color='#ffffff'
            />
          </View>
        </View>
      </KeyboardAwareScrollView>);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03a9f4',
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  scrollView: {
    backgroundColor: '#03a9f4',
    flex: 1,  
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems:'center',
    justifyContent:'center',
    marginVertical: 16,
    flexDirection: 'row',
    marginBottom: 70,
    marginTop: 120,
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

export default Update_Profile;
