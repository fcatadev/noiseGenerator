import React from "react"
import { createStackNavigator } from "@react-navigation/stack";
import homeScreen from "../screen/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, } from "react-native"

const Stack = createStackNavigator()

const MainHeaderComponent = () => {
    return (
        <SafeAreaView style={{ marginTop: 40, borderWidth: 1, borderColor: "black", backgroundColor: "#cad4e2" }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 3}}>
                <Text style={{ color: "#335793", fontSize: 18 , marginLeft: 5, fontFamily: "Arial", fontWeight: "bold" }}>Noise Generator</Text>
            </View>
        </SafeAreaView>
    )
}

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Noise Generator"
                component={homeScreen}
                options={{
                    header: () => (
                        <MainHeaderComponent />
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator