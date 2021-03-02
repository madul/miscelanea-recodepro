import * as React from 'react';

import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import Routes from './Routes';

const Stack = createStackNavigator();

function Feed() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.main_container}>
      
      <Image
        style={styles.image_cover}
        source={require('../assets/sale.png')}
      />
      <Text style={styles.title}>Bem vinda à Pitanga Cosméticos</Text>

      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Produtos"
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  main_container:{
    flex:1,
    padding: 10, 

  },
  title:{
    color: '#4F1711',
    fontSize: 20
  },
  image_cover: {
    width: '100%',
    height: 125,
  }
})