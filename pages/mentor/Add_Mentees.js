import React, {Component} from 'react';
import {Alert, Text, View, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import Logo from '../../components/Logo';
import { serverPutResponse } from '../../services/Fetch';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { retrieveToken } from '../../services/Token';
import CheckBox from 'react-native-check-box';


class Add_Mentees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentee: '',
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99');
    return(
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Logo/>
          <TextInput onChangeText={(value) => this.setState({mentee: value})}
            style={styles.inputBox}
            placeholder="Mentee's Email"
            placeholderTextColor="white"
          />
          <View style={styles.button}>
            <Button
              onPress={() =>{
                var params = {
                  mentee: this.state.mentee,
                }
                retrieveToken()
                  .then((token) => {
                    serverPutResponse('add_mentee', params, token)
                      .then((res) => {
                        console.log(res);
                        if (res.mentee_dne) {
                          Alert.alert("Mentee does not exist");
                        } else if (res.mentee_is_current_user) {
                          Alert.alert("That's your account.");
                        } else if (res.mentee_added) {
                          Alert.alert("Mentee added successfully");
                          navigate('Dashboard', {name: firstName});
                        } else if (res.mentee_already_exists) {
                          Alert.alert("Mentee has already been added to your account");
                        } else {
                          Alert.alert("Please try again.");
                        }
                      });
                  });
              }}
              title="Submit"
              color="#ffffff"
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
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
    marginTop: 100,
  },
  signupText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Arial-ItalicMT',
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
    justifyContent:'center',
  },
  buttonContainer: {
    alignItems:'center',
    justifyContent:'center',
 },   
});

export default Add_Mentees;
