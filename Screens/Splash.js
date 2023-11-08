import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    ImageBackground,
    Image,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');


import OnBoarding from '../Screens/Onboarding'
import { Colors, Images } from '../Constants/Colors/Themes'


const SplashScren = () => {
    const [ShowsPlash, setShowsPlash] = React.useState(true)
    const HideSplash = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(setShowsPlash(false))
            }, 4000)
        })
    }
    React.useEffect(() => {
        HideSplash()
    }, [])
    return (
        ShowsPlash ? (
            <View style={styles.parent}>
                <StatusBar translucent={true} backgroundColor={"transparent"} barStyle={'dark-content'} />
                <ImageBackground source={Images.Splash_Bg} style={styles.Bg_styl}
                    resizeMode='stretch'
                >
                    <View style={styles.Body}>
                        <Image
                            source={Images.Splash_Logo}
                            style={styles.Logo}
                            resizeMode='cover'
                        />
                        <Text style={styles.LogoTxt}>Bayan</Text>
                    </View>

                    <View style={styles.spla_footer}>
                        <Text style={styles.TxtFooter}>By Abdulrahman El Sayed</Text>
                        <Text style={styles.Website}>Talenter.com</Text>
                    </View>
                </ImageBackground>
            </View>
        ) : (
            <View style={styles.parent}>
                <OnBoarding />
            </View>
        )


    )
};

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: Colors.primary
    },
    Bg_styl: {
        flex: 1,
        opacity: 0.6,
        justifyContent: 'space-between',

    },
    Logo: {
        width: width * 0.9,
        height: 150,
        alignSelf: "center",
        top: -50,

    },
    LogoTxt: {
        fontFamily: 'Pattaya-Regular',
        fontSize: 30,
        color: Colors.Third,
        top: -50,
        textAlign: "center"
    },
    Body: {
        flex: 0.6,
        justifyContent: "flex-end",
    },
    spla_footer: {
        flex: 0.1,
        alignItems: "center"
    },
    TxtFooter: {
        fontSize: 11,
        color: Colors.Black,
        fontWeight: '700',
        marginTop: 5
    },
    Website: {
        fontSize: 10.5,
        fontWeight: '600',
        color: Colors.secondray,
        marginTop: 5
    }
});
export default SplashScren;
