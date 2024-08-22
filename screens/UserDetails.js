import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';
import { UserContext } from '../screens/Context';

export default function SignInScreen({ navigation }) {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignIn = () => {
    if (!name || !email || !phone) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      Alert.alert('Error', 'Phone number must be 10 digits.');
      return;
    }
    setUser({ name, email, phone });
    navigation.navigate('Main');
  };

  return (
    <ImageBackground
      source={require('../assets/background-pic.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={styles.title}>WELCOME! SYAKWAMUKELA!</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="numeric"
        />
        <Button title="Next" onPress={handleSignIn} color="#FFD700" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    
  },
  welcome: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: '#FFD700',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 8,
    marginBottom: 14,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});



