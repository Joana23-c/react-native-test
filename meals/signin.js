import React from 'react';
import { View, StyleSheet, useWindowDimensions, TextInput } from 'react-native';

export default function SignIn() {
  const { width, height } = useWindowDimensions();
  const isMobile = width < 500;

  const circleSize = isMobile ? width * 0.7 : height * 0.5;

  return (
    <View style={[styles.body, isMobile ? styles.smallScreen : styles.bigScreen]}>

    
      <View style={{ paddingHorizontal: 20, marginTop: isMobile ? 100 : 150, zIndex: 10 }}>
        <TextInput
          style={styles.input}
          placeholder="Type something..."
        />
      </View>

      <View
        style={{
          position: 'absolute',
          top: -circleSize * 0.1,
          left: isMobile ? -circleSize * 0.3 : -circleSize * 0.15,
          width: circleSize,
          height: circleSize,
          borderRadius: circleSize / 2,
          backgroundColor: 'orange',
          zIndex: 1, // poshtë TextInput
        }}
      />

      <View
        style={{
          position: 'absolute',
          top: isMobile ? 300 : 100,
          left: isMobile ? width * 0.5 : width * 0.6,
          width: circleSize,
          height: circleSize,
          borderRadius: circleSize / 2,
          backgroundColor: 'purple',
          zIndex: 1, 
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  smallScreen: {
    backgroundColor: 'white',
  },

  bigScreen: {
    backgroundColor: 'lightgray',
  },

  input: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});
