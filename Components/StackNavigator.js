import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../Pages/Login.js';
import ToDo from '../Pages/ToDo.js';


const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Login" 
      component={Login} 
      options={
          {headerShown : false}
      }
      />

      <Stack.Screen

      name="ToDo"
      component={ToDo}
      
      />

    </Stack.Navigator>
  );
}

export default StackNavigator;