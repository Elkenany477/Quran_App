import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions,
    ImageBackground,
    ScrollView,
    SafeAreaView
} from 'react-native';
const { width, height } = Dimensions.get('screen');
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Images } from '../Constants/Colors/Themes';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { BottomTabs } from '../Navigation';

{/* داتا حاليا ثابته لمواقيت الصلاه */ }
const Collection = [
    {
        id: 1,
        pray_Tim: "٥:٣٤",
        pray_Nam: "الفجر",
        pray_Status: 'ص'
    },
    {
        id: 2,
        pray_Tim: "١٢:٤١",
        pray_Nam: "الظهر",
        pray_Status: 'م'
    },
    {
        id: 3,
        pray_Tim: "٣:٥١",
        pray_Nam: "العصر",
        pray_Status: 'م'
    },
    {
        id: 4,
        pray_Tim: "٦:١٧",
        pray_Nam: "المغرب",
        pray_Status: 'م'
    },
    {
        id: 5,
        pray_Tim: "٧.٣٥",
        pray_Nam: "العشاء",
        pray_Status: 'م'
    }
]


const DefaultHome = () => {
    {/* المحتوى الخاص بمواقيت الصلاه فى صوره ماب*/ }
    const Pray_Time_Content = () => {
        return (
            Collection.map((item, indx) => {
                return (
                    <LinearGradient key={indx} colors={[Colors.Third, Colors.secondray]} style={styles.praies_Time}>
                        <Text style={styles.Time_pary}>{item.pray_Tim}<Text style={styles.status}>{item.pray_Status}</Text></Text>
                        <Text style={styles.Pray_Name}>{item.pray_Nam}</Text>
                    </LinearGradient>
                )
            }).reverse()
        )
    }
    const Prayer_Guide = () => {
        return (
            <ImageBackground source={Images.Sunrise} resizeMode='stretch' style={styles.ImgBg} borderRadius={20}
            >
                <View style={{ alignSelf: "center", top: 40 }}>
                    <Text style={styles.Day}>الإثنين</Text>
                    <Text style={styles.time}>1:09<Text style={styles.moring}>ص</Text></Text>
                </View >
                <View style={{
                    flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 15, top: 85
                }}>

                    <View style={{ flexDirection: 'column', alignItems: "center", }}>
                        <Text style={styles.Date}>23 <Text>أكتوبر </Text>2023</Text>
                        <Text style={styles.BirtDate}>8 <Text>ربيع الثانى </Text>1445<Text>هـ</Text></Text>
                    </View>

                    <View style={{ flexDirection: 'column', alignItems: "center", bottom: 5 }}>
                        <Text style={styles.lastRed}>آخر قراءة</Text>
                        <Text style={styles.suraName}>سُورَةُ الْبَقَرَةِ</Text>
                    </View>

                </View>
            </ImageBackground>
        )
    }
    return (
        <View style={styles.parent}>
            {/* الهيدر بيحتوى على النوتيفكاشن والدارك مود والدروار */}
            <View style={styles.Header}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <Ionicons name="moon-outline" style={styles.StautsMode} />
                    <Ionicons name="notifications-outline" style={styles.Notification} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center" }}><Text style={styles.TxtHeader}>الرئيسية</Text>
                    <FontAwesome6 name="bars-staggered" style={styles.Menu} />
                </View>
            </View>
            <View style={styles.Body}>
                <ScrollView>

                </ScrollView>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    Header: {
        width: width,
        height: height * 0.06,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        alignContent: "center",
        paddingHorizontal: 15,
        backgroundColor: "#ff0"

    },
    StautsMode: {
        fontSize: 25,
        color: Colors.Black,
    },
    Notification: {
        fontSize: 25,
        color: Colors.Black,
        marginLeft: 30
    },
    Menu: {
        fontSize: 22,
        color: Colors.Black,
        transform: [
            { rotate: "180deg" }
        ]
    },
    TxtHeader: {
        fontSize: 17,
        color: Colors.secondray,
        marginRight: 30,
        fontFamily: "NotoKufiArabic-Bold"
    },
    Body: {
        width: width,
        height: height * 0.77,
        backgroundColor: "#00f"
    },
    lastReader: {
        width: "92%",
        height: 210,
        top: 10,
        alignSelf: "center",
        borderRadius: 20,
        backgroundColor: "#f0f"

    },
    ImgBg: {
        width: "100%",
        height: 210,
        opacity: 0.90,
    },
    Day: {
        fontSize: 15,
        color: Colors.primary,
        fontFamily: "NotoKufiArabic-Bold"
    },
    time: {
        fontSize: 15,
        color: Colors.primary,
        fontFamily: "NotoKufiArabic-Bold",
        top: -7
    },
    moring: {
        fontSize: 13,
        fontFamily: "NotoKufiArabic-Light"
    },
    Date: {
        fontSize: 10,
        color: Colors.primary,
        fontFamily: "NotoKufiArabic-Bold",
        top: 2
    },
    BirtDate: {
        fontSize: 10,
        color: Colors.primary,
        fontFamily: "NotoKufiArabic-Bold",
        top: -5
    },
    lastRed: {
        fontSize: 12,
        fontFamily: "NotoKufiArabic-Light",
        color: Colors.primary
    },
    suraName: {
        fontSize: 13,
        fontFamily: "NotoKufiArabic-Bold",
        color: Colors.primary
    },
    PrayViewer: {
        width: width,
        height: 80,
        // backgroundColor: "#ff0",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        top: 30
    },
    praies_Time: {
        width: "19%",
        height: 70,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    Time_pary: {
        fontSize: 15,
        color: Colors.Black,
        fontWeight: "600",
        textAlign: "center"
    },
    status: {
        fontSize: 10,
        fontWeight: "normal"
    },
    Pray_Name: {
        fontSize: 15,
        fontWeight: '600',
        color: Colors.primary,
        textAlign: "center"
    },
    CollectionTitle: {
        width: width,
        height: 50,
        top: 25,
        justifyContent: "center",
        paddingRight: 15
    },
    Title: {
        fontSize: 16,
        fontFamily: "NotoKufiArabic-Bold",
        color: Colors.Black
    },
    Tabs: {
        width: width,
        // height: height * 0.16,
        backgroundColor: "#0ff",
        justifyContent: "center",
        alignItems: "center"
    }



});

export default DefaultHome;



//  {/* صوره لمعرفه الوقت الحالى واخر قراءه وتاريخ اليوم */}
// <View
//     style={styles.lastReader}
// >
//     <Prayer_Guide />
// </View>
// {/* مواقيت الصلاه */ }
// <View style={styles.PrayViewer}>
//     <Pray_Time_Content />
// </View>
// {/* الاقسام الموجوده داخل الابليكشن */ }
// <View style={styles.CollectionTitle}>
//     <Text style={styles.Title}>الأقسام الرئيسية</Text>
// </View>
// {/* المصحف الشريف */ }

// <View style={styles.MosahfViewer}>

// </View>
// {/* مجموعه من الاقسام مثل الذكار والادعيه ومواقيت الصلاه والقبله */ }
// <View style={styles.SecondaryColection}>

// </View>
// {/* القراءن بصوت مجموعه الشيوخ كاملا */ }
// <View style={styles.QuranMp3}>

// </View>

