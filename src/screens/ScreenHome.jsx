import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles";
import {LinearGradient} from "expo-linear-gradient";
import {Ionicons} from "react-native-vector-icons";

export default function ScreenHome({navigation}){
    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['#f6fffa', '#e3ffee']}
                style={styles.background}
            />
                <View style={{flexDirection: "row"}}>
                    <Text style={styles.textDefault}>O que deseja fazer?</Text>
                    <Ionicons name="leaf" size={30} color="#1c3e00"/>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ScreenInfo")}>
                    <Text style={styles.textButton}>Informações sobre reciclagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ScreenRecycle")}>
                    <Text style={styles.textButton}>Pontos de reciclagem</Text>
                </TouchableOpacity>
        </View>
    )
}