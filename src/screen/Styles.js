import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    canvasCine:{
        height: "25vh",
        width: "90vw",
        marginLeft: "5vw"
    },
    component: {
        backgroundColor: "#1CB6DA",
        flex: 1        
    },
    sliderHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 25,
        marginTop: 5,
    },
    slider: {
        marginTop: 10,
        marginHorizontal: 25,
        backgroundColor: "white",
        borderWidth: 10,
        borderColor: "white",
        borderRadius: 10,
        marginBottom: 10
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30
    },
    freSli: {
        backgroundColor: "#e96e6b",
        marginHorizontal: 15,
        borderRadius: 10,
        marginTop: 8,
        borderColor: "black",
        borderWidth: 3
    },
    buttonGroup: {
        marginTop: 10,
        marginHorizontal: 25,
        backgroundColor: "#ABD7E3",
        borderWidth: 10,
        borderColor: "#ABD7E3",
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"

    },
    unSelectBtn: {
        alignItems: "center",
        backgroundColor: "white",
        borderWidth: 5,
        borderRadius: 5,
        borderColor: "white",
        color: "black"
    },
    selectBtn: {
        alignItems: "center",
        backgroundColor: "black",
        borderWidth: 5,
        borderRadius: 5,
        borderColor: "black",
        color: "white"
    },
    input: {
        borderColor: "white",
        width: 50,
        
    },
    vSetting: {
        alignItems: "center",
        marginHorizontal: 25,
        marginTop: 5,
    }
})

export default styles