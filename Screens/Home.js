import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions,
    ImageBackground,
    ScrollView,
    SafeAreaView,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
const { width, height } = Dimensions.get('screen');
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Images } from '../Constants/Colors/Themes';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

{
    /* داتا حاليا ثابته لمواقيت الصلاه */
}
const Collection = [
    {
        id: 1,
        Title: 'القرأن الكريم',
        Img: Images.Moshaf,
        Name: 'Moshaf',
    },
    {
        id: 2,
        Title: 'الأذكار',
        Img: Images.Zeker,
        Name: 'Azkar',
    },
    {
        id: 3,
        Title: 'إتجاه القبله',
        Img: Images.Qible,
        Name: 'Qibla',
    },
    {
        id: 4,
        Title: 'مواقيت الصلاه',
        Img: Images.Paryer_Time,
        Name: 'PrayTime',
    },
    {
        id: 5,
        Title: 'السبحه',
        Img: Images.Rossary,
        Name: 'Sebha',
    },
];

const DefaultHome = () => {
    {
        /* المحتوى الخاص بمواقيت الصلاه فى صوره ماب*/
    }
    const PrayTimeContent = ({ items, indx }) => {
        const navigation = useNavigation();
        const GoToPage = () => {
            switch (items.id) {
                case 1:
                    navigation.navigate('Moshaf');
                    break;
                case 2:
                    navigation.navigate('Azkar');
                    break;
                case 3:
                    navigation.navigate('Qibla');
                    break;
                case 4:
                    navigation.navigate('PrayTime');
                    break;
                case 5:
                    navigation.navigate('Sebha');
                    break;
            }
        };
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={GoToPage}>
                <LinearGradient
                    colors={[Colors.primary, Colors.primary]}
                    style={styles.CollectionApp}>
                    <Image source={items.Img} />
                </LinearGradient>
                <Text
                    style={{
                        fontSize: 11,
                        color: Colors.Black,
                        textAlign: 'center',
                        fontFamily: 'NotoKufiArabic-Medium',
                        marginTop: 3,
                    }}>
                    {items.Title}
                </Text>
            </TouchableOpacity>
        );
    };

    {
        /* Frist Section of Body Items */
    }

    const BodyItems = () => {
        return (
            <View style={styles.BodyItems}>
                <View style={styles.HintView}>
                    <Text style={styles.Hint}>اكتشف روعه الاسلام معنا!</Text>
                </View>
                <View style={styles.HigryDate}>
                    <Text style={styles.HigryTxtDate}>السبت 4 محرم 1445</Text>
                    <Feather name="calendar" style={styles.DateIcon} />
                </View>
                <View style={styles.PrayTime}>
                    <Text style={styles.PrayTxtTime}>
                        صلاة الفجر بعد 3 ساعات و 24 دقيقه
                    </Text>
                    <Feather name="clock" style={styles.TimeIcon} />
                </View>
            </View>
        );
    };

    return (
        <View style={styles.parent}>
            {/* الهيدر بيحتوى على النوتيفكاشن والدارك مود والدروار */}
            <View style={styles.Header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="moon-outline" style={styles.StautsMode} />
                    <Ionicons name="notifications-outline" style={styles.Notification} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.TxtHeader}>مرحبا بعودتك👋</Text>
                </View>
            </View>
            <View style={styles.Body}>
                <BodyItems />
                <ImageBackground
                    source={Images.Details}
                    borderRadius={15}
                    style={styles.StopReadDetails}>
                    <Image
                        source={Images.Quran_Txt_Img}
                        style={styles.QuranTxtImg}
                        resizeMode="cover"
                    />
                    <View style={styles.DetailsTxtBtn}>
                        <View style={{ height: 80 }}>
                            <Text
                                style={{
                                    fontSize: 11,
                                    fontFamily: 'NotoKufiArabic-Bold',
                                    color: Colors.primary,
                                }}>
                                متابعه الصفحه من حيث التوقف
                            </Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    fontFamily: 'NotoKufiArabic-Medium',
                                    color: Colors.primary,
                                }}>
                                توقفت عند سورة{' '}
                                <Text style={{ color: Colors.Yellow }}>البقرة</Text>
                            </Text>
                            <Text
                                style={{
                                    fontSize: 11,
                                    fontFamily: 'NotoKufiArabic-Medium',
                                    color: Colors.primary,
                                }}>
                                صفحه <Text style={{ color: Colors.Yellow }}>34</Text>
                            </Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={{
                                width: '70%',
                                height: 45,
                                backgroundColor: Colors.primary,
                                alignSelf: 'flex-end',
                                borderRadius: 5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 5,
                            }}>
                            <Text
                                style={{ fontSize: 15, color: Colors.Black, fontWeight: 'bold' }}>
                                متابعه
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={{ height: 40, marginTop: 10 }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontFamily: 'NotoKufiArabic-Bold',
                            marginRight: 18,
                            color: Colors.secondray,
                        }}>
                        الاقسام
                    </Text>
                </View>
                <View style={styles.Collection}>
                    <FlatList
                        data={Collection}
                        horizontal
                        inverted
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => (
                            <PrayTimeContent items={item} indx={index} />
                        )}
                    />
                </View>
                <View style={styles.AyhatViewer}>
                    <View
                        style={{
                            flexDirection: 'row',
                            // backgroundColor: "#f0f",
                            height: 35,
                            justifyContent: 'space-between',
                            paddingHorizontal: 10,
                            paddingTop: 6,
                        }}>
                        <Text
                            style={{
                                fontSize: 11,
                                fontFamily: 'NotoKufiArabic-Medium',
                                color: Colors.secondray,
                            }}>
                            سورة البقرة (286)
                        </Text>
                        <Text
                            style={{
                                fontSize: 10.5,
                                fontFamily: 'NotoKufiArabic-Medium',
                                color: Colors.secondray,
                            }}>
                            آيه اليوم
                        </Text>
                    </View>
                    <View style={{ width: '96%', alignSelf: 'center', marginTop: 1 }}>
                        <Text
                            style={{
                                color: Colors.Black,
                                fontSize: 10.3,
                                textAlign: 'center',
                                fontFamily: 'NotoKufiArabic-Medium',
                            }}>
                            لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا
                            كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا
                            إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا
                            إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا
                            وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا
                            وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى
                            الْقَوْمِ الْكَافِرِينَ
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 15,
                            marginTop: 5,
                            alignItems: 'center',
                        }}>
                        <View style={styles.Share}>
                            <Feather
                                name="share-2"
                                style={{ fontSize: 15, color: Colors.secondray }}
                            />
                            <Text
                                style={{
                                    fontSize: 11,
                                    fontFamily: 'NotoKufiArabic-Medium',
                                    marginLeft: 10,
                                    color: Colors.Black,
                                }}>
                                مشاركه
                            </Text>
                        </View>
                        <View style={styles.Copy}>
                            <Feather
                                name="copy"
                                style={{ fontSize: 15, color: Colors.secondray }}
                            />
                            <Text
                                style={{
                                    fontSize: 11,
                                    fontFamily: 'NotoKufiArabic-Medium',
                                    marginLeft: 10,
                                    color: Colors.Black,
                                }}>
                                نسخ
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    Header: {
        height: height * 0.06,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        paddingHorizontal: 15,
        // backgroundColor: "#FF0",
        marginTop: 10,
    },
    StautsMode: {
        fontSize: 25,
        color: Colors.Black,
        marginLeft: 5,
    },
    Notification: {
        fontSize: 25,
        color: Colors.Black,
        marginLeft: 30,
    },
    Body: {
        width: width,
        height: height * 0.76,
        // backgroundColor: "#00f",
    },
    BodyItems: {
        width: width,
        height: height * 0.1,
        // backgroundColor: "#f0f"
    },
    HintView: {
        height: 20,
        // backgroundColor: "#ff0"
    },
    Hint: {
        fontSize: 13,
        fontWeight: 'bold',
        color: Colors.Gray,
        marginRight: 15,
    },
    HigryDate: {
        height: 20,
        // backgroundColor: "#f0f",
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 8,
    },
    DateIcon: {
        fontSize: 18,
        color: Colors.Black,
        marginRight: 15,
    },
    HigryTxtDate: {
        fontSize: 13,
        fontWeight: 'bold',
        color: Colors.Black,
        marginRight: 5,
    },
    PrayTime: {
        height: 20,
        // backgroundColor: "#0ff",
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 7,
    },
    TimeIcon: {
        fontSize: 18,
        color: Colors.Black,
        marginRight: 15,
    },
    PrayTxtTime: {
        fontSize: 13,
        fontWeight: 'bold',
        color: Colors.Black,
        marginRight: 5,
    },
    StopReadDetails: {
        width: width * 0.91,
        height: 150,
        alignSelf: 'center',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    QuranTxtImg: {
        width: 96,
        height: 150,
        marginLeft: 10,
        // backgroundColor: "#0ff"
    },
    DetailsTxtBtn: {
        width: width * 0.56,
        height: 140,
        // backgroundColor: "#f0f",
        marginRight: 20,
        marginTop: 5,
    },
    Collection: {
        width: width,
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        // backgroundColor: "#ff0"
    },
    CollectionApp: {
        width: 90,
        height: 60,
        backgroundColor: Colors.Third,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    AyhatViewer: {
        width: width * 0.91,
        // height: 200,
        backgroundColor: Colors.babblue,
        // justifyContent: "space-between",
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 3,
    },
    Zoomin: {
        fontSize: 20,
        color: Colors.Black,
        marginLeft: 10,
    },
    Zoomout: {
        fontSize: 20,
        color: Colors.Black,
        marginLeft: 10,
    },
    CopyAya: {
        fontSize: 20,
        color: Colors.Black,
    },
    Share: {
        width: '35%',
        height: 30,
        borderWidth: 1,
        borderColor: Colors.secondray,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 3.5,
        borderRadius: 10,
    },
    Copy: {
        width: '35%',
        height: 30,
        borderWidth: 1,
        borderColor: Colors.secondray,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 3.5,
        borderRadius: 10,
    },

    TxtHeader: {
        fontSize: 18,
        color: Colors.secondray,
        // marginRight: 30,
        fontFamily: 'NotoKufiArabic-Bold',
    },
});

export default DefaultHome;
