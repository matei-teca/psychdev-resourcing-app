import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';

import Firebase from '../config/firebase';
import { AuthenticatedUserContext } from './AuthenticatedUserProvider';
import { TypeOfUserContext } from './AuthenticatedUserProvider';
import AuthStack from './AuthStack';
import SpecialistStack from './SpecialistStack';
import HomeStack from "./HomeStack"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tabs = createBottomTabNavigator();

import { names } from "../screensNames/screensNames";

// import {decode, encode} from 'base-64'
// if (!global.btoa) {  global.btoa = encode }
// if (!global.atob) { global.atob = decode }


const auth = Firebase.auth();

export default function RootNavigator() {
  const { specialist } = useContext(TypeOfUserContext)
    const { user, setUser } = useContext(AuthenticatedUserContext);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // onAuthStateChanged returns an unsubscriber
      const unsubscribeAuth = auth.onAuthStateChanged(async authenticatedUser => {
        try {
          await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      });
      
      // unsubscribe auth listener on unmount
      return unsubscribeAuth;
    }, []);
  
    if (isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      );
    }
  
    return (
      <NavigationContainer>
        {/* <Tabs.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 12,
            padding: 10,
          },
          activeTintColor: "white",
          inactiveTintColor: "white",
          activeBackgroundColor: "black",
          inactiveBackgroundColor: "black",
        }}
      >
        {specialist ? 
        <Tabs.Screen
          name={names.tab2}
          component={AuthStack}
          options={{ headerShown: false }}
        /> 
      : specialist && user ? 
        <Tabs.Screen
          name={names.tab3}
          component={SpecialistStack}
          options={{ headerShown: false }}
        />: 
        <Tabs.Screen
          name={names.tab1}
          component={HomeStack}
          options={{ headerShown: false }}
        />}

        
      </Tabs.Navigator> */}


      <Tabs.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 12,
            padding: 10,
          },
          activeTintColor: "white",
          inactiveTintColor: "white",
          activeBackgroundColor: "black",
          inactiveBackgroundColor: "black",
        }}
      >
        {specialist && !user ? 
        <>
           <Tabs.Screen
          name={names.tab1}
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tabs.Screen
          name={names.tab2}
          component={AuthStack}
          options={{ headerShown: false }}
        /> 
       
        </>
      : specialist && user ? 
        <Tabs.Screen
          name={names.tab3}
          component={SpecialistStack}
          options={{ headerShown: false }}
        />: 
        <Tabs.Screen
          name={names.tab1}
          component={HomeStack}
          options={{ headerShown: false }}
        />}
        
        </Tabs.Navigator>
      
      {/* {user ? <SpecialistStack /> : <AuthStack />} */}
      </NavigationContainer>
    );
  }