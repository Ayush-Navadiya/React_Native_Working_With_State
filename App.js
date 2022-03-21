import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [click, setClick] = useState(0);
  // you can also use = const [click, setClick] = React.useState(0);
  
  // Button press will call this function
  const btnclicked = () => {
    setClick(click + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={{color: '#fff', margin: 20}}>Button clicked {click} times!</Text>
      <Button onPress={btnclicked} title='CLICK ME' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
