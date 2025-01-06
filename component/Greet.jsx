import { View, Text, StyleSheet } from "react-native";

export default function Greet( {name} ) {
    return (
        <View>
            <Text style = { styles. paragraph }>Hello { name }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    paragraph : {
        flex : 1,
        color : "white",
        margin : 10,
    }
})