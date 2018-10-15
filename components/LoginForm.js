import React, { Component } from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import { serverFetch } from '../services/Fetch';

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    serverFetch(this.state.email)
  }

  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#ffffff',
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#01579b',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#01579b',
    marginBottom: 20,
    justifyContent: 'center',
  },
});
