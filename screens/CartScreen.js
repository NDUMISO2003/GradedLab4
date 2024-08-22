

import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useCart } from '../screens/CartContext';

export default function CartScreen({ navigation }) {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const getTotalCost = () => {
    return cartItems.reduce((total, item) => {
      const numericPrice = parseFloat(String(item.price).replace('R', '')); 
      return total + (numericPrice * item.quantity);
    }, 0).toFixed(2);
  };

  const incrementQuantity = (id) => {
    const currentQuantity = cartItems.find(item => item.id === id).quantity;
    updateQuantity(id, currentQuantity + 1);
  };

  const decrementQuantity = (id) => {
    const currentQuantity = cartItems.find(item => item.id === id).quantity;
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>Price: R{parseFloat(String(item.price).replace('R', '')).toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={() => decrementQuantity(item.id)}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={() => incrementQuantity(item.id)}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Button title="Remove" onPress={() => removeFromCart(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          <View style={styles.summaryContainer}>
            <Text style={styles.total}>Total: R{getTotalCost()}</Text>
            <Button
              title="Proceed to Checkout"
              onPress={() => {
                navigation.navigate('AddressDetails'); 
              }}
            />
          </View>
        </>
      ) : (
        <Text>Your cart is empty!</Text>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000', // Black background
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#333', // Darker background for items
    padding: 16,
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700', 
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700', 
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  quantityButton: {
    backgroundColor: '#555', 
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700', 
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
    color: '#FFD700', 
  },
  summaryContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#333', 
    borderRadius: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700', 
  },
});





