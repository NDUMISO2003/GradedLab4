
import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Button, TextInput } from 'react-native';
import { useCart } from '../screens/CartContext';
import { Ionicons } from '@expo/vector-icons';

const menuItems = [
    {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Classic pizza topped with fresh tomatoes, mozzarella, and basil.',
    price: 'R120.00',
    image: require('../assets/pizza.png'),  
  },
  {
    id: '2',
    name: 'Cheeseburger',
    description: 'Juicy beef patty with cheddar cheese, lettuce, and tomato.',
    price: 'R85.00',
    image: require('../assets/burger.png'),  
  },
  {
    id: '3',
    name: 'Chicken Caesar Salad',
    description: 'Crisp romaine lettuce, parmesan, and croutons, dressed with Caesar dressing.',
    price: 'R65.00',
    image: require('../assets/salad.jpeg'),  
  },
  {
    id: '4',
    name: 'Spaghetti Carbonara',
    description: 'Traditional Italian pasta with creamy sauce, pancetta, and parmesan.',
    price: 'R120.00',
    image: require('../assets/spaghetti.jpeg'),  
  },
  {
    id: '5',
    name: 'Sushi Platter',
    description: 'Assorted sushi with fresh fish, served with soy sauce and wasabi.',
    price: 'R95.00',
    image: require('../assets/sushi.jpeg'),  
  },
  {
    id: '6',
    name: 'Tacos',
    description: 'Soft tacos filled with seasoned beef, lettuce, cheese, and salsa.',
    price: 'R100.00',
    image: require('../assets/dish.jpeg'),  
  },
];

export default function MenuScreen() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState('');

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Button style = {styles.button} title="Add to Cart" onPress={() => addToCart(item)}  />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="ios-search" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search food items..."
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        data={menuItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000', 
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: '#FFD700', 
    borderRadius: 4,
    padding: 8,
    color: '#FFD700', 
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#333', 
    padding: 16,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#FFD700'

  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700', 
  },
  description: {
    fontSize: 14,
    color: '#FFD700', 
  },
  price: {
    fontSize: 16,
    color: '#FFD700', 
  },
});



