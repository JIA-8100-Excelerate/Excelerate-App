import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import CheckBox from 'react-native-check-box'

class Set_Goal extends Component {
    constructor(props){
     super(props);

     this.state = {
        socialChecked: false,
        physicalChecked: false,
        academicChecked: false,
        cookingChecked: false,
        careerChecked: false,
     }
  }
   render() {
    const name = this.props.navigation.getParam('name', 'BOB');
    console.log(name);
    console.log(this.state.socialChecked); 
    
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}> Hi {name},</Text>
        <Text style={styles.titleText}> Let's Set a Goal! </Text> 
        <View
          style={styles.line}
        /> 
          <CheckBox 
            style={{marginLeft: 40,}}
            onClick={()=>{
                this.setState({
                     socialChecked:!this.state.socialChecked
                 })
               }} 
            isChecked={this.state.socialChecked} 
            rightText={"Social"}
            rightTextStyle = {{fontSize: 50, color: 'red'}}
            checkBoxColor='red'
            checkedImage={<Image source={require('../assets/checked.png')}/>}
            unCheckedImage={<Image source={require('../assets/unchecked.png')}/>}
          />   
           <CheckBox 
            style={{marginLeft: 40,}}
            onClick={()=>{
                this.setState({
                     physicalChecked:!this.state.physicalChecked
                 })
               }} 
            isChecked={this.state.physicalChecked} 
            rightText={"Physical"}
            rightTextStyle = {{fontSize: 50, color: 'orange'}}
            checkBoxColor='orange'
            checkedImage={<Image source={require('../assets/checked.png')}/>}
            unCheckedImage={<Image source={require('../assets/unchecked.png')}/>}
          /> 
          <CheckBox 
            style={{marginLeft: 40,}}
            onClick={()=>{
                this.setState({
                     academicChecked:!this.state.academicChecked
                 })
               }} 
            isChecked={this.state.academicChecked} 
            rightText={"Academic"}
            rightTextStyle = {{fontSize: 50, color: 'yellow'}}
            checkBoxColor='yellow'
            checkedImage={<Image source={require('../assets/checked.png')}/>}
            unCheckedImage={<Image source={require('../assets/unchecked.png')}/>}
          /> 
          <CheckBox 
            style={{marginLeft: 40,}}
            onClick={()=>{
                this.setState({
                     cookingChecked:!this.state.cookingChecked
                 })
               }} 
            isChecked={this.state.cookingChecked} 
            rightText={"Cooking"}
            rightTextStyle = {{fontSize: 50, color: 'green'}}
            checkBoxColor='green'
            checkedImage={<Image source={require('../assets/checked.png')}/>}
            unCheckedImage={<Image source={require('../assets/unchecked.png')}/>}
          /> 
          <CheckBox 
            style={{marginLeft: 40,}}
            onClick={()=>{
                this.setState({
                     careerChecked:!this.state.careerChecked
                 })
               }} 
            isChecked={this.state.careerChecked} 
            rightText={"Career"}
            rightTextStyle = {{fontSize: 50, color: 'blue'}}
            checkBoxColor='blue'
            checkedImage={<Image source={require('../assets/checked.png')}/>}
            unCheckedImage={<Image source={require('../assets/unchecked.png')}/>}
          /> 

          <TextInput
          onChangeText={(value) => this.setState({email: value})}
          style={styles.inputBox}
          placeholder="Customize your goal here!"
          placeholderTextColor="white"
        /> 
        <View style={styles.button}>
          <Button
                title= "Next"
                color='#ffffff'
                onPress={() => {
                  this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Action' })
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
    marginBottom: 50
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

  
});

export default Set_Goal;