import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screen1 from "../screens/screen1";
import Screen1A from "../screens/screen1A";
import Screen1B from "../screens/screen1B";
import Screen2 from "../screens/screen2";
import Screen3 from "../screens/screen3";

// import TestScreen from "../screens/testScreen";

import { names } from "../screensNames/screensNames";


const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
     
        <Stack.Screen
            name={names.screen1}
            component={Screen1}
            options={{ title: names.screen1, headerShown: false }}
          />
          <Stack.Screen
            name={names.screen1A}
            component={Screen1A}
            options={{ title: names.screen1A, headerShown: false }}
          />
    
    
          <Stack.Screen
            name={names.screen1B}
            component={Screen1B}
            options={{ title: names.screen1A, headerShown: false }}
          />
    
          <Stack.Screen
            name={names.screen2}
            component={Screen2}
            options={{ title: names.screen2, headerShown: false }}
          />

           {/* <Stack.Screen
            name={"Test Screen"}
            component={TestScreen}
            options={{ title: names.screen1, headerShown: false }}
          />
    
      */}
        </Stack.Navigator>
  );
}