import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedEmail === '' || trimmedPassword === '') {
      // Përdor alert të ndryshëm për web dhe mobile
      if (Platform.OS === 'web') {
        window.alert('Ju lutem plotësoni email dhe password');
      } else {
        Alert.alert('Gabim', 'Ju lutem plotësoni email dhe password');
      }
      return;
    }

     try {
      // Kontrollo në AsyncStorage nëse email-i ekziston
      const storedEmail = await AsyncStorage.getItem('userEmail');

      if (storedEmail === trimmedEmail) {
        // Email ekziston -> alert dhe rute te Login
        if (Platform.OS === 'web') {
          window.alert('Ky email është regjistruar tashmë! Shko te Login.');
        } else {
          Alert.alert('Info', 'Ky email është regjistruar tashmë! Shko te Login.');
        }
        navigation.navigate('Login');
        return;
      }

      // Email nuk ekziston -> ruaj të dhënat
      await AsyncStorage.setItem('userEmail', trimmedEmail);
      await AsyncStorage.setItem('userPassword', trimmedPassword);

      if (Platform.OS === 'web') {
        window.alert('Jeni regjistruar me sukses!');
      } else {
        Alert.alert('Sukses', 'Jeni regjistruar me sukses!');
      }

      // Rute te Login pas regjistrimit
      navigation.navigate('Login');

    } catch (error) {
      console.log('Gabim AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="SignIn" onPress={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});