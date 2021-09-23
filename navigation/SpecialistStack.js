import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SpecialistScreen from '../screens/SpecialistScreen';

const Stack = createStackNavigator();

export default function SpecialistStack() {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='SpecialistScreen' component={SpecialistScreen} />
    </Stack.Navigator>
  );
}