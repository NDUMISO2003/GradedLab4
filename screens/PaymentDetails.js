import React, { useContext, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { FormContext } from '../screens/FormContext';

export default function PaymentDetails({ navigation }) {
  const { setPaymentDetails } = useContext(FormContext);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = () => {
    setPaymentDetails({ cardNumber, expiryDate, cvv });
    alert('Payment information saved!');
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        style={styles.input}
        maxLength={16}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Expiry Date(MM/YY)"
        value={expiryDate}
        onChangeText={setExpiryDate}
        style={styles.input}
        maxLength={5}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        secureTextEntry
        style={styles.input}
        maxLength={3}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
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
