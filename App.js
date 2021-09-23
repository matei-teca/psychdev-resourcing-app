// import * as React from "react";
// import  {useEffect} from "react";
// import { Text, View, Button } from "react-native";



// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { globalStyles } from "./styles/globalStyles";

// import Screen1 from "./screens/screen1";
// import Screen1A from "./screens/screen1A";
// import Screen1B from "./screens/screen1B";
// import Screen2 from "./screens/screen2";
// import Screen3 from "./screens/screen3";
// import Screen4 from "./screens/screen4";
// import Screen5 from "./screens/screen5";
// import ScreenFb from "./screens/screenFb";

// // import { Screen1Name } from "./screensNames/Screen1Name";

// import { names } from "./screensNames/screensNames";



// const HomeStack = createStackNavigator();
// const LoginStack = createStackNavigator();
// const ProfilesStack = createStackNavigator();
// const Tabs = createBottomTabNavigator();

// // {
// //   HomeStack,
// //   ProfilesStack,

// // },
// // {
// //   tabBarOptions: {
// //     activeTintColor: '#e91e63',
// //     labelStyle: {
// //       fontSize: 12,
// //     },
// //     style: {
// //       backgroundColor: 'blue',
// //     },
// //   }
// // }

// function HomeStackScreen({navigation}) {
//   // React.useEffect(() => {
//   //   const unsubscribe = navigation.addListener('tabPress', (e) => {
//   //     // Prevent default behavior
//   //     e.preventDefault();

//   //     navigation.navigate(names.screen1)
//   //   });

//   //   return unsubscribe;
//   // }, [navigation]);

//   return (
//     <HomeStack.Navigator>

//       <HomeStack.Screen
//         name={names.screen1}
//         component={Screen1}
//         options={{ title: names.screen1, headerShown: false }}
//       />
//       <HomeStack.Screen
//         name={names.screen1A}
//         component={Screen1A}
//         options={{ title: names.screen1A, headerShown: false }}
//       />


//       <HomeStack.Screen
//         name={names.screen1B}
//         component={Screen1B}
//         options={{ title: names.screen1A, headerShown: false }}
//       />

//       <HomeStack.Screen
//         name={names.screen2}
//         component={Screen2}
//         options={{ title: names.screen2, headerShown: false }}
//       />

 
//     </HomeStack.Navigator>
//   );
// }

// // function LoginStackScreen() {
// //   return (
// //     <LoginStack.Navigator>
// //             <LoginStack.Screen
// //         name={names.screen4}
// //         component={Screen4}
// //         options={{ title: names.screen4, headerShown: false }}
// //       />

// //     <LoginStack.Screen
// //         name={names.screen5}
// //         component={Screen5}
// //         options={{ title: names.screen5, headerShown: false }}
// //       />


// //     </LoginStack.Navigator>
// //   );
// // }

// function ProfileStackScreen() {
//   return (
//     <ProfilesStack.Navigator>
//       <ProfilesStack.Screen
//         name={names.screen3}
//         component={Screen3}
//         options={({ route }) => ({ title: names.screen3, headerShown: false })}
//       />
//     </ProfilesStack.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Tabs.Navigator
//         tabBarOptions={{
//           labelStyle: {
//             fontSize: 12,
//             padding: 10,
//           },
//           activeTintColor: "white",
//           inactiveTintColor: "white",
//           activeBackgroundColor: "black",
//           inactiveBackgroundColor: "black",
//         }}
//       >
//         <Tabs.Screen
//           name={names.tab1}
//           component={HomeStackScreen}
//           options={{ headerShown: false }}
//         />
//         <Tabs.Screen
//           name={names.tab2}
//           component={LoginStackScreen}
//           options={{ headerShown: false }}
//         />
//         <Tabs.Screen
//           name={names.tab3}
//           component={ProfileStackScreen}
//           options={{ headerShown: false }}
//         />
//       </Tabs.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


import * as React from "react";

import Routes from "./navigation";

function App() {
    return (
     <Routes/>
    );
  }
  
  export default App;