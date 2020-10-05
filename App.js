import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Components
import Home from './views/index';
import SignUp from './views/signup';
import Login from './views/login';
import Store from './store';

const storeObject = Store.getState();
let initialRoutePath = null;
const Stack = createStackNavigator();

if(storeObject && storeObject.isuserloggedin){
  initialRoutePath = "DashBoard"
}else{
  initialRoutePath = "Home"
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }} initialRouteName ={initialRoutePath}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Signup" component={SignUp}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;