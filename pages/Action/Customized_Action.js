import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import CheckBox from 'react-native-check-box';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { retrieveToken } from '../../services/Token';
import { serverGet } from '../../services/Fetch';

class Customized_Action extends Component {
  constructor(props){
     super(props);
     this.state = {
        customizedAction1: '',
        customizedAction2: '',
        customizedAction3: '',
        customizedAction4: '',
        customizedAction5: '',
        goalID: this.props.navigation.getParam('goalID', 'noID'),
        goal: '',
     }

     retrieveToken()
      .then((token) => {
        serverGet('goals/' + this.state.goalID, token)
          .then((res) => {
            this.setState({goal: res.category})
        });
      });
  }
   render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'BOB');
    const goal = this.state.goal;
    const goalID = this.state.goalID;  
    return(
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.titleText1}> Hi {firstName},</Text>
          <Text style={styles.titleText2}> Let's Set a Goal! </Text> 
          <View
            style={styles.line}
          /> 
          <Text style={styles.actionText}> What Action will your take for your {goal} goal? </Text>

          <TextInput
            onChangeText={(value) => this.setState({customizedAction1: value})}
            style={styles.inputBox}
            placeholder="Customize your actions here!"
            placeholderTextColor="white"
          /> 
          <TextInput
            onChangeText={(value) => this.setState({customizedAction2: value})}
            style={styles.inputBox}
            placeholder="Customize your actions here!"
            placeholderTextColor="white"
          /> 
          <TextInput
            onChangeText={(value) => this.setState({customizedAction3: value})}
            style={styles.inputBox}
            placeholder="Customize your actions here!"
            placeholderTextColor="white"
          /> 
          <TextInput
            onChangeText={(value) => this.setState({customizedAction4: value})}
            style={styles.inputBox}
            placeholder="Customize your actions here!"
            placeholderTextColor="white"
          /> 
          <TextInput
            onChangeText={(value) => this.setState({customizedAction5: value})}
            style={styles.inputBox}
            placeholder="Customize your actions here!"
            placeholderTextColor="white"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button 
                title= "Back"
                color= "#ffffff"       
                onPress={() => {
                    navigate('Dashboard', { name: firstName});
              }}
              />
            </View>
            <View style={styles.button}>
              <Button
                    title= "Next"
                    color='#ffffff'
                    fontSize = '30'
                    onPress={() => {
                      var customizedAction1 = this.state.customizedAction1;
                      var customizedAction2 = this.state.customizedAction2;
                      var customizedAction3 = this.state.customizedAction3;
                      var customizedAction4 = this.state.customizedAction4;
                      var customizedAction5 = this.state.customizedAction5;
                      this.state.goalAction =[customizedAction1,customizedAction2,customizedAction3,customizedAction4,customizedAction5];
                      if (customizedAction1 == '' && customizedAction2 == '' && customizedAction3 == '' && customizedAction4 == '' && customizedAction5 == '') {
                        Alert.alert('pelase enter at least one action');
                      } else {
                        navigate('Goal_Summary', { name: firstName, actions: this.state.goalAction, goalType: goal, goalID: goalID});
                      }             
                }}
              />       
            </View>    
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
  },
  scrollView: {
    backgroundColor: '#03a9f4',
    flex: 1,  
  },
  titleText1: {
    fontSize: 40,     
    color: '#ffffff', 
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    fontFamily: 'Arial-ItalicMT',
  },
  titleText2: {
    fontSize: 40,     
    color: '#ffffff', 
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
    fontFamily: 'Arial-ItalicMT',
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 5,
    marginTop: 10,
    marginBottom: 30
  },
  box: {
    marginTop: 50,
    padding: '50'
  },
  inputBox: {
    width: 300,
    height: 40,
    fontSize: 18,
    borderWidth: 2, 
    borderRadius: 20,
    borderColor: '#ffffff',
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginLeft: 40,
    marginTop: 10,
    paddingHorizontal: 16,
    color: '#ffffff'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: '#01579b',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#01579b',
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 40,
  },
  actionText: {
    fontSize: 30, 
    fontWeight: 'bold',    
    color: '#ffffff',
    alignItems:'center', 
    paddingHorizontal: 30,
    fontFamily: 'AvenirNext-HeavyItalic',
    textAlign: 'center'
  },

  
});

export default Customized_Action;
