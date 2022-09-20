import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native"
import styles from "./Styles";
import { AntDesign } from '@expo/vector-icons';
import { useFrequency } from 'react-frequency';
import { waveLength } from "../components/Wavelength";

const oscillatorValues = ["sine", "sawtooth", "square", "triangle"]

const HomeScreen = () => {
    setTimeout(() => {
        waveLength.draw(frequency);
    }, 250);

    const [frequency, setFrequency] = useState(20)
    const [oscillator, setOscillator] = useState(oscillatorValues[0])
    const [gain, setGain] = useState(100)
    const [type, setType] = useState("center");

    const { start, stop, playing } = useFrequency({
        hz: frequency,
        type,
        gain: gain / 100,
        oscillator
    });

    const handleOscillator = (e) => {
        setOscillator(e.target.value);
    };

    const handleType = (t) => {
        setType(t);
    };

    const handleFrequency = (e) => {
        setFrequency(e.target.value);
        // waveLength.draw(e.target.value);
        // waveLength.drawSineWave();
        // console.log(waveLength);
    };

    const handleGain = (e) => {
        setGain(e.target.value)
    }

    return (
        <View style={styles.component}>
            <View style={styles.freSli}>
                <View style={styles.vSetting}>
                    <Text>Frequency Wavelength Graph</Text>
                </View>
                <View style={styles.slider}>
                    <canvas id="sinewave" style={{ justifyContent: "center", height: 120, marginTop: 5 }}></canvas>
                </View>
            </View>

            <View style={styles.freSli}>
                <View style={styles.sliderHeader}>
                    <Text>Frequency</Text>
                    <Text>{frequency} Hz</Text>
                </View>
                <View style={styles.slider}>
                    <input
                        type="range"
                        onChange={handleFrequency}

                        value={frequency}
                        min="20"
                        max="600"
                    />
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginTop: 8 }}>
                        <Text style={{ marginRight: 8 }}>Enter Frequency Value: </Text>
                        <View style={styles.input}>
                            <input type="number" onChange={handleFrequency} value={frequency} max="600" min="20"/>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.freSli}>
                <View style={styles.sliderHeader}>
                    <Text>Oscillator</Text>
                    <Text>{oscillator[0].toUpperCase() + oscillator.substring(1)}</Text>
                </View>
                <View style={styles.slider}>
                    <select onChange={handleOscillator} value={oscillator}>
                        {oscillatorValues.map((type, i) => (
                            <option value={type} key={`${type}-${i}`}>
                                {type.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </View>
            </View>

            <View style={styles.freSli}>
                <View style={styles.sliderHeader}>
                    <Text>Volume</Text>
                    <Text>{gain}</Text>
                </View>
                <View style={styles.slider}>
                    <input
                        type="range"
                        onChange={handleGain}
                        value={gain}
                        min="0"
                        max="100"
                    />
                </View>
            </View>

            <View style={styles.freSli}>
                <View style={styles.vSetting}>
                    <Text>Voice Settings</Text>
                </View>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity
                        onPress={() => handleType("left")}

                    >
                        <Text style={type === "left" ? styles.selectBtn : styles.unSelectBtn}>Left</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleType("center")}

                    >
                        <Text style={type === "center" ? styles.selectBtn : styles.unSelectBtn}>Center</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleType("right")}

                    >
                        <Text style={type === "right" ? styles.selectBtn : styles.unSelectBtn}>Right</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={start}
                    style={{ alignItems: "center", backgroundColor: "white", borderWidth: 5, borderRadius: 10, borderColor: "white" }}>
                    <Text style={{ fontSize: 20 }}><AntDesign name="play" size={20} color="black" /> Play</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={stop}
                    style={{ alignItems: "center", backgroundColor: "white", borderWidth: 5, borderRadius: 10, borderColor: "white", marginLeft: 5 }}>
                    <Text style={{ fontSize: 20 }}><AntDesign name="pausecircle" size={20} color="black" /> Pause</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

