import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions
} from 'react-native';
import { Colors } from '../Constants/Colors/Themes';

const Qibla_Direct = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.txt}>Qibla_Direct</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: "center"
    },
    txt: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.Black,
        textAlign: "center"
    }
});

export default Qibla_Direct;
