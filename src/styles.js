import {StyleSheet} from "react-native"

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ("green", "white"),
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000,
    },
    textDefault: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#1c3e00",
        paddingBottom: 50
    },
    button: {
        backgroundColor: "#a8ff60",
        borderRadius: 10,
	borderColor: "#1c3e00",
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
	marginBottom: 10,
    },
    textButton: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1c3e00",
    },

})

