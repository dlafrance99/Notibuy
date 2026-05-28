import React, { useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/RootNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icons
import Fontisto from '@expo/vector-icons/Fontisto';

//Home Screens
import HomeScreen from './src/screens/HomeScreen';

//Context
import { Provider as WishListContext } from './src/context/WishListContext';

//Constants
import Colors from './src/constants/Colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.Black,
          paddingTop: 0,
          position: 'absolute',
          borderTopColor: Colors.Black,
          borderTopWidth: 3,
        },
        tabBarInactiveBackgroundColor: Colors.Black,
        tabBarInactiveTintColor: '#fefbe1',
        tabBarActiveBackgroundColor: Colors.Secondary,
        tabBarActiveTintColor: Colors.Gray,
      }}

    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="world-o" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}


const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="HomeStack" component={BottomTabNav} options={{ gestureEnabled: false }} />
      {/* <Stack.Screen
        name="Loading"
        component={LoadingScreen}
      /> */}
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <HomeStack />
    </NavigationContainer>
  )
}

export default () => {
  return (
    <WishListContext>
      <App />
    </WishListContext>
  )
}