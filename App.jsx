import { View, Text, Image, ImageBackground, Button, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet } from "react-native";
import { useState } from "react";
// import Greet from "./component/Greet";
import Box from "./component/Box";
const logo = require('./assets/icon.png')

export default function App() {

  const [isModalVisible, SetisModalVisible] = useState(false)

  return (
    // <View style = {{ flex : 1, backgroundColor : "plum", padding : 60}}>
    <View style = {styles.container}>

      <Box style={[{ backgroundColor: "black" }, { borderWidth: 2, borderColor: "black" }]}>Box 1</Box>
      <Box style={[{ backgroundColor : "blue"}, { borderWidth : 2, borderColor : "darkblue"}]}>Box 2</Box>
      <Box style={[{ backgroundColor : "green"}, { borderWidth : 2, borderColor : "darkgreen"}]}>Box 3</Box>
      <Box style={{ backgroundColor : "purple"}}>Box 4</Box>
      <Box style={{ backgroundColor : "orange"}}>Box 5</Box>
      <Box style={{ backgroundColor : "violet"}}>Box 6</Box>

      {/* <StatusBar translucent = {true} /> */}
      <Box />
      {/* <ActivityIndicator color="black" size="large" animating = {true} /> */}
      {/* <Text>Hello World
        <Text style = {{ color : "red"}}> !</Text>
      </Text> */}
      {/* <Image source={logo} style = {{width : 200, height : 200}}></Image> */}
      {/* <ImageBackground source={{uri : "https://picsum.photos/id/237/200/200"}} style = {{ flex : 1}}></ImageBackground> */}
    
      {/* <Button title="Click" onPress={() => SetisModalVisible(true)} color="midnightblue" />
        <Box></Box>
        <Greet name = 'vasanth' />
        <Modal visible = {isModalVisible}
        onRequestClose={() => SetisModalVisible(false)}
        animationType="fade"
      >
          <View style = {{ flex : 1, backgroundColor : "lightblue", padding : 60}}> */}
            {/* <Button title="Close" onPress={() => Alert.alert("Press back button")} /> */}
            {/* <Button title="Close" onPress={() => Alert.alert("Confirm !","ksdjlkj", [
              {
                text : "Cancel",
                style : "cancel"
              },
              {
                text : "ok",
                onPress: () => SetisModalVisible(false),
              }
            ])}/>
          </View>
          <View style = {styles.container}>
            <View style = {[styles.box, styles.lightBlueBg]}></View>
            <View style = {[styles.box, styles.lightGreenBg]}></View> */}
          {/* </View> */}
        {/* // </Modal> */}
    </View> 
  )
}


const styles = StyleSheet.create({

  container : {
    marginTop : 64,
  }

  // container : {
  //   flex : 1,
  //   backgroundColor : "pink",
  //   padding : 50,
  // },
  // box : {
  //   width : 100,
  //   height : 100,
  //   padding : 10,
  //   margin : 10,
  //   borderRadius : 50,
  //   borderWidth : 0.5,
  // },
  // lightBlueBg : {
  //   backgroundColor : "lightblue",
  //   borderColor : "midnightblue",
  // },
  // lightGreenBg : {
  //   backgroundColor : "lightgreen",
  //   borderColor : 'green'
  // },
})
