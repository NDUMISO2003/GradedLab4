import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/UserDetails';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddressDetails from '../screens/AddressDetails';
import PaymentDetails from '../screens/PaymentDetails';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FormProvider } from '../screens/FormContext'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Menu" 
        component={MenuScreen} 
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="restaurant-menu" size={28} color="yellow" />
          ),
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="shopping-cart" size={28} color="yellow" />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="person" size={28} color="yellow" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MainStackNavigator() {
  return (
    <FormProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen 
            name="SignIn" 
            component={SignInScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Main" 
            component={MainTabNavigator} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="AddressDetails" 
            component={AddressDetails} 
            options={{ title: 'Enter Address Details' }} 
          />
          <Stack.Screen 
            name="PaymentDetails" 
            component={PaymentDetails} 
            options={{ title: 'Enter Payment Details' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FormProvider>
  );
}

export default MainStackNavigator;


