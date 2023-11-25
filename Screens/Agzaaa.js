import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions,
    Pressable,
    Image,
    FlatList
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors, Images } from '../Constants/Colors/Themes';
const { width, height } = Dimensions.get('screen');


const Agzaa = [
    {
        id: 1,
        Guza: 'الجزء الاول',
        Ahzab: {
            Name_One: 'الفاتحه',
            Name_Tow: 'البقرة',
        },
        HizbNum: {
            First_Hizb: 1,
            secnd_Hizb: 2,
        },
    },
    {
        id: 2,
        Guza: 'الجزء الثانى',
        Ahzab: {
            Name_One: 'البقرة',
            Name_Tow: 'البقرة',
        },
        HizbNum: {
            First_Hizb: 3,
            secnd_Hizb: 4,
        },
    },
    {
        id: 3,
        Guza: 'الجزءالثالث',
        Ahzab: {
            Name_One: 'البقرة',
            Name_Tow: 'آل عمران',
        },
        HizbNum: {
            First_Hizb: 5,
            secnd_Hizb: 6,
        },
    },
    {
        id: 4,
        Guza: 'الجزء الرابع',
        Ahzab: {
            Name_One: 'آل عمران',
            Name_Tow: 'آل عمران',
        },
        HizbNum: {
            First_Hizb: 7,
            secnd_Hizb: 8,
        },
    },
    {
        id: 5,
        Guza: 'الجزء الخامس',
        Ahzab: {
            Name_One: 'النساء',
            Name_Tow: 'النساء',
        },
        HizbNum: {
            First_Hizb: 9,
            secnd_Hizb: 10,
        },
    },
];

const Agzaapage = () => {
    const AgzzaListItems = ({ Items, indx }) => {
        <View
            style={[
                styles.Conttent,
                { borderBottomWidth: indx != Agzaa.length - 1 ? 0.5 : 0 },
            ]}>
            <Pressable
                onPress={() => {
                    console.log('الجزءالاول');
                }}>
                <Text
                    style={{
                        fontSize: 11,
                        fontFamily: 'NotoKufiArabic-Bold',
                        color: Colors.Black,
                        textAlign: 'center',
                        marginRight: 20,
                    }}>
                    {Items.Guza}
                </Text>
            </Pressable>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: 70,
                    width: '93%',
                    // backgroundColor: "#0ff",
                    alignSelf: 'flex-end',
                }}>
                <View style={{ width: 105, alignItems: 'center' }}>
                    <Text style={styles.HizbNsurhalft}>
                        الحزب{' '}
                        <Text style={{ color: Colors.Black }}>
                            {Items.HizbNum.secnd_Hizb}{' '}
                        </Text>
                        <Text style={{ color: Colors.Black, fontSize: 9 }}>
                            ( {Items.Ahzab.Name_Tow})
                        </Text>
                    </Text>
                </View>
                <View style={{ width: 40, alignItems: 'center' }}>
                    <Image source={Images.Hizb} style={{}} />
                </View>

                <View style={{ width: 105, alignItems: 'center' }}>
                    <Text style={styles.HizbNsurhaRight}>
                        الحزب{' '}
                        <Text style={{ color: Colors.Black }}>
                            {Items.HizbNum.First_Hizb}{' '}
                        </Text>
                        <Text style={{ color: Colors.Black, fontSize: 9 }}>
                            ({Items.Ahzab.Name_One})
                        </Text>
                    </Text>
                </View>

                <MaterialCommunityIcons
                    name="decagram-outline"
                    style={{
                        fontSize: 40,
                        color: Colors.sixth,
                        right: 10,
                    }}
                />
                <Text
                    style={{
                        fontSize: 13,
                        fontFamily: 'NotoKufiArabic-Bold',
                        color: Colors.Black,
                        top: 19,
                        left: 301,
                        position: 'absolute',
                    }}>
                    {Items.id}
                </Text>
            </View>
        </View>
    }

    return (
        <FlatList
            data={Agzaa}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
                <AgzzaListItems Items={item} indx={index} />
            )}
        />
    );
};

const styles = StyleSheet.create({
    Conttent: {
        height: height * 0.125,
        // backgroundColor: '#ff0',
        marginTop: 15,
        alignItems: 'center',
        // justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: Colors.Gray,
    },
    HizbNsurhaRight: {
        fontSize: 12,
        fontFamily: 'NotoKufiArabic-Medium',
        color: Colors.Third,
        marginRight: 5,
    },
    HizbNsurhalft: {
        fontSize: 12,
        fontFamily: 'NotoKufiArabic-Medium',
        color: Colors.Third,
    },
});

export default Agzaapage;
