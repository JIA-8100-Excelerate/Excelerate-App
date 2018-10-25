import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import CheckBox from 'react-native-check-box';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Customized_Action extends Component {
  constructor(props){
     super(props);
     this.state = {
        customizedAction1: '',
        customizedAction2: '',
        customizedAction3: '',
        customizedAction4: '',
        customizedAction5: '',
     }
  }
   render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'BOB');
    const goal = this.props.navigation.getParam('goal', 'did not get goal');
    console.log(firstName);
    console.log(goal); 
    
    return(
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.titleText}> Hi {firstName},</Text>
          <Text style={styles.titleText}> Let's Set a Goal! </Text> 
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
                      navigate('Goal_Summary', { name: firstName, actions: this.state.goalAction, goalType: goal});
                    }             
              }}
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
  },
  scrollView: {
    backgroundColor: '#03a9f4',
    flex: 1,  
  },
  titleText: {
    fontSize: 50,     
    color: '#ffffff',
    alignItems:'center', 
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
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#01579b',
    borderRadius: 20,
    borderWidth: 2, 
    borderColor: '#01579b',
    marginBottom: 20,
    marginLeft: 40,
    marginTop: 20
  },
  actionText: {
    fontSize: 30, 
    fontWeight: 'bold',    
    color: '#ffffff',
    alignItems:'center', 
    paddingHorizontal: 30,
  },

  
});

export default Customized_Action;
