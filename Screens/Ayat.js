import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions,
    Image,
    ScrollView,
    ImageBackground,
    I18nManager,
    Pressable
} from 'react-native';


const { width, height } = Dimensions.get('screen');
import { Colors, Images } from '../Constants/Colors/Themes';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import SvgComponent from '../Screens/EndSymobl'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Ayhat_Surhas = ({ route }) => {
    const [Aayt, setAyat] = React.useState({});
    const navigation = useNavigation();

    const GetData = () => {
        const AllData = route.params.Data;
        setAyat(AllData);
    };

    React.useEffect(() => {
        GetData();
    }, []);

    console.log(Aayt);

    const Write_NUMBER_INSIDE_Symbole = () => {
        const Symbole = '\u06DD';
        return Symbole;
    };

    return (
        <View style={styles.Container}>
            <View style={styles.AyatHeader}>
                <Pressable onPress={() => navigation.goBack(m



                )} style={styles.GoToBack}>
                    <Ionicons name="arrow-forward-outline" style={styles.Back} />
                </Pressable>
                <View style={styles.CenterHead}>
                    <Text style={styles.TitleHeader}>{Aayt.Ar_Name}</Text>
                </View>
                <View style={styles.HeaderLeft}>

                    <MaterialCommunityIcons name="bookmark-minus-outline" style={styles.Save} />
                    <Ionicons name="moon-outline" style={styles.Mode} />
                </View>
            </View>
            <ScrollView>
                <View style={styles.surhaDetails}>
                    <Image
                        source={Images.Ayat_Bg}
                        style={{
                            width: 200,
                            height: 130,
                            alignSelf: 'flex-start'
                        }}
                    />
                    <LinearGradient
                        colors={[Colors.Third, Colors.secondray]}
                        style={styles.Details}>
                        <Text
                            style={{
                                fontSize: 14,
                                fontFamily: 'NotoKufiArabic-ExtraBold',
                                textAlign: 'center',
                                color: Colors.primary,
                            }}>
                            {Aayt.Ar_Name}
                        </Text>
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'NotoKufiArabic-ExtraBold',
                                textAlign: 'center',
                                color: Colors.primary,
                                marginTop: 5,
                            }}>
                            {Aayt.En_Name}
                        </Text>
                        <View
                            style={{
                                width: '75%',
                                borderWidth: 1,
                                borderColor: Colors.primary,
                                marginTop: 15,
                            }}></View>
                        <View
                            style={{
                                flexDirection: 'row',
                                paddingHorizontal: 10,
                                alignItems: 'center',
                                marginTop: 5,
                                alignSelf: "center",
                                // backgroundColor: "#ff0"
                            }}>
                            <Text
                                style={{
                                    fontSize: 11,
                                    color: Colors.primary,
                                    fontFamily: "NotoKufiArabic-Medium"

                                }}>
                                {Aayt.Type}
                            </Text>
                            <View
                                style={{
                                    width: 4,
                                    height: 4,
                                    borderRadius: 2,
                                    backgroundColor: Colors.Black,
                                    marginHorizontal: 5,
                                }}></View>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: Colors.primary,
                                    fontFamily: "NotoKufiArabic-Medium"
                                }}>
                                آياتها{' '}
                                <Text style={{ marginHorizontal: 5, fontSize: 11 }}>
                                    {Aayt.Ayhat}
                                    {' '}
                                </Text>
                                آيه
                            </Text>
                            <View
                                style={{
                                    width: 4,
                                    height: 4,
                                    borderRadius: 2,
                                    backgroundColor: Colors.Black,
                                    marginHorizontal: 5,
                                }}></View>

                            <Text
                                style={{
                                    fontSize: 12,
                                    color: Colors.primary,
                                    fontWeight: "600",
                                    fontFamily: "NotoKufiArabic-Medium"

                                }}>
                                الجزءالثالث
                            </Text>
                        </View>
                    </LinearGradient>
                </View>
                <View style={styles.AyatContent}>
                    <View style={styles.AyatPages}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: 15,
                                marginVertical: 10,
                                backgroundColor: Colors.primary,
                                shadowColor: Colors.Black,
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.5,
                                shadowRadius: 3.84,
                                elevation: 2,
                                borderRadius: 5


                            }}>
                            <Text
                                style={{
                                    fontSize: 10,
                                    fontFamily: "NotoKufiArabic-Bold",
                                    color: Colors.Black
                                }}>الجزءالاول</Text>
                            <Image
                                source={Images.page_Num}
                                style={styles.page_N}
                            />
                            <MaterialCommunityIcons
                                name="bookmark-plus-outline"
                                style={styles.SavePage}
                            />
                        </View>
                        <View style={styles.AyatTxt}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: "600",
                                color: Colors.Black,
                                marginHorizontal: 10,
                                marginTop: 15,
                                lineHeight: 40,
                                textAlign: 'justify'
                            }}>

                                الٓمٓ (1) ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ (2) ٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ (3) وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ وَبِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ (4) أُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ (5) إِنَّ ٱلَّذِينَ كَفَرُواْ سَوَآءٌ عَلَيۡهِمۡ ءَأَنذَرۡتَهُمۡ أَمۡ لَمۡ تُنذِرۡهُمۡ لَا يُؤۡمِنُونَ (6) خَتَمَ ٱللَّهُ عَلَىٰ قُلُوبِهِمۡ وَعَلَىٰ سَمۡعِهِمۡۖ وَعَلَىٰٓ أَبۡصَٰرِهِمۡ غِشَٰوَةٞۖ وَلَهُمۡ عَذَابٌ عَظِيمٞ (7) وَمِنَ ٱلنَّاسِ مَن يَقُولُ ءَامَنَّا بِٱللَّهِ وَبِٱلۡيَوۡمِ ٱلۡأٓخِرِ وَمَا هُم بِمُؤۡمِنِينَ (8) يُخَٰدِعُونَ ٱللَّهَ وَٱلَّذِينَ ءَامَنُواْ وَمَا يَخۡدَعُونَ إِلَّآ أَنفُسَهُمۡ وَمَا يَشۡعُرُونَ (9) فِي قُلُوبِهِم مَّرَضٞ فَزَادَهُمُ ٱللَّهُ مَرَضٗاۖ وَلَهُمۡ عَذَابٌ أَلِيمُۢ بِمَا كَانُواْ يَكۡذِبُونَ (10) وَإِذَا قِيلَ لَهُمۡ لَا تُفۡسِدُواْ فِي ٱلۡأَرۡضِ قَالُوٓاْ إِنَّمَا نَحۡنُ مُصۡلِحُونَ (11) أَلَآ إِنَّهُمۡ هُمُ ٱلۡمُفۡسِدُونَ وَلَٰكِن لَّا يَشۡعُرُونَ (12) وَإِذَا قِيلَ لَهُمۡ ءَامِنُواْ كَمَآ ءَامَنَ ٱلنَّاسُ قَالُوٓاْ أَنُؤۡمِنُ كَمَآ ءَامَنَ ٱلسُّفَهَآءُۗ أَلَآ إِنَّهُمۡ هُمُ ٱلسُّفَهَآءُ وَلَٰكِن لَّا يَعۡلَمُونَ (13) وَإِذَا لَقُواْ ٱلَّذِينَ ءَامَنُواْ قَالُوٓاْ ءَامَنَّا وَإِذَا خَلَوۡاْ إِلَىٰ شَيَٰطِينِهِمۡ قَالُوٓاْ إِنَّا مَعَكُمۡ إِنَّمَا نَحۡنُ مُسۡتَهۡزِءُونَ (14) ٱللَّهُ يَسۡتَهۡزِئُ بِهِمۡ وَيَمُدُّهُمۡ فِي طُغۡيَٰنِهِمۡ يَعۡمَهُونَ (15) أُوْلَٰٓئِكَ ٱلَّذِينَ ٱشۡتَرَوُاْ ٱلضَّلَٰلَةَ بِٱلۡهُدَىٰ فَمَا رَبِحَت تِّجَٰرَتُهُمۡ وَمَا كَانُواْ مُهۡتَدِينَ (16) مَثَلُهُمۡ كَمَثَلِ ٱلَّذِي ٱسۡتَوۡقَدَ نَارٗا فَلَمَّآ أَضَآءَتۡ مَا حَوۡلَهُۥ ذَهَبَ ٱللَّهُ بِنُورِهِمۡ وَتَرَكَهُمۡ فِي ظُلُمَٰتٖ لَّا يُبۡصِرُونَ (17) صُمُّۢ بُكۡمٌ عُمۡيٞ فَهُمۡ لَا يَرۡجِعُونَ (18) أَوۡ كَصَيِّبٖ مِّنَ ٱلسَّمَآءِ فِيهِ ظُلُمَٰتٞ وَرَعۡدٞ وَبَرۡقٞ يَجۡعَلُونَ أَصَٰبِعَهُمۡ فِيٓ ءَاذَانِهِم مِّنَ ٱلصَّوَٰعِقِ حَذَرَ ٱلۡمَوۡتِۚ وَٱللَّهُ مُحِيطُۢ بِٱلۡكَٰفِرِينَ (19) يَكَادُ ٱلۡبَرۡقُ يَخۡطَفُ أَبۡصَٰرَهُمۡۖ كُلَّمَآ أَضَآءَ لَهُم مَّشَوۡاْ فِيهِ وَإِذَآ أَظۡلَمَ عَلَيۡهِمۡ قَامُواْۚ وَلَوۡ شَآءَ ٱللَّهُ لَذَهَبَ بِسَمۡعِهِمۡ وَأَبۡصَٰرِهِمۡۚ إِنَّ ٱللَّهَ عَلَىٰ كُلِّ شَيۡءٖ قَدِيرٞ (20) يَٰٓأَيُّهَا ٱلنَّاسُ ٱعۡبُدُواْ رَبَّكُمُ ٱلَّذِي خَلَقَكُمۡ وَٱلَّذِينَ مِن قَبۡلِكُمۡ لَعَلَّكُمۡ تَتَّقُونَ (21) ٱلَّذِي جَعَلَ لَكُمُ ٱلۡأَرۡضَ فِرَٰشٗا وَٱلسَّمَآءَ بِنَآءٗ وَأَنزَلَ مِنَ ٱلسَّمَآءِ مَآءٗ فَأَخۡرَجَ بِهِۦ مِنَ ٱلثَّمَرَٰتِ رِزۡقٗا لَّكُمۡۖ فَلَا تَجۡعَلُواْ لِلَّهِ أَندَادٗا وَأَنتُمۡ تَعۡلَمُونَ (22) وَإِن كُنتُمۡ فِي رَيۡبٖ مِّمَّا نَزَّلۡنَا عَلَىٰ عَبۡدِنَا فَأۡتُواْ بِسُورَةٖ مِّن مِّثۡلِهِۦ وَٱدۡعُواْ شُهَدَآءَكُم مِّن دُونِ ٱللَّهِ إِن كُنتُمۡ صَٰدِقِينَ (23) فَإِن لَّمۡ تَفۡعَلُواْ وَلَن تَفۡعَلُواْ فَٱتَّقُواْ ٱلنَّارَ ٱلَّتِي وَقُودُهَا ٱلنَّاسُ وَٱلۡحِجَارَةُۖ أُعِدَّتۡ لِلۡكَٰفِرِينَ (24) وَبَشِّرِ ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّٰلِحَٰتِ أَنَّ لَهُمۡ جَنَّٰتٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُۖ كُلَّمَا رُزِقُواْ مِنۡهَا مِن ثَمَرَةٖ رِّزۡقٗا قَالُواْ هَٰذَا ٱلَّذِي رُزِقۡنَا مِن قَبۡلُۖ وَأُتُواْ بِهِۦ مُتَشَٰبِهٗاۖ وَلَهُمۡ فِيهَآ أَزۡوَٰجٞ مُّطَهَّرَةٞۖ وَهُمۡ فِيهَا خَٰلِدُونَ (25) ۞إِنَّ ٱللَّهَ لَا يَسۡتَحۡيِۦٓ أَن يَضۡرِبَ مَثَلٗا مَّا بَعُوضَةٗ فَمَا فَوۡقَهَاۚ فَأَمَّا ٱلَّذِينَ ءَامَنُواْ فَيَعۡلَمُونَ أَنَّهُ ٱلۡحَقُّ مِن رَّبِّهِمۡۖ وَأَمَّا ٱلَّذِينَ كَفَرُواْ فَيَقُولُونَ مَاذَآ أَرَادَ ٱللَّهُ بِهَٰذَا مَثَلٗاۘ يُضِلُّ بِهِۦ كَثِيرٗا وَيَهۡدِي بِهِۦ كَثِيرٗاۚ وَمَا يُضِلُّ بِهِۦٓ إِلَّا ٱلۡفَٰسِقِينَ (26) ٱلَّذِينَ يَنقُضُونَ عَهۡدَ ٱللَّهِ مِنۢ بَعۡدِ مِيثَٰقِهِۦ وَيَقۡطَعُونَ مَآ أَمَرَ ٱللَّهُ بِهِۦٓ أَن يُوصَلَ وَيُفۡسِدُونَ فِي ٱلۡأَرۡضِۚ أُوْلَٰٓئِكَ هُمُ ٱلۡخَٰسِرُونَ (27) كَيۡفَ تَكۡفُرُونَ بِٱللَّهِ وَكُنتُمۡ أَمۡوَٰتٗا فَأَحۡيَٰكُمۡۖ ثُمَّ يُمِيتُكُمۡ ثُمَّ يُحۡيِيكُمۡ ثُمَّ إِلَيۡهِ تُرۡجَعُونَ (28) هُوَ ٱلَّذِي خَلَقَ لَكُم مَّا فِي ٱلۡأَرۡضِ جَمِيعٗا ثُمَّ ٱسۡتَوَىٰٓ إِلَى ٱلسَّمَآءِ فَسَوَّىٰهُنَّ سَبۡعَ سَمَٰوَٰتٖۚ وَهُوَ بِكُلِّ شَيۡءٍ عَلِيمٞ (29) وَإِذۡ قَالَ رَبُّكَ لِلۡمَلَٰٓئِكَةِ إِنِّي جَاعِلٞ فِي ٱلۡأَرۡضِ خَلِيفَةٗۖ قَالُوٓاْ أَتَجۡعَلُ فِيهَا مَن يُفۡسِدُ فِيهَا وَيَسۡفِكُ ٱلدِّمَآءَ وَنَحۡنُ نُسَبِّحُ بِحَمۡدِكَ وَنُقَدِّسُ لَكَۖ قَالَ إِنِّيٓ أَعۡلَمُ مَا لَا تَعۡلَمُونَ (30) وَعَلَّمَ ءَادَمَ ٱلۡأَسۡمَآءَ كُلَّهَا ثُمَّ عَرَضَهُمۡ عَلَى ٱلۡمَلَٰٓئِكَةِ فَقَالَ أَنۢبِـُٔونِي بِأَسۡمَآءِ هَٰٓؤُلَآءِ إِن كُنتُمۡ صَٰدِقِينَ (31) قَالُواْ سُبۡحَٰنَكَ لَا عِلۡمَ لَنَآ إِلَّا مَا عَلَّمۡتَنَآۖ إِنَّكَ أَنتَ ٱلۡعَلِيمُ ٱلۡحَكِيمُ (32) قَالَ يَٰٓـَٔادَمُ أَنۢبِئۡهُم بِأَسۡمَآئِهِمۡۖ فَلَمَّآ أَنۢبَأَهُم بِأَسۡمَآئِهِمۡ قَالَ أَلَمۡ أَقُل لَّكُمۡ إِنِّيٓ أَعۡلَمُ غَيۡبَ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ وَأَعۡلَمُ مَا تُبۡدُونَ وَمَا كُنتُمۡ تَكۡتُمُونَ (33) وَإِذۡ قُلۡنَا لِلۡمَلَٰٓئِكَةِ ٱسۡجُدُواْ لِأٓدَمَ فَسَجَدُوٓاْ إِلَّآ إِبۡلِيسَ أَبَىٰ وَٱسۡتَكۡبَرَ وَكَانَ مِنَ ٱلۡكَٰفِرِينَ (34) وَقُلۡنَا يَٰٓـَٔادَمُ ٱسۡكُنۡ أَنتَ وَزَوۡجُكَ ٱلۡجَنَّةَ وَكُلَا مِنۡهَا رَغَدًا حَيۡثُ شِئۡتُمَا وَلَا تَقۡرَبَا هَٰذِهِ ٱلشَّجَرَةَ فَتَكُونَا مِنَ ٱلظَّٰلِمِينَ (35) فَأَزَلَّهُمَا ٱلشَّيۡطَٰنُ عَنۡهَا فَأَخۡرَجَهُمَا مِمَّا كَانَا فِيهِۖ وَقُلۡنَا ٱهۡبِطُواْ بَعۡضُكُمۡ لِبَعۡضٍ عَدُوّٞۖ وَلَكُمۡ فِي ٱلۡأَرۡضِ مُسۡتَقَرّٞ وَمَتَٰعٌ إِلَىٰ حِينٖ (36) فَتَلَقَّىٰٓ ءَادَمُ مِن رَّبِّهِۦ كَلِمَٰتٖ فَتَابَ عَلَيۡهِۚ إِنَّهُۥ هُوَ ٱلتَّوَّابُ ٱلرَّحِيمُ (37) قُلۡنَا ٱهۡبِطُواْ مِنۡهَا جَمِيعٗاۖ فَإِمَّا يَأۡتِيَنَّكُم مِّنِّي هُدٗى فَمَن تَبِعَ هُدَايَ فَلَا خَوۡفٌ عَلَيۡهِمۡ وَلَا هُمۡ يَحۡزَنُونَ (38) وَٱلَّذِينَ كَفَرُواْ وَكَذَّبُواْ بِـَٔايَٰتِنَآ أُوْلَٰٓئِكَ أَصۡحَٰبُ ٱلنَّارِۖ هُمۡ فِيهَا خَٰلِدُونَ (39) يَٰبَنِيٓ إِسۡرَٰٓءِيلَ ٱذۡكُرُواْ نِعۡمَتِيَ ٱلَّتِيٓ أَنۡعَمۡتُ عَلَيۡكُمۡ وَأَوۡفُواْ بِعَهۡدِيٓ أُوفِ بِعَهۡدِكُمۡ وَإِيَّٰيَ فَٱرۡهَبُونِ (40) وَءَامِنُواْ بِمَآ أَنزَلۡتُ مُصَدِّقٗا لِّمَا مَعَكُمۡ وَلَا تَكُونُوٓاْ أَوَّلَ كَافِرِۭ بِهِۦۖ وَلَا تَشۡتَرُواْ بِـَٔايَٰتِي ثَمَنٗا قَلِيلٗا وَإِيَّٰيَ فَٱتَّقُونِ (41) وَلَا تَلۡبِسُواْ ٱلۡحَقَّ بِٱلۡبَٰطِلِ وَتَكۡتُمُواْ ٱلۡحَقَّ وَأَنتُمۡ تَعۡلَمُونَ (42) وَأَقِيمُواْ ٱلصَّلَوٰةَ وَءَاتُواْ ٱلزَّكَوٰةَ وَٱرۡكَعُواْ مَعَ ٱلرَّٰكِعِينَ (43) ۞أَتَأۡمُرُونَ ٱلنَّاسَ بِٱلۡبِرِّ وَتَنسَوۡنَ أَنفُسَكُمۡ وَأَنتُمۡ تَتۡلُونَ ٱلۡكِتَٰبَۚ أَفَلَا تَعۡقِلُونَ (44) وَٱسۡتَعِينُواْ بِٱلصَّبۡرِ وَٱلصَّلَوٰةِۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلۡخَٰشِعِينَ (45) ٱلَّذِينَ يَظُنُّونَ أَنَّهُم مُّلَٰقُواْ رَبِّهِمۡ وَأَنَّهُمۡ إِلَيۡهِ رَٰجِعُونَ (46) يَٰبَنِيٓ إِسۡرَٰٓءِيلَ ٱذۡكُرُواْ نِعۡمَتِيَ ٱلَّتِيٓ أَنۡعَمۡتُ عَلَيۡكُمۡ وَأَنِّي فَضَّلۡتُكُمۡ عَلَى ٱلۡعَٰلَمِينَ (47) وَٱتَّقُواْ يَوۡمٗا لَّا تَجۡزِي نَفۡسٌ عَن نَّفۡسٖ شَيۡـٔٗا وَلَا يُقۡبَلُ مِنۡهَا شَفَٰعَةٞ وَلَا يُؤۡخَذُ مِنۡهَا عَدۡلٞ وَلَا هُمۡ يُنصَرُونَ (48) وَإِذۡ نَجَّيۡنَٰكُم مِّنۡ ءَالِ فِرۡعَوۡنَ يَسُومُونَكُمۡ سُوٓءَ ٱلۡعَذَابِ يُذَبِّحُونَ أَبۡنَآءَكُمۡ وَيَسۡتَحۡيُونَ نِسَآءَكُمۡۚ وَفِي ذَٰلِكُم بَلَآءٞ مِّن رَّبِّكُمۡ عَظِيمٞ (49) وَإِذۡ فَرَقۡنَا بِكُمُ ٱلۡبَحۡرَ فَأَنجَيۡنَٰكُمۡ وَأَغۡرَقۡنَآ ءَالَ فِرۡعَوۡنَ وَأَنتُمۡ تَنظُرُونَ (50) وَإِذۡ وَٰعَدۡنَا مُوسَىٰٓ أَرۡبَعِينَ لَيۡلَةٗ ثُمَّ ٱتَّخَذۡتُمُ ٱلۡعِجۡلَ مِنۢ بَعۡدِهِۦ وَأَنتُمۡ ظَٰلِمُونَ (51) ثُمَّ عَفَوۡنَا عَنكُم مِّنۢ بَعۡدِ ذَٰلِكَ لَعَلَّكُمۡ تَشۡكُرُونَ (52) وَإِذۡ ءَاتَيۡنَا مُوسَى ٱلۡكِتَٰبَ وَٱلۡفُرۡقَانَ لَعَلَّكُمۡ تَهۡتَدُونَ (53) وَإِذۡ قَالَ مُوسَىٰ لِقَوۡمِهِۦ يَٰقَوۡمِ إِنَّكُمۡ ظَلَمۡتُمۡ أَنفُسَكُم بِٱتِّخَاذِكُمُ ٱلۡعِجۡلَ فَتُوبُوٓاْ إِلَىٰ بَارِئِكُمۡ فَٱقۡتُلُوٓاْ أَنفُسَكُمۡ ذَٰلِكُمۡ خَيۡرٞ لَّكُمۡ عِندَ بَارِئِكُمۡ فَتَابَ عَلَيۡكُمۡۚ إِنَّهُۥ هُوَ ٱلتَّوَّابُ ٱلرَّحِيمُ (54) وَإِذۡ قُلۡتُمۡ يَٰمُوسَىٰ لَن نُّؤۡمِنَ لَكَ حَتَّىٰ نَرَى ٱللَّهَ جَهۡرَةٗ فَأَخَذَتۡكُمُ ٱلصَّٰعِقَةُ وَأَنتُمۡ تَنظُرُونَ (55) ثُمَّ بَعَثۡنَٰكُم مِّنۢ بَعۡدِ مَوۡتِكُمۡ لَعَلَّكُمۡ تَشۡكُرُونَ (56) وَظَلَّلۡنَا عَلَيۡكُمُ ٱلۡغَمَامَ وَأَنزَلۡنَا عَلَيۡكُمُ ٱلۡمَنَّ وَٱلسَّلۡوَىٰۖ كُلُواْ مِن طَيِّبَٰتِ مَا رَزَقۡنَٰكُمۡۚ وَمَا ظَلَمُونَا وَلَٰكِن كَانُوٓاْ أَنفُسَهُمۡ يَظۡلِمُونَ (57) وَإِذۡ قُلۡنَا ٱدۡخُلُواْ هَٰذِهِ ٱلۡقَرۡيَةَ فَكُلُواْ مِنۡهَا حَيۡثُ شِئۡتُمۡ رَغَدٗا وَٱدۡخُلُواْ ٱلۡبَابَ سُجَّدٗا وَقُولُواْ حِطَّةٞ نَّغۡفِرۡ لَكُمۡ خَطَٰيَٰكُمۡۚ وَسَنَزِيدُ ٱلۡمُحۡسِنِينَ (58) فَبَدَّلَ ٱلَّذِينَ ظَلَمُواْ قَوۡلًا غَيۡرَ ٱلَّذِي قِيلَ لَهُمۡ فَأَنزَلۡنَا عَلَى ٱلَّذِينَ ظَلَمُواْ رِجۡزٗا مِّنَ ٱلسَّمَآءِ بِمَا كَانُواْ يَفۡسُقُونَ (59) ۞وَإِذِ ٱسۡتَسۡقَىٰ مُوسَىٰ لِقَوۡمِهِۦ فَقُلۡنَا ٱضۡرِب بِّعَصَاكَ ٱلۡحَجَرَۖ فَٱنفَجَرَتۡ مِنۡهُ ٱثۡنَتَا عَشۡرَةَ عَيۡنٗاۖ قَدۡ عَلِمَ كُلُّ أُنَاسٖ مَّشۡرَبَهُمۡۖ كُلُواْ وَٱشۡرَبُواْ مِن رِّزۡقِ ٱللَّهِ وَلَا تَعۡثَوۡاْ فِي ٱلۡأَرۡضِ مُفۡسِدِينَ (60) وَإِذۡ قُلۡتُمۡ يَٰمُوسَىٰ لَن نَّصۡبِرَ عَلَىٰ طَعَامٖ وَٰحِدٖ فَٱدۡعُ لَنَا رَبَّكَ يُخۡرِجۡ لَنَا مِمَّا تُنۢبِتُ ٱلۡأَرۡضُ مِنۢ بَقۡلِهَا وَقِثَّآئِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَاۖ قَالَ أَتَسۡتَبۡدِلُونَ ٱلَّذِي هُوَ أَدۡنَىٰ بِٱلَّذِي هُوَ خَيۡرٌۚ ٱهۡبِطُواْ مِصۡرٗا فَإِنَّ لَكُم مَّا سَأَلۡتُمۡۗ وَضُرِبَتۡ عَلَيۡهِمُ ٱلذِّلَّةُ وَٱلۡمَسۡكَنَةُ وَبَآءُو بِغَضَبٖ مِّنَ ٱللَّهِۗ ذَٰلِكَ بِأَنَّهُمۡ كَانُواْ يَكۡفُرُونَ بِـَٔايَٰتِ ٱللَّهِ وَيَقۡتُلُونَ ٱلنَّبِيِّـۧنَ بِغَيۡرِ ٱلۡحَقِّۗ ذَٰلِكَ بِمَا عَصَواْ وَّكَانُواْ يَعۡتَدُونَ (61) إِنَّ ٱلَّذِينَ ءَامَنُواْ وَٱلَّذِينَ هَادُواْ وَٱلنَّصَٰرَىٰ وَٱلصَّٰبِـِٔينَ مَنۡ ءَامَنَ بِٱللَّهِ وَٱلۡيَوۡمِ ٱلۡأٓخِرِ وَعَمِلَ صَٰلِحٗا فَلَهُمۡ أَجۡرُهُمۡ عِندَ رَبِّهِمۡ وَلَا خَوۡفٌ عَلَيۡهِمۡ وَلَا هُمۡ يَحۡزَنُونَ (62) وَإِذۡ أَخَذۡنَا مِيثَٰقَكُمۡ وَرَفَعۡنَا فَوۡقَكُمُ ٱلطُّورَ خُذُواْ مَآ ءَاتَيۡنَٰكُم بِقُوَّةٖ وَٱذۡكُرُواْ مَا فِيهِ لَعَلَّكُمۡ تَتَّقُونَ (63) ثُمَّ تَوَلَّيۡتُم مِّنۢ بَعۡدِ ذَٰلِكَۖ فَلَوۡلَا فَضۡلُ ٱللَّهِ عَلَيۡكُمۡ وَرَحۡمَتُهُۥ لَكُنتُم مِّنَ ٱلۡخَٰسِرِينَ (64) وَلَقَدۡ عَلِمۡتُمُ ٱلَّذِينَ ٱعۡتَدَوۡاْ مِنكُمۡ فِي ٱلسَّبۡتِ فَقُلۡنَا لَهُمۡ كُونُواْ قِرَدَةً خَٰسِـِٔينَ (65) فَجَعَلۡنَٰهَا نَكَٰلٗا لِّمَا بَيۡنَ يَدَيۡهَا وَمَا خَلۡفَهَا وَمَوۡعِظَةٗ لِّلۡمُتَّقِينَ (66) وَإِذۡ قَالَ مُوسَىٰ لِقَوۡمِهِۦٓ إِنَّ ٱللَّهَ يَأۡمُرُكُمۡ أَن تَذۡبَحُواْ بَقَرَةٗۖ قَالُوٓاْ أَتَتَّخِذُنَا هُزُوٗاۖ قَالَ أَعُوذُ بِٱللَّهِ أَنۡ أَكُونَ مِنَ ٱلۡجَٰهِلِينَ (67) قَالُواْ ٱدۡعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِيَۚ قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٞ لَّا فَارِضٞ وَلَا بِكۡرٌ عَوَانُۢ بَيۡنَ ذَٰلِكَۖ فَٱفۡعَلُواْ مَا تُؤۡمَرُونَ (68) قَالُواْ ٱدۡعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا لَوۡنُهَاۚ قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٞ صَفۡرَآءُ فَاقِعٞ لَّوۡنُهَا تَسُرُّ ٱلنَّٰظِرِينَ (69) قَالُواْ ٱدۡعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِيَ إِنَّ ٱلۡبَقَرَ تَشَٰبَهَ عَلَيۡنَا وَإِنَّآ إِن شَآءَ ٱللَّهُ لَمُهۡتَدُونَ (70) قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٞ لَّا ذَلُولٞ تُثِيرُ ٱلۡأَرۡضَ وَلَا تَسۡقِي ٱلۡحَرۡثَ مُسَلَّمَةٞ لَّا شِيَةَ فِيهَاۚ قَالُواْ ٱلۡـَٰٔنَ جِئۡتَ بِٱلۡحَقِّۚ فَذَبَحُوهَا وَمَا كَادُواْ يَفۡعَلُونَ (71) وَإِذۡ قَتَلۡتُمۡ نَفۡسٗا فَٱدَّٰرَٰءۡتُمۡ فِيهَاۖ وَٱللَّهُ مُخۡرِجٞ مَّا كُنتُمۡ تَكۡتُمُونَ (72) فَقُلۡنَا ٱضۡرِبُوهُ بِبَعۡضِهَاۚ كَذَٰلِكَ يُحۡيِ ٱللَّهُ ٱلۡمَوۡتَىٰ وَيُرِيكُمۡ ءَايَٰتِهِۦ لَعَلَّكُمۡ تَعۡقِلُونَ (73) ثُمَّ قَسَتۡ قُلُوبُكُم مِّنۢ بَعۡدِ ذَٰلِكَ فَهِيَ كَٱلۡحِجَارَةِ أَوۡ أَشَدُّ قَسۡوَةٗۚ وَإِنَّ مِنَ ٱلۡحِجَارَةِ لَمَا يَتَفَجَّرُ مِنۡهُ ٱلۡأَنۡهَٰرُۚ وَإِنَّ مِنۡهَا لَمَا يَشَّقَّقُ فَيَخۡرُجُ مِنۡهُ ٱلۡمَآءُۚ وَإِنَّ مِنۡهَا لَمَا يَهۡبِطُ مِنۡ خَشۡيَةِ ٱللَّهِۗ وَمَا ٱللَّهُ بِغَٰفِلٍ عَمَّا
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    AyatHeader: {
        width: width,
        height: height * 0.07,
        backgroundColor: Colors.primary,
        shadowColor: Colors.Black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    HeaderLeft: {
        flexDirection: 'row',
    },
    Mode: {
        fontSize: 25,
        color: Colors.Black,
        marginRight: 5,
    },
    Save: {
        fontSize: 27,
        color: Colors.Black,
        marginRight: 25,
    },
    CenterHead: {
        alignItems: 'center',
    },
    TitleHeader: {
        fontSize: 14.5,
        fontFamily: 'NotoKufiArabic-Bold',
        color: Colors.secondray,
    },
    GoToBack: {
        alignItems: 'center',
    },
    Back: {
        fontSize: 25,
        color: Colors.Black,
    },
    surhaDetails: {
        width: width * 0.9,
        height: height * 0.2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginVertical: 25,
        alignSelf: 'center',
    },
    Details: {
        position: 'absolute',
        width: width * 0.9,
        height: height * 0.2,
        // justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: Colors.Third,
        opacity: 0.6,
        shadowColor: Colors.Black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
        borderRadius: 10,
        paddingVertical: 15,
    },
    AyatContent: {
        width: width,
        // backgroundColor: '#0ff',
        writingDirection: 'rtl'
    },
    AyatPages: {
        width: width,
        paddingHorizontal: 15,
        // backgroundColor: "#f00"
    },
    SavePage: {
        fontSize: 30,
        color: Colors.Third,
    },
    page_N: {
        width: 35,
        height: 35
    },
    AyatTxt: {
        flex: 1,
        // backgroundColor: "#ff0",
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
    }
});

export default Ayhat_Surhas;
