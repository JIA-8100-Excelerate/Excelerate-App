import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import CheckBox from 'react-native-check-box';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Social_Action extends Component {
  constructor(props){
     super(props);
     this.state = {
        goToEventChecked: false,
        tryNewClubChecked: false,
        talkToSomeoneNewChecked: false,
        hangOutWithFriendChecked: false,
        customizedAction: '',
        
     }
  }
   render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99');
    const goalID = this.props.navigation.getParam('goalID', 'RipID');
 
    return(
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.titleText1}> Hi {firstName},</Text>
          <Text style={styles.titleText2}> Let's Set a Goal! </Text> 
          <View
            style={styles.line}
          /> 
          <Text style={styles.actionText}> What Actions will you take for your SOCIAL goal? </Text>

          <CheckBox 
            style={{marginLeft: 40, marginTop: 20}}
            onClick={()=>{
                this.setState({
                     goToEventChecked:!this.state.goToEventChecked
                 })
               }} 
            isChecked={this.state.goToEventChecked} 
            rightText={"Go to an event"}
            rightTextStyle = {{fontSize: 20, color: 'white'}}
            checkBoxColor='white'
          /> 
         <CheckBox 
            style={{marginLeft: 40, marginTop: 10}}
            onClick={()=>{
                this.setState({
                     talkToSomeoneNewChecked:!this.state.talkToSomeoneNewChecked
                 })
               }} 
            isChecked={this.state.talkToSomeoneNewChecked} 
            rightText={"Talk to someone new"}
            rightTextStyle = {{fontSize: 20, color: 'white'}}
            checkBoxColor='white'
          /> 
         <CheckBox 
            style={{marginLeft: 40, marginTop: 10}}
            onClick={()=>{
                this.setState({
                     tryNewClubChecked:!this.state.tryNewClubChecked
                 })
               }} 
            isChecked={this.state.tryNewClubChecked} 
            rightText={"Try a new club"}
            rightTextStyle = {{fontSize: 20, color: 'white'}}
            checkBoxColor='white'
          />

          <CheckBox 
            style={{marginLeft: 40, marginTop: 10}}
            onClick={()=>{
                this.setState({
                     hangOutWithFriendChecked:!this.state.hangOutWithFriendChecked
                 })
               }} 
            isChecked={this.state.hangOutWithFriendChecked} 
            rightText={"Hang out with friends"}
            rightTextStyle = {{fontSize: 20, color: 'white'}}
            checkBoxColor='white'
          />  

          <TextInput
            onChangeText={(value) => this.setState({customizedAction: value})}
            style={styles.inputBox}
            placeholder="Customize your Action here!"
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
                    onPress={() => {
                      this.state.goalAction =['','','','',''];
                      var customizedAction = this.state.customizedAction;
                      if (this.state.goToEventChecked || this.state.talkToSomeoneNewChecked || this.state.tryNewClubChecked
                        || this.state.hangOutWithFriendChecked || this.state.customizedAction!='') {
                        if (this.state.goToEventChecked) {
                          this.state.goalAction[0]='go to an event '
                        } 
                        if (this.state.talkToSomeoneNewChecked) {
                          this.state.goalAction[1]='talk to someone new '
                        } 
                        if (this.state.tryNewClubChecked) {
                          this.state.goalAction[2]='try a new club '
                        } 
                        if (this.state.hangOutWithFriendChecked) {
                          this.state.goalAction[3]='hang out with friends '
                        }
                        if (this.state.customizedAction!='') {
                          this.state.goalAction[4]= this.state.customizedAction
                        }
                        navigate('Goal_Summary', { name: firstName, actions: this.state.goalAction, goalType: 'Social', goalID: goalID});
                      } else {
                        Alert.alert('Please set your actions')
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
  inputBox: {
    width: 300,
    height: 40,
    fontSize: 18,
    borderWidth: 2, 
    borderRadius: 20,
    borderColor: '#ffffff',
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom: 20,
    marginLeft: 40,
    marginTop: 20,
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

export default Social_Action;
