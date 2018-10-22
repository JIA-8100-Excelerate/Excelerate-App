import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import CheckBox from 'react-native-check-box'

class Cooking_Action extends Component {
  constructor(props){
     super(props);
     this.state = {
        learnNewCuisineChecked: false,
        tryNewRestaurantChecked: false,
        makeNewDessertChecked: false,
        cookWithChecked: false,
        customizedAction: '',
        
     }
  }
   render() {
    const { navigate } = this.props.navigation;
    const firstName = this.props.navigation.getParam('name', 'GuitarBob99');
 
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}> Hi {firstName},</Text>
        <Text style={styles.titleText}> Let's Set a Goal! </Text> 
        <View
          style={styles.line}
        /> 
        <Text style={styles.actionText}> What Action will your take for your COOKING goal? </Text>

        <CheckBox 
          style={{marginLeft: 40, marginTop: 20}}
          onClick={()=>{
              this.setState({
                   learnNewCuisineChecked:!this.state.learnNewCuisineChecked
               })
             }} 
          isChecked={this.state.learnNewCuisineChecked} 
          rightText={"Learn one new Cuisine"}
          rightTextStyle = {{fontSize: 20, color: 'white'}}
          checkBoxColor='white'
        /> 
       <CheckBox 
          style={{marginLeft: 40, marginTop: 10}}
          onClick={()=>{
              this.setState({
                   makeNewDessertChecked:!this.state.makeNewDessertChecked
               })
             }} 
          isChecked={this.state.makeNewDessertChecked} 
          rightText={"Make new Dessert"}
          rightTextStyle = {{fontSize: 20, color: 'white'}}
          checkBoxColor='white'
        /> 
       <CheckBox 
          style={{marginLeft: 40, marginTop: 10}}
          onClick={()=>{
              this.setState({
                   tryNewRestaurantChecked:!this.state.tryNewRestaurantChecked
               })
             }} 
          isChecked={this.state.tryNewRestaurantChecked} 
          rightText={"Try new Restaurant"}
          rightTextStyle = {{fontSize: 20, color: 'white'}}
          checkBoxColor='white'
        />

        <CheckBox 
          style={{marginLeft: 40, marginTop: 10}}
          onClick={()=>{
              this.setState({
                   cookWithChecked:!this.state.cookWithChecked
               })
             }} 
          isChecked={this.state.cookWithChecked} 
          rightText={"Cook with friends"}
          rightTextStyle = {{fontSize: 20, color: 'white'}}
          checkBoxColor='white'
        />  

        <TextInput
          onChangeText={(value) => this.setState({customizedAction: value})}
          style={styles.inputBox}
          placeholder="Customize your Action here!"
          placeholderTextColor="white"
        />
        <View style={styles.button}>
          <Button
                title= "Submit"
                color='#ffffff'
                onPress={() => {
                  this.state.goalAction =['','','','',''];
                  if (this.state.learnNewCuisineChecked || this.state.makeNewDessertChecked || this.state.tryNewRestaurantChecked
                    || this.state.cookWithChecked || this.state.customizedAction!='') {
                    if (this.state.learnNewCuisineChecked) {
                      this.state.goalAction[0]='learn one new Cuisine '
                    } 
                    if (this.state.makeNewDessertChecked) {
                      this.state.goalAction[1]='make new Dessert '
                    } 
                    if (this.state.tryNewRestaurantChecked) {
                      this.state.goalAction[2]='try new Restaurant '
                    } 
                    if (this.state.cookWithChecked) {
                      this.state.goalAction[3]='cook with friends '
                    }
                    if (this.state.customizedAction!='') {
                      this.state.goalAction[4]= customizedAction
                    }
                    navigate('Goal_Summary', { name: firstName, actions: this.state.goalAction, goalType: 'Cooking'});
                  } else {
                    Alert.alert('Please set your actions')
                  }
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
    marginBottom: 10,
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
