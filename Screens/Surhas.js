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
const { width, height } = Dimensions.get('screen');

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors, Images } from '../Constants/Colors/Themes';
import { useNavigation } from '@react-navigation/native'


const Surahs = [
    {
        id: 1,
        Ar_Name: 'سورة الفاتحه',
        En_Name: 'Al-Faatiha',
        Ayhat: 7,
        Type: 'مكيه',
    },
    {
        id: 2,
        Ar_Name: 'سورة البقرة',
        En_Name: 'Al-Baqara',
        Ayhat: 286,
        Type: 'مدنية',
    },
    {
        id: 3,
        Ar_Name: 'سورة آل عمران',
        En_Name: 'Aal-i-Imraan',
        Ayhat: 200,
        Type: 'مدنية',
    },
    {
        id: 4,
        Ar_Name: 'سوره النساء',
        En_Name: 'An-Nisaa',
        Ayhat: 176,
        Type: 'مدنية',
    },
    {
        id: 5,
        Ar_Name: 'سوره المائده',
        En_Name: 'Al-Maaida',
        Ayhat: 120,
        Type: 'مدنيه',
    },
];



const SurhasPage = () => {
    const navigation = useNavigation();
    const SurhaListItems = ({ items, indx }) => {
        <Pressable onPress={() => {
            navigation.navigate('Ayat', {
                Surha_Name: items.Ar_Name
            })
        }} style={styles.rendering}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text
                    style={{
                        fontSize: 16.5,
                        color: Colors.sixth,
                        marginLeft: 15,
                        fontFamily: 'NotoKufiArabic-Medium',
                    }}>
                    {items.En_Name}
                </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: 15,
                    }}>
                    <Text
                        style={{
                            fontSize: 12,
                            color: Colors.Black,
                            textAlign: 'center',
                            fontFamily: 'NotoKufiArabic-Bold',
                        }}>
                        {items.Ar_Name}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignSelf: 'flex-end',
                        }}>
                        <Text
                            style={{
                                fontSize: 9,
                                fontFamily: 'NotoKufiArabic-Bold',
                                color: Colors.Dark_Gray,
                                textAlign: 'right',
                            }}>
                            {items.Type}
                        </Text>
                        <Text
                            style={{
                                fontSize: 9,
                                fontFamily: 'NotoKufiArabic-Bold',
                                color: Colors.Dark_Gray,
                                textAlign: 'right',
                            }}>
                            آياتها {items.Ayhat}{' '}
                        </Text>
                    </View>
                </View>

                <MaterialCommunityIcons
                    name="decagram-outline"
                    style={styles.SurhaNum}
                />
                <Text
                    style={{
                        fontSize: 13,
                        fontFamily: 'NotoKufiArabic-Bold',
                        color: Colors.Black,
                        right: 33,
                        top: 4,
                    }}>
                    {items.id}
                </Text>
            </View>
        </Pressable>
    }
    return (

        <FlatList
            data={Surahs}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => (
                <SurhaListItems items={item} indx={index} />
            )}
        />
    );
}

const styles = StyleSheet.create({
    rendering: {
        width: width * 0.9,
        height: 70,
        backgroundColor: Colors.babblue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 10,
    },
    SurhaNum: {
        fontSize: 37,
        color: Colors.sixth,
        marginRight: 10,
    },
});

export default SurhasPage;
