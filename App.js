import * as React from 'react';
import {Button, Text, StyleSheet, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SamProfile from './components/SamProfile';
import pageONE from './components/pageone';
import pageTwo from './components/pagetwoasync';
import Goals from './components/Goals';

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
            options={{ title: 'Listify'}}/>
        <Stack.Screen name="SamProfile" component={SamProfile}
            options={{title: 'Profile'}}/>
        <Stack.Screen name="Goals" component={Goals}
            options={{title: 'Goals'}}/>
        <Stack.Screen name="pageTwo" component={pageTwo}
            options={{title: 'async'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style= {{ width: 200, height: 200, marginBottom: 20}}
        source=  {require('./assets/listifylogo.png')}
        alt = "listify"
      />
      <Button
        title="Profile"
        onPress={() =>
          navigation.navigate('SamProfile')
        }
        color= '#000'
        backgroundColor= '#d8d4e3'
      />
      <Button
        title="Async"
        onPress={() =>
          navigation.navigate('pageTwo')
        }
        color= '#000'
        backgroundColor= '#d8d4e3'
      />
      <Button
        title="Goals"
        onPress={() =>
          navigation.navigate('Goals')
        }
        color= '#000'
        backgroundColor= '#d8d4e3'
      />
    </View>
  );
};

export default MyStack;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#013220',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
