import React, { useState, useEffect }  from 'react';
import { SafeAreaView, ScrollView, View, Button,
         FlatList, StyleSheet, Text, TextInput, StatusBar, AsyncStorage } from 'react-native';

const getData = async () => {
     try {
       // the '@profile_info' can be any string
       const jsonValue = await AsyncStorage.getItem('@songlist')
       let data = null
       if (jsonValue!=null) {
         data = JSON.parse(jsonValue)
         setSong(data)
         console.log('just set song name, artist and genre')
       } else {
         console.log('just read a null value from Storage')
         setTextOne({})
         settextTwo("")
         settextThree("")
       }


     } catch(e) {
       console.log("error in getData ")
       console.dir(e)
       // error reading value
     }
}
const storeData = async (song) => {
  try {
    await AsyncStorage.setSong('@storage_Key', song)
  } catch (e) {
    // saving error
  }
}


const pageTwo = (props) => {
  const [textOne,setTextOne] = useState("")
  const [textTwo,settextTwo] = useState("")
  const [textThree,settextThree] = useState("")
  const [song,setSong]= useState([])
  const renderSong = ({item}) => {
    return (
      <View style={{border: 'thin solid blue'}}>
      <Text style={styles.todoItem}>
         <Text> {item.song} </Text>
      </Text>
      </View>
    )
  }
let debug=false
const debugView =
  (<View>
    <Text style={styles.headerText}>
      DEBUGGING INFO
    </Text>
    <Text>
       song is ({textOne})
    </Text>
    <Text>
       artist is ({textTwo})
    </Text>
    <Text>
       genre is ({textThree})
    </Text>
    <Text>
       songList is {JSON.stringify(song)}
    </Text>
</View>);
  return (
    <View style={styles.container}>
    <Button title="Home"
        onPress={() => navigation.navigate('Home')}
        color= '#000'
        backgroundColor= '#d8d4e3'
        />
      <Text style={styles.textcolorHeader}> Playlist </Text>
      <View style={{flexDirection:'column'}}>
        <Text style={styles.textcolor}> song </Text>
        <TextInput
          style={{height: 40, color: '#fff'}}
          placeholder="song name"
          onChangeText={text => {
               setTextOne(text);
             }}
          defaultValue={"rename me"}
          value = {textOne}
        />
        <Text style={styles.textcolor}> artist </Text>
        <TextInput
          style={{height: 40, color: '#fff'}}
          placeholder="artist name"
          onChangeText={text => {
               settextTwo(text);
             }}
          defaultValue={"rename me"}
          value = {textTwo}
        />
        <Text style={styles.textcolor}> genre </Text>
        <TextInput
          style={{height: 40, color: '#fff'}}
          placeholder="genre"
          onChangeText={text => {
               settextThree(text);
             }}
          defaultValue={"rename me"}
          value = {textThree}
        />
        <Button
           title={"add"}
           color='#b19287'
           onPress = {() => {
              setSong(song.concat(
               {'song name':textOne, 'artist name': textTwo, 'genre': textThree}))
            storeData(song)
            setTextOne("")
            settextTwo("")
            settextThree("")
           }}
           />
        <View>
        <SafeAreaView>
        <FlatList
          data={song}
          renderItem={renderSong}
          keyExtractor={item => item.song}
          extraData={song}
        />
        </SafeAreaView>
        </View>
      </View>
      <Text style={styles.textcolor}>
         text is ({textOne}), ({textTwo}), ({textThree})
      </Text>
      <Text style={styles.textcolorInput}>
         {JSON.stringify(song)}
      </Text>
    </View>
  );
}

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
  },
  todoItem:{
    justifyContent:'center',
  },
});

export default pageTwo;
