import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SimpleLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Vetëm një email dhe password për krahasim
//   const validEmail = 'user@example.com';
//   const validPassword = '123456';

  const handleLogin = async () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      if (Platform.OS === 'web') {
        window.alert('Ju lutem plotësoni email dhe password');
      } else {
        Alert.alert('Gabim', 'Ju lutem plotësoni email dhe password');
      }
      return;
    }

    try {
      // Merr të dhënat nga AsyncStorage
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('userPassword');

      if (trimmedEmail === storedEmail && trimmedPassword === storedPassword) {
        // Sukses -> Home
        navigation.navigate('Home', { email: storedEmail });
      } else {
        if (Platform.OS === 'web') {
          window.alert('Email ose password i gabuar');
        } else {
          Alert.alert('Gabim', 'Email ose password i gabuar');
        }
      }
    } catch (error) {
      console.log('Gabim AsyncStorage:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput
        style={{
          height: 50,
          borderColor: '#ccc',
          borderWidth: 1,
          marginBottom: 15,
          borderRadius: 8,
          paddingHorizontal: 10,
        }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={{
          height: 50,
          borderColor: '#ccc',
          borderWidth: 1,
          marginBottom: 15,
          borderRadius: 8,
          paddingHorizontal: 10,
        }}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}