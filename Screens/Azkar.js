import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions
} from 'react-native';
import { Colors } from '../Constants/Colors/Themes';

const Azkar = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.txt}>Azkar</Text>
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

export default Azkar;
