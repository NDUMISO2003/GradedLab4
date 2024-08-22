
import React from 'react';
import MainStackNavigator from './screens/MainStackNavigator';
import { CartProvider } from './screens/CartContext';
import { UserProvider } from './screens/Context';

export default function App() {
  return (
    <UserProvider>
      <CartProvider>
        <MainStackNavigator />
      </CartProvider>
    </UserProvider>
  );
}
