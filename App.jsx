import { View, Text, Image, ImageBackground, Button, Modal, StatusBar, ActivityIndicator, Alert } from "react-native";
import { useState } from "react";
const logo = require('./assets/icon.png')

export default function App() {

  const [isModalVisible, SetisModalVisible] = useState(false)

  return (
    <View style = {{ flex : 1, backgroundColor : "plum", padding : 60}}>
      <StatusBar />
      <ActivityIndicator color="black" size="large" animating = {true} />
      {/* <Text>Hello World
        <Text style = {{ color : "red"}}> !</Text>
      </Text> */}
      {/* <Image source={logo} style = {{width : 200, height : 200}}></Image> */}
      {/* <ImageBackground source={{uri : "https://picsum.photos/id/237/200/200"}} style = {{ flex : 1}}></ImageBackground> */}
    
      <Button title="Click" onPress={() => SetisModalVisible(true)} color="midnightblue" />
        <Modal visible = {isModalVisible}
        onRequestClose={() => SetisModalVisible(false)}
        animationType="fade"
      >
          <View style = {{ flex : 1, backgroundColor : "lightblue", padding : 60}}>
            {/* <Button title="Close" onPress={() => Alert.alert("Press back button")} /> */}
            <Button title="Close" onPress={() => Alert.alert("Confirm !","ksdjlkj", [
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
        </Modal>
    </View> 
  )
}