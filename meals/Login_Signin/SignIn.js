import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Platform,Text,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
   
export default function SignIn({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
      // clearAllStorage();

    console.log('Storage para cfaredolloj nderhyrje :')
    showAllStorage();

  const handleSignIn = async () => {
    const trimmedEmail = email.trim();
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (trimmedEmail === '' || !emailCheck(trimmedEmail) || trimmedPassword === '' || !passCheck(trimmedPassword) || trimmedUsername=== '' || !userNamemcheck(trimmedUsername)) {
      // Përdor alert të ndryshëm për web dhe mobile
      if (Platform.OS === 'web') {
        window.alert('Ju lutem plotësoni kredencialet e duhura');
      } else {
        Alert.alert('Gabim', 'Ju lutem plotësoni krendencialet e duhura');
      }
      return;
    } 
     try {
       // Merr array e user-ave aktual
    const usersJSON = await AsyncStorage.getItem('users');
    const users = usersJSON ? JSON.parse(usersJSON) : [];

    // Kontrollo nëse email ekziston
    const emailExists = users.some(u => u.email === trimmedEmail);
      if (emailExists) {
        // Email ekziston -> alert dhe rute te Login
        if (Platform.OS === 'web') {
          window.alert('Ky email është regjistruar tashmë! Shko te Login.');
        } else {
          Alert.alert('Info', 'Ky email është regjistruar tashmë! Shko te Login.');
        }
        console.log('Storage ne login kur useri eshte i regjistruara me pare')
        showAllStorage();
        navigation.navigate('Login');
        return;
      }

      // Shto userin e ri
    const newUser = { email: trimmedEmail, username: trimmedUsername, password: trimmedPassword };
    users.push(newUser);

    // Ruaj array-in e përditësuar në AsyncStorage
    await AsyncStorage.setItem('users', JSON.stringify(users));

      if (Platform.OS === 'web') {
        window.alert('Jeni regjistruar me sukses!');
      } else {
        Alert.alert('Sukses', 'Jeni regjistruar me sukses!');
      }
      console.log('Sotrage pas regjistrimit te nje useri te ri');
      showAllStorage();

      // Rute te Login pas regjistrimit
      navigation.navigate('Login');

    } catch (error) {
      console.log('Gabim AsyncStorage:', error);
    }
  };

      const handlePress = () => {
         navigation.navigate('Login');
        }
  return (
    <View style={styles.container}>
      <View style={styles.div}>
      <Text style={styles.header}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="User name"
        value={username}
        onChangeText={setUsername}
      />
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

      <TouchableOpacity onPress={handlePress} style={{ backgroundColor: 'white',marginTop : 20, }}>
       <Text style={{ color: 'blue',fontWeight : 'bold', cursor:'pointer', }}>Already have an account? Go to Log In</Text>
       </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  div: {
    width : 500,
    height : 500,
    borderColor : 'black',
    borderRadius: 30,
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    boxShadow: '0px 2px 6px rgba(0,0,0,0.6)',
  },
  header :{
    marginBottom : 20,
    fontWeight : 'bold',
    fontSize : 30,
  },

  input: {
    height: 50,
    width : 400,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
});
const clearAllStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage u pastrua komplet!');
    alert('Të gjitha të dhënat u fshinë');
  } catch (error) {
    console.log('Gabim gjatë fshirjes së AsyncStorage:', error);
  }
};

const userNamemcheck = (str) =>{
    return /^[a-zA-Z]\S*$/.test(str);
}
const emailCheck = (str) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}
const passCheck = (str) => {
  return /^[\w!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(str);
}

const showAllStorage = async () => {
  const usersJSON = await AsyncStorage.getItem('users');
  const users = usersJSON ? JSON.parse(usersJSON) : [];
  console.log('Të gjithë user-at:', users);
};

