import { Text, View,StyleSheet  } from "react-native"

const Box = ({ children, style}) => {
    return (
        <View style = {[styles.Box, style]}>
            <Text style = {styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Box : {
        borderColor : "#fff",
        padding : 20,
        margin : 10,
    },
    text : {
        fontSize : 24,
        fontWeight : "bold",
        textAlign : "center",
        color : "#fff",
    }
})

export default Box