import {Link} from 'expo-router';
import React from 'react'
import {View, Text, } from 'react-native';

const App = ()=> {
  return(
    <View  >
    <Text>WELCOME TO MY APP</Text>
    <Link href="/profile">GO TO PROFILE</Link>
  </View>
)
}

export default App;