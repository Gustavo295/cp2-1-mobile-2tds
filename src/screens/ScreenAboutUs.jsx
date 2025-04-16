import { View } from "react-native";
import styles from "../styles";
import {LinearGradient} from "expo-linear-gradient";

export default function ScreenAboutUs(){
return(
<View styles={styles.container}>
            <LinearGradient
                  colors={['#f6fffa', '#b1df33']}
                style={styles.background}
            />
        </View>

)
}