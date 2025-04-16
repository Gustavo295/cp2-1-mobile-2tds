import { View } from "react-native";
import styles from "../styles";
import {LinearGradient} from "expo-linear-gradient";
import { Text } from "react-native";

import { useState } from "react";
import { TextInput } from "react-native";

export default function ScreenRecycle(){
    const [name,setName] = useState("")
    const [cep,setCep] = useState("")
    return(
        <View styles={styles.container}>
            <LinearGradient
              colors={['#f6fffa', '#b1df33']}
                style={styles.background}
            />
        <TextInput
        placeholder="Digite o seu nome completo"
        style={styles.input}
        value={name}
        onChangeText={(value)=>setName(value)}
        />
        
        <TextInput
        placeholder="Digite o seu CEP"
        style={styles.input}
        value={cep}
        onChangeText={(value)=>setCep(value)}
        keyboardType="number-pad"
        />



        <Text>{name}</Text>
        <Text>{cep}</Text>

        </View>
    )
}