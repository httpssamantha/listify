import React, { useState }  from 'react';
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar } from 'react-native';
const pageONE = (props) => {
  const [text,setText] = useState("")
  const [textTwo,settextTwo] = useState("")
  const [songName,setsongName]= useState([])
  const [artistName,setArtistName]= useState([])
  const renderItem = ({item}) => {
    return (
      <View style={{border:'thin solid #bcb5cf'}}>
         <Text> {item.songName} {item.artistName} </Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textcolorHeader}> Playlist </Text>
      <View style={{flexDirection:'column'}}>
        <Text style={styles.textcolor}> song </Text>
        <TextInput
          style={{height: 40, color: '#fff'}}
          placeholder="song name"
          onChangeText={text => {
               setText(text);
             }}
          defaultValue={"rename me"}
          value = {text}
        />
        <Button
           title={"add"}
           color='#b19287'
           onPress = {() => {
             setsongName(songName.concat(
               {'song name':text}))
           }}
           />
        <Text style={styles.textcolor}> artist </Text>
        <TextInput
          style={{height: 40, color: '#fff'}}
          placeholder="artist name"
          onChangeText={textTwo => {
               settextTwo(textTwo);
             }}
          defaultValue={"rename me"}
          value = {textTwo}
        />
        <Button
           title={"add"}
           color='#b19287'
           onPress = {() => {
             setArtistName(artistName.concat(
               {'artist name': textTwo}))
           }}
           />
      </View>
      <Text style={styles.textcolor}>
         text is ({text}), ({textTwo})
      </Text>
      <Text style={styles.textcolorInput}>
         song is {JSON.stringify(songName)}
      </Text>
      <Text style={styles.textcolorInput}>
      artist is {JSON.stringify(artistName)}
      </Text>
    </View>
  );
}

export default pageONE;
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#013220',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput:{
    margin:20,
    fontSize:20
  },
  header: {
    fontSize:40,
    color:'blue'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textcolor:{
    color: '#e9cccb',
  },
  textcolorInput:{
    color: '#fff',
  },
  textcolorHeader:{
    textDecorationLine: 'underline',
    color: '#fff',
    fontSize: 20,
  }
});
