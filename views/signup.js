import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import { Button ,Input,Item ,Container,Icon,Toast} from 'native-base';

function SignUp({navigation,props}) {

  let [email, setEmail] = useState('');
  let [userName, setUserName] = useState('');
  let [password, setPassword] = useState('');

  function inputChange(value, type) {
      if (type == 'username') {
          setUserName(value)
      } else if(type == 'email') {
          setEmail(value)
      }else if(type == 'password') {
          setPassword(value)
      }
  }

  function doSignUp(){
    if(!userName || !email || !password){
        alert("All fields must be entered");
        return;
    }
    
    Toast.show({
      text: "User Registered Successfully",
      buttonText: "Okay",
      type: "success"
    })

  }

  return (
    <Container>
        <View style={styles.firstBox}>
          <View style={styles.logo}>
            <Image source={require('../assets/logo.png')}  style = {styles.logoImage}/>
          </View>
          <Text style={styles.logoText}>Sign Up</Text>
        </View>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center', backgroundColor: '#fff', height: 200, alignItems : "center"}}>
               <Container style={styles.formBox}>
                <Item>
                  <Input placeholder='Username'value={userName} onChange={(e) => inputChange(e.target.value, 'username')}/>
                  <Icon active name='person-circle' />
                </Item>
                <Item>
                  <Input placeholder='E-mail'value={email} onChange={(e) => inputChange(e.target.value, 'email')}/>
                  <Icon active name='mail-open' />
                </Item>
                <Item>
                  <Input placeholder='password' type="password" value={password} onChange={(e) => inputChange(e.target.value, 'password')}/>
                  <Icon active name='cellular' />
                </Item>
               </Container>
        </View>
        <Button rounded  info style={styles.button}>
          <Text style={{ color: '#fff', fontSize: 20,alignSelf : "center"}} onClick={() => doSignUp()}>Sign Up</Text>
        </Button>
        <View style={{
           justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={styles.sectionText} onClick={() => navigation.navigate('Login')}>Already have an account, Sign In</Text>
        </View>
    </Container>
  );
}
    

const styles = StyleSheet.create({
    firstBox : {
      backgroundColor: '#039BE5',
      justifyContent: 'center',
      alignItems: 'center',
      height  : 200, 
      flex : 0.6
    },
    logo : {
      height : 100,
      width: 100,
      backgroundColor : '#fff',
      borderRadius : 50 / 2,
     // marginTop : 20,
      shadowColor: '#E0E0E0',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 3
    },
    logoImage : {
      height : 100,
      width : 60,
      // alignItems : "center",
      marginLeft : 20,
      marginTop : 10
    },
    logoText : {
      fontSize : 30,
      paddingTop : 10,
      color : '#fff'
    },
    formBox : {
      height : 60,
      width : 380,
      backgroundColor : '#fff',
      marginTop : -30,
      shadowColor: '#E0E0E0',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 3,
      borderRadius : 20 / 2,
      justifyContent: 'center',
      alignItems: 'center',
      padding : 20
    },
    button: {
     width: 280,
      height: 60,
      padding : 20,
      marginTop : -30,
      backgroundColor: '#4FC3F7',
      alignSelf : "center",
      justifyContent: 'center',
      alignItems: 'center'
    },
    sectionText: {
      color: '#BDBDBD',
      marginTop : 10,
      fontSize : 15
    },
  });

  export default SignUp;