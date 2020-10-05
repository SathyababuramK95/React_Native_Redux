import React from 'react';
import {StyleSheet, Text, View, Image } from 'react-native';
import { Button ,Input,Item ,Container,Icon} from 'native-base';
import { connect } from 'react-redux';
import { ChangeUserStatus, StoreUserDetails } from '../reducers/action'

function Login(props) {

  let [userName, setUserName] = useState('');
  let [password, setPassword] = useState('');

  function inputChange(value, type) {
    if (type == 'username') {
        setUserName(value)
    } else if(type == 'password') {
        setPassword(value)
    }
  }

  function doLogin() {
    if(!userName || !password){
        alert("All fields must be entered");
        return;
    }
    
    Toast.show({
      text: "User SignedIn Successfully",
      buttonText: "Okay",
      type: "success"
    })

    props.ChangeUserStatus(true);
    props.StoreUserDetails({userName : userName});

  }

    return(
        <View style={loginStyle.mainView}>
            <View style={loginStyle.topBox}>
                <View style={loginStyle.logoBox}>
                    <Image source={require('../assets/logo.png')}  style = {loginStyle.logoImage}/>
                </View>
                <Text style={loginStyle.signInText}>Sign In</Text>
            </View>
            <View style={loginStyle.middleBox}> 
                <View style={loginStyle.formBox}>
                    <Item>
                    <Input placeholder='Username'value={userName} onChange={(e) => inputChange(e.target.value, 'username')}/>
                    <Icon active name='person-circle' />
                    </Item>
                    <Item>
                    <Input placeholder='password'type="password" value={password} onChange={(e) => inputChange(e.target.value, 'password')}/>
                    <Icon active name='cellular' />
                    </Item>
                </View>
            </View>
            <View style={loginStyle.buttonView}>
                <Button rounded  info style={loginStyle.button}>
                    <Text style={{ color: '#fff', fontSize: 20,alignSelf : "center"}} onClick={() => doLogin()}>Login</Text>
                </Button>
                <Text onClick={() => props.navigation.navigate('Signup')} style={loginStyle.sectionText}>Create an account, Sign Up</Text>
            </View>
        </View>
    )
    
}

const loginStyle = StyleSheet.create({
    mainView : {
        flex : 1,
        flexDirection : "column",
        backgroundColor: '#fff' ,
    },
    topBox : {
        flex : 0.5,
        backgroundColor: '#039BE5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoBox : {
        height : 150,
        width : 150,
        backgroundColor : '#fff',
        borderRadius : 50 / 2,
        shadowColor: '#E0E0E0',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage : {
        height : 80,
        width : 60,
    },
    signInText : {
        color : '#fff',
        fontSize : 40
    },
    middleBox : {
        justifyContent: 'center',
        alignItems: 'center',
        flex : 0.3,
    },
    formBox : {
       // flex : 3,
        height : 200,
        width : 380,
        backgroundColor : '#fff',
        marginTop : -40,
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
        marginTop : -60,
        backgroundColor: '#4FC3F7',
        alignSelf : "center",
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonView : {
        flex : 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionText: {
        color: '#BDBDBD',
        marginTop : 10,
        fontSize : 15
    },
})

const mapDispatchToProps = (dispatch) => {
    return {
        ChangeUserStatus: (s) => { dispatch(ChangeUserStatus(s)) },
        StoreUserDetails : (s) => { dispatch(StoreUserDetails(s))}
    };
};

export default connect (null,mapDispatchToProps)(Login);