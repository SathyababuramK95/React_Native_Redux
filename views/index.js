import React from 'react';
import {Platform, StyleSheet, Text, View, Image,ProgressBarAndroid} from 'react-native';
import { CheckBox, Button , ListItem,Input,Item, Container} from 'native-base';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <View style = {styles.logo}>
          <Image source={require('../assets/logo.png')}  style = {styles.logoImage}/>
        </View>
        <Text style = {styles.logoText}>Travel App</Text>
        <Text style={styles.sectionText}>Best way to organize travels</Text>
        <View>
          <Button rounded block info style = {styles.buttonStyle} onClick={() => navigation.navigate('Signup')}>
            <Text style={{ color: '#fff', fontSize: 20 }} >Sign Up</Text>
          </Button>
          <Button rounded block info style={styles.buttonSignIn} onClick={() => navigation.navigate('Login')}>
            <Text style={{ color: '#4FC3F7', fontSize: 20 }}>Sign In</Text>
          </Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo : {
    height : 180,
    width: 180,
    backgroundColor : '#fff',
    borderRadius : 100 / 2,
   // marginTop : -150,
    shadowColor: '#E0E0E0',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 3
  },
  logoImage : {
    height : 140,
    width : 100,
    marginLeft : 40,
    marginTop : 20
  },
  logoText : {
    fontSize : 45,
   // fontWeight : 'bold',
    paddingTop : 20
  },
  sectionText : {
    color: '#CFD8DC'
  },
  buttonStyle : {
     width : 330,
    height : 60, 
    marginTop : 50,
    paddingLeft : 10,
   // marginLeft : 20,
    shadowColor: '#E0E0E0',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 3,
    backgroundColor: '#4FC3F7'
  },
   buttonSignIn : {
    // width : 280,
    height : 60, 
    marginTop : 10,
  //  marginLeft : 20,
    shadowColor: '#E0E0E0',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 3,
    backgroundColor: '#fff',
     borderWidth: 0.5,
     borderColor: '#4FC3F7',
  },
  // buttonBox : {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#949848',
  //   height  :10
  // }
});

export default Home;