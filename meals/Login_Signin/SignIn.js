import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Platform } from 'react-native';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
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

    if (Platform.OS === 'web') {
      window.alert('Jeni kyçur me sukses!');
    } else {
      Alert.alert('Sukses', 'Jeni kyçur me sukses!');
    }
    console.log(`email : ${trimmedEmail}`);
    console.log(`password : ${trimmedPassword}`);
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