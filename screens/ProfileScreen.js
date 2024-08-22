import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from '../screens/Context'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const ProfileScreen = () => {
  const { user } = useContext(UserContext); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      {user && (
        <>
          
          <View style={styles.userInfo}>
            <MaterialIcons name="person" size={24} color="#FFD700" /> 
            <Text style={styles.text}>Name: {user.name}</Text>
            <Text style={styles.text}>Email: {user.email}</Text>
            <Text style={styles.text}>Phone: {user.phone}</Text>
          </View>

          
          {user.address && (
            <View style={styles.addressInfo}>
              <MaterialIcons name="location-on" size={24} color="#FFD700" /> 
              <Text style={styles.text}>Address: {user.address}</Text>
              <Text style={styles.text}>City: {user.city}</Text>
              <Text style={styles.text}>State: {user.state}</Text>
              <Text style={styles.text}>Zip: {user.zip}</Text>
            </View>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000', 
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: '#FFD700', 
  },
  userInfo: {
    marginBottom: 16,
  },
  addressInfo: {
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    color: '#FFD700', 
    marginVertical: 4,
    marginLeft: 8,
  },
});

export default ProfileScreen;


