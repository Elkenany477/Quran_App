import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions,
    TextInput,
    FlatList,
    LogBox
} from 'react-native';
const { width, height } = Dimensions.get('screen')
import { Colors } from '../Constants/Colors/Themes';

LogBox.ignoreLogs(['Warning: ...']);

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import axios from 'axios';
import Response from '../Azkar_Static_Respon.json'
console.log(typeof (JSON.parse(Response[0].id)))

//Another Way to import local Json File in Js file 
const AzkrRespon = require('../data.json');






const Azkar = () => {
    const [ZekrTxtSearch, setZekrTxtSearch] = React.useState("");
    const [Data, setData] = React.useState([]);

    React.useEffect(() => {
    }, [])
    return (
        <View style={styles.Container}>
            <View style={styles.AzkrHeader}>
                <Ionicons name="arrow-forward-outline" style={styles.GoBack} />
                <Text style={styles.Title}>الأذكار</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="notifications-outline" style={styles.Notification} />
                    <Ionicons name="moon-outline" style={styles.StautsMode} />
                </View>
            </View>
            <View style={styles.SearchContainer}>
                <TextInput
                    value={ZekrTxtSearch}
                    onChangeText={value => setZekrTxtSearch(value)}
                    placeholder="إبحث باسم الذكر"
                    placeholderTextColor={Colors.Gray}
                    style={styles.SearchBar}
                />
                <Feather name="search" style={styles.SearchIcon} />
            </View>
            <View style={styles.Displayed}>
                {Data.map((item) => {
                    return (
                        <Text style={{ fontSize: 20, color: "#000" }}>{item.id}</Text>
                    )
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    AzkrHeader: {
        width: width,
        height: height * 0.06,
        // backgroundColor: "#ff0",
        paddingHorizontal: 15,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    GoBack: {
        fontSize: 25,
        // marginLeft: 15,
        color: Colors.Black
    },
    StautsMode: {
        fontSize: 25,
        color: Colors.Black,
        marginRight: 5,
    },
    Notification: {
        fontSize: 25,
        color: Colors.Black,
        marginRight: 30,
    },
    Title: {
        fontSize: 14,
        fontFamily: "NotoKufiArabic-Bold",
        color: Colors.Third
    },
    SearchContainer: {
        width: width * 0.9,
        height: 45,
        backgroundColor: Colors.Gray_semiLight,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 6,
        marginVertical: 15,
    },
    SearchIcon: {
        fontSize: 21,
        color: Colors.secondray,
        marginLeft: 10,
    },
    SearchBar: {
        width: '87%',
        height: 45,
        marginLeft: 5,
        fontSize: 11.5,
        color: Colors.Black,
        textAlign: 'right',
        fontFamily: 'NotoKufiArabic-Medium',
        alignItems: 'center',
    },
    Displayed: {
        width: width,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginVertical: 10,
        backgroundColor: "#0ff"
    }
});

export default Azkar;
