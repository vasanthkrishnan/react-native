import { View, Text, Image, ImageBackground, Button } from "react-native";
const logo = require('./assets/icon.png')

export default function App() {
  return (
    <View style = {{ flex : 1, backgroundColor : "plum", padding : 60}}>
      {/* <Text>Hello World
        <Text style = {{ color : "red"}}> !</Text>
      </Text> */}
      {/* <Image source={logo} style = {{width : 200, height : 200}}></Image> */}
      {/* <ImageBackground source={{uri : "https://picsum.photos/id/237/200/200"}} style = {{ flex : 1}}></ImageBackground> */}
    
      <Button title="Click" onPress={() => console.log("Button Pressed")} color="midnightblue" />
    </View> 
  )
}