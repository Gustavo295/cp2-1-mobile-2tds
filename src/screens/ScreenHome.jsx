import { Text, TouchableOpacity, View } from "react-native"
import styles from "../styles"

export default function ScreenHome({navigation}){
    return(
        <View>
            <Text>O que deseja fazer?</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ScreenInfo")}>
                <Text>Informações sobre reciclagem</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ScreenRecycle")}>
                <Text>Pontos de reciclagem</Text>
            </TouchableOpacity>
        </View>
    )
}