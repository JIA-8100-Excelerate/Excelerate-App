import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import CheckBox from 'react-native-check-box'

class Cooking_Action extends Component {
  constructor(props){
     super(props);
     this.state = {
        goToEventChecked: false,
        tryNewClubChecked: false,
        talkToSomeoneNewChecked: false,
        hangOutWithFriendChecked: false,
     }
  }
   render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'BOB');
    
    console.log(firstName);
    
    
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}> Hi {firstName},</Text>
        <Text style={styles.titleText}> Let's Set a Goal! </Text> 
        <View
          style={styles.line}
        /> 
        <Text style={styles.actionText}> What Action will your take for your COOKING goal? </Text>

        <CheckBox 
            style={{marginLeft: 40,}}
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
            style={{marginLeft: 40,}}
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
            style={{marginLeft: 40,}}
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
            style={{marginLeft: 40,}}
            onClick={()=>{
                this.setState({
                     hangOutWithFriendChecked:!this.state.hangOutWithFriendChecked
                 })
               }} 
            isChecked={this.state.hangOutWithFriendChecked} 
            rightText={"Try a new club"}
            rightTextStyle = {{fontSize: 20, color: 'white'}}
            checkBoxColor='white'
          />  

        <View style={styles.button}>
          <Button
                title= "back"
                color='#ffffff'
                fontSize = '30'
                onPress={() => {
                  navigate('Set_Goal', { name: firstName });
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
    marginBottom: 20,
    marginLeft: 40,
    marginTop: 20,
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
  },
  actionText: {
    fontSize: 30, 
    fontWeight: 'bold',    
    color: '#ffffff',
    alignItems:'center', 
    paddingHorizontal: 30,
  },

  
});

export default Cooking_Action;
