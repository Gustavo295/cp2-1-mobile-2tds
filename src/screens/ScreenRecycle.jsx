import { View } from "react-native";
import styles from "../styles";
import {LinearGradient} from "expo-linear-gradient";

export default function ScreenRecycle(){
    return(
        <View styles={styles.container}>
            <LinearGradient
                colors={['#f6fffa', '#e3ffee']}
                style={styles.background}
            />
        </View>
    )
}