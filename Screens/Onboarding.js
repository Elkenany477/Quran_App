import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions,
    ImageBackground,
    FlatList,
    Image,
    Pressable,
    TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('screen')

import { useNavigation } from '@react-navigation/native'
import { Colors, Images } from '../Constants/Colors/Themes'

const Data = [
    {
        id: 1,
        Title: "شارك القراءن والدعاء",
        Description: "تنافس فى الخير تنل الثواب العظيم",
        Img: require('../Constants/img/share.png')
    },
    {
        id: 2,
        Title: "الاستماع وتلاوه القراءن",
        Description: "من قرأ حرفا من كتاب الله فله بها حسنه",
        Img: require('../Constants/img/Reading.png')
    },
    {
        id: 3,
        Title: "القبله ومواقيت الصلاه",
        Description: "اتجاه دقيق للقبله والتذكير لمواعيد الصلاه",
        Img: require('../Constants/img/Pray_Time_Dir.png')
    },
    {
        id: 4,
        Title: "موضوعات قراءنيه",
        Description: "نصوص من القراءن تخص حياتنا اليوميه",
        Img: require('../Constants/img/Topics.png')
    },
]


const Slide = ({ Items }) => {
    return (
        <View style={styles.DataContent} >
            <Image source={Items.Img}
                style={styles.SlideImg}
            />
            <Text style={styles.TitlSlide}>{Items.Title}</Text>
            <Text style={styles.DescriptSlide}>{Items.Description}</Text>
        </View>
    )
}


const OnBoarding = () => {
    const [CurrrentIndex, setCurrrentIndex] = React.useState(0);
    const ref = React.useRef();
    const navigation = useNavigation()

    {/* pagination content design */ }
    const Pagination = () => {
        return (
            Data.map((items, index) => {
                return (
                    <View key={index}
                        style={[styles.paginate, {
                            backgroundColor: (CurrrentIndex == index) ?
                                (Colors.Third) : (Colors.primary)
                        }]}>
                    </View>
                )

            })
        )
    }

    {/* Content of Move Button */ }
    const MoveBtn = () => {
        return (CurrrentIndex == 0) ? (
            <TouchableOpacity onPress={GoNextBtn}
                activeOpacity={.9} style={styles.NextBtn}>
                <Text style={styles.NextTxt}>التالى</Text>
            </TouchableOpacity>
        ) : (
            (CurrrentIndex == (Data.length - 1)) ? (
                <Pressable onPress={GoHome} activeOpacity={.9}
                    style={styles.StartBtn}>
                    <Text style={styles.StartTxt}>إبدأ الان</Text>
                </Pressable>
            ) : (
                <View style={styles.SecondNextBtn}>
                    <Pressable onPress={GoBackBtn}
                        style={styles.previosBtn}>
                        <Text style={styles.previosTxt}>السابق</Text>
                    </Pressable>
                    <Pressable onPress={GoNextBtn}
                        style={styles.NextBtn}>
                        <Text style={styles.NextTxt}>التالى</Text>
                    </Pressable>
                </View>
            )
        )
    }

    {/* Next Btn Action Function */ }

    const GoNextBtn = () => {
        const NextCurrentIndex = (CurrrentIndex + 1);
        if (CurrrentIndex != Data.length) {
            const offset = NextCurrentIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrrentIndex(NextCurrentIndex)
        }
    }

    {/* Back Btn Action Function */ }

    const GoBackBtn = () => {
        const BackIndex = CurrrentIndex - 1;
        if (CurrrentIndex != Data.length) {
            const offset = BackIndex * width;
            ref.current.scrollToOffset({ offset });
            setCurrrentIndex(BackIndex);
        }
    }

    {/* Skip Btn Function Content */ }

    const OnSkip = () => {
        const lastIndex = (Data.length - 1)
        if (CurrrentIndex != Data.length) {
            const offset = lastIndex * width
            ref.current.scrollToOffset({ offset });
            setCurrrentIndex(lastIndex);
        }
    }

    {/* Go To Home Page */ }

    const GoHome = () => {
        navigation.navigate("Home")
    }

    {/* Update Current index */ }
    const UpdateCurrentIndex = (e) => {
        const ContentOffsetX = e.nativeEvent.contentOffset.x;
        console.log(ContentOffsetX);
        const CurrentIndex = Math.round(ContentOffsetX / width)
        console.log(CurrentIndex);
        setCurrrentIndex(CurrentIndex);
    }
    return (
        <View style={styles.parent}>
            <StatusBar backgroundColor={Colors.primary} barStyle={'dark-content'} />
            <Pressable onPress={OnSkip} style={styles.Header}>
                <Text style={styles.skip}>تخطى</Text>
            </Pressable>
            <View style={styles.Display}>
                <FlatList
                    data={Data}
                    ref={ref}
                    renderItem={({ item, index }) => <Slide Items={item} indx={index} />}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    scrollEventThrottle={16}
                    onMomentumScrollEnd={UpdateCurrentIndex}

                />
            </View>
            <View style={styles.PaginationViewer}>
                <Pagination />
            </View>
            <View style={styles.Moves_Btns}>
                <MoveBtn />
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
        flex: 0.06,
        top: 10,
        bottom: 10,
        justifyContent: "center",
    },
    skip: {
        fontSize: 15,
        textAlign: "right",
        marginRight: 20,
        color: Colors.Black,
        fontWeight: "bold"
    },
    Display: {
        flex: 0.55,
        top: 15,
        // backgroundColor: "#f0f",
        bottom: 30
    },
    PaginationViewer: {
        flex: 0.06,
        // backgroundColor: "#f00",
        top: 35,
        bottom: 30,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

    },
    paginate: {
        width: 12,
        height: 12,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: Colors.Third,
        marginLeft: 10
    },
    Moves_Btns: {
        flex: 0.1,
        // backgroundColor: "#0f0",
        top: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    NextBtn: {
        width: "40%",
        height: 50,
        borderRadius: 20,
        backgroundColor: Colors.Third,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    previosTxt: {
        fontSize: 16,
        fontWeight: "200",
        color: Colors.Black
    },
    NextTxt: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.primary
    },
    previosBtn: {
        width: "40%",
        height: 50,
        borderRadius: 20,
        backgroundColor: Colors.Fourth,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15
    },
    StartBtn: {
        width: "60%",
        height: 50,
        borderRadius: 20,
        backgroundColor: Colors.Third,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    StartTxt: {
        fontSize: 16,
        fontWeight: "bold",
        color: Colors.primary
    },
    SecondNextBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    DataContent: {
        justifyContent: "center",
        alignItems: "center",
    },
    SlideImg: {
        width: width,
        height: height * 0.5,
        resizeMode: 'contain',
    },
    TitlSlide: {
        fontSize: 22,
        fontWeight: "bold",
        color: Colors.secondray,
        textAlign: "center",
        top: -25
    },
    DescriptSlide: {
        fontSize: 14,
        fontWeight: "bold",
        color: Colors.Gray,
        textAlign: "center",
        top: -20
    },




});

export default OnBoarding;
