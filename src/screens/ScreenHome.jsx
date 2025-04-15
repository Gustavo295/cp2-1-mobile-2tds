import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import {LinearGradient} from "expo-linear-gradient";

export default function ScreenHome({navigation}){
    return(
        <View styles={styles.container}>
            <LinearGradient
                colors={['#f6fffa', '#e3ffee']}
                style={styles.background}
            />
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