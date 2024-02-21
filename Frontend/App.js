import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import HomeScreen from './screens/Home.js'
import LoginScreen from './screens/Login.js'
import Loader from './components/Loader.js'
import SplashScreen from './screens/SplashScreen.js'
import Test from './screens/test.js'
import BussinessScreen from './screens/Bussiness.js'
import ProfileScreen from './screens/Profile.js'
import TimeKeeping from './screens/TimeKeeping.js'
import RequestOTScreen from './screens/RequestOTScreen.js'
import OTScreen from './screens/OTScreen.js'
import DetailScreen from './screens/DetailOTScreen.js'
import RequestLeave from './screens/RequestLeave.js'
import SalaryScreen from './screens/SalaryScreen.js'
import TimeCheckingScreen from './screens/TimeCheckingScreen.js'







import {UserProvider}  from './components/UserContext.js';



const Stack = createStackNavigator();
const App = () => {
  const [user, setUser] = useState(null);
  return (
    <UserProvider >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="TestScreen" component={Test} options={{headerShown: false}}/>
          <Stack.Screen name="BussinessScreen" component={BussinessScreen} options={{headerShown: false}}/>
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}}/>
          <Stack.Screen name="TimeKeeping" component={TimeKeeping} options={{headerShown: false}}/>
          <Stack.Screen name="RequestOTScreen" component={RequestOTScreen} options={{headerShown: false}}/>
          <Stack.Screen name="OTScreen" component={OTScreen} options={{headerShown: false}}/>
          <Stack.Screen name="DetailScreen" component={DetailScreen} options={{headerShown: false}}/>
          <Stack.Screen name="RequestLeave" component={RequestLeave} options={{headerShown: false}}/>
          <Stack.Screen name="SalaryScreen" component={SalaryScreen} options={{headerShown: false}}/>
          <Stack.Screen name="TimeCheckingScreen" component={TimeCheckingScreen} options={{headerShown: false}}/>


        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
      
  );
};
export default App;



