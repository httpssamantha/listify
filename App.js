import * as React from 'react';
import {Button, Text, StyleSheet, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SamProfile from './components/SamProfile';
import pageONE from './components/pageone';

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
            options={{ title: 'Listify'}}/>
        <Stack.Screen name="SamProfile" component={SamProfile}
            options={{title: 'Profile'}}/>
        <Stack.Screen name="pageONE" component={pageONE}
            options={{title: 'Playlist creator'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Profile"
        onPress={() =>
          navigation.navigate('SamProfile')
        }
        color= '#000'
        backgroundColor= '#d8d4e3'
      />
      <Button
        title="Page One"
        onPress={() =>
          navigation.navigate('pageONE')
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
    flexDirection: 'row',
    backgroundColor: '#013220',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
