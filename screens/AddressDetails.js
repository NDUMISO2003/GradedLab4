
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FormContext } from '../screens/FormContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AddressDetails({ navigation }) {
  const { setAddressDetails } = useContext(FormContext);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleNext = () => {
    setAddressDetails({ address, city, state, zip });
    navigation.navigate('PaymentDetails');
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Icon name="home" size={24} color="#FFD700" />
        <TextInput
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
          style={styles.input}
        />
      </View>
      <View style={styles.section}>
        <Icon name="location-city" size={24} color="#FFD700" />
        <TextInput
          placeholder="City"
          value={city}
          onChangeText={setCity}
          style={styles.input}
        />
      </View>
      <View style={styles.section}>
        <Icon name="location-on" size={24} color="#FFD700" />
        <TextInput
          placeholder="State"
          value={state}
          onChangeText={setState}
          style={styles.input}
        />
      </View>
      <View style={styles.section}>
        <Icon name="pin-drop" size={24} color="#FFD700" />
        <TextInput
          placeholder="Zip Code"
          value={zip}
          onChangeText={setZip}
          style={styles.input}
        />
      </View>
      <Button title="Next" onPress={handleNext} color="#FFD700" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000', 
  },
  input: {
    height: 40,
    borderColor: '#FFD700', 
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    color: '#FFD700', 
  },

});


