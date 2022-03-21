# React_Native_Working_With_State
React native working with state (Functional Component) example


---
### What is State?

>There are two types of data that control a component: props and state. props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.

---
### Prerequisite

1. Download Node JS from : https://nodejs.org/
2. Install Node JS
3. Check if installed successfully using commands: \
                                                   1. node --version\
                                                   2. npm --version

---
### How To Run

1. Open Command Line
2. Move to project directory
4. Run command "npm install" to install node modules
5. Run command "npm start" to start expo cli
6. Let it get started. Then select option to run on appropriate device
7. Make sure that an emulator is running\ or else if you are using your mobile make sure that USB debugging is turned on
8. You will see the output on the targeted device


---
# Contribute 

> Give a thanks with coffee [Here](https://www.buymeacoffee.com/ayushnavadiya).\
> https://www.buymeacoffee.com/ayushnavadiya

---
## Output
![Output](https://github.com/Ayush-Navadiya/ReReact_Native_Working_With_State/blob/master/Output/output.gif)



# Getting started from scratch


---
### Prerequisite

1. Download Node JS from : https://nodejs.org/
2. Install Node JS
3. Check if installed successfully using commands: \
                                                   1. node --version\
                                                   2. npm --version

Install Expo-cli to start with react native expo app and if already installed skip this installation:

```bash
npm install --global expo-cli
```

Initialize app with the following command:

```bash
expo init your-project-name
```

Note: When You Run the 'expo init' command it will ask you to choose template go with: \
 - blank : a minimal app as clean as an empty canvas


---
## Running Program 
1. Open Command Line
2. Move to project directory
4. Run command "npm install" to install node modules
5. Run command "npm start" to expo cli
6. Let it get started then select option to run on appropriate device
7. Make sure that an emulator is running\ or else if you are using your mobile make sure that USB debugging is turned on
8. You will see the output on the targeted device
9. To see the output on screen. Change the app.js code with the code given bellow

```
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


```
