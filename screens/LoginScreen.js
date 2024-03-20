import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button as RNButton, TouchableOpacity } from 'react-native';

import { Button, InputField, ErrorMessage } from '../components';
import { globalColors } from "../styles/globalColors";

import * as Animatable from "react-native-animatable";
import { useIsFocused } from '@react-navigation/native';




import Firebase from '../config/firebase';

const auth = Firebase.auth();


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [loginError, setLoginError] = useState('');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onLogin = async () => {
    try {
      if (email !== '' && password !== '') {
        await auth.signInWithEmailAndPassword(email, password);
        
      }
    } catch (error) {
      setLoginError(error.message);
    }
  };

  // const [focusColor, setFocusColor] = useState()

  //for animation to reload when navigating
  const isFocused = useIsFocused()


  return (
    <View style={styles.container}>
      { isFocused && 
      <Animatable.View
        animation="fadeInUpBig"
        style={styles.containerB}
      >
      <StatusBar style='dark-content' />
      <Text style={styles.title}>Login</Text>

      <View style={styles.containerC}>
      <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff' ,
          marginBottom: 20,
          borderRadius: 100,
          width: "100%",
          maxWidth: 600
        }}
        leftIcon='email'
        placeholder='Enter email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        // onFocus={() => setFocusColor({backgroundColor: "orange"})}
        // onFocus={() => console.log("works")}
        onChangeText={text => setEmail(text)}
      />
      
      
      <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 20,
          borderRadius: 100,
          width: "100%",
          maxWidth: 600

        }}
        leftIcon='lock'
        placeholder='Enter password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType='password'
        rightIcon={rightIcon}
        value={password}
        onChangeText={text => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      </View>
      {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}



      {/* <Button
        onPress={onLogin}
        backgroundColor='#f57c00'
        title='Login'
        tileColor='#fff'
        titleSize={20}
        containerStyle={{
          marginBottom: 24
        }}
      /> */}


<View style={styles.button}>
          <TouchableOpacity
            style={[styles.signIn]}
            onPress={onLogin}

            accessible={true}
                   accessibilityLabel={"acesta este butonul de logare"} accessibilityRole={"button"}
                   accessibilityHint={"apsand acest buton, te vei loga in contul specialistilor"}
          >
            <Text
              style={[
                styles.textSign
              ]}
            >
              Sign In
            </Text>
          </TouchableOpacity>

          </View>


      {/* <RNButton
        onPress={() => navigation.navigate('Signup')}
        title='Go to Signup'
        color='#fff'
      /> */}
            </Animatable.View>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.thirdColor,
    paddingTop: 50,
    paddingHorizontal: 12

  },

  containerB: {

    marginTop: 70
  },

  containerC: {
    alignItems:"center",

  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    alignSelf: 'center',
    paddingBottom: 24
  },

  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "40%",
    maxWidth: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: globalColors.secondColor,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: globalColors.mainColor
  },
});