import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    Dimensions,
    Alert,
    Animated,
    TouchableOpacity,
    Image
} from 'react-native';

const { width, Height } = Dimensions.get('screen')

import Feather from 'react-native-vector-icons/Feather'

import { Colors, Images } from '../Constants/Colors/Themes';
import { NavigationContainer, } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SplashScren from '../Screens/Splash'
import OnBoarding from '../Screens/Onboarding'
import DefaultHome from '../Screens/Home'
import MoreItems from '../Screens/More'
import MoshafScreen from '../Screens/Moshaf'
import Azkar from '../Screens/Azkar'
import QuranLisent from '../Screens/Lisente';
import Tasbih from '../Screens/Tasbih';
import Pray_Timig from '../Screens/Pray_Time';
import Qibla_Direct from '../Screens/Qibla_Direction'
import Ayhat_Surhas from '../Screens/Ayat'
import SurhasPage from '../Screens/Surhas';
import Agzaapage from '../Screens/Agzaaa';
import { Header } from '../Screens/Ayat';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const CurvedBottomTabs = () => {

    const _renderIconImg = (routeName, selectedTab) => {
        let Img = '';

        switch (routeName) {
            case 'Azkar':
                Img = routeName === selectedTab ? Images.Azkar_Focuse_Icon : Images.Azkar_Icon;
                break;
            case 'Moshaf':
                Img = routeName === selectedTab ? Images.Quran_Icon_Foucse : Images.Quran_Icon;
                break;
            case 'More':
                Img = routeName === selectedTab ? Images.More_Active : Images.More;
                break;
            case 'QuranLisn':
                Img = routeName === selectedTab ? Images.Lisent_Active : Images.Lisent;
                break;
        }

        return (
            <Image
                source={Img}
                style={styles.Icons_Img}
                resizeMode='contain'
            />
        );
    };
    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={styles.tabbarItem}
                activeOpacity={1}
            >
                {_renderIconImg(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    return (
        <CurvedBottomBar.Navigator
            type="DOWN"
            shadowStyle={styles.shawdow}
            height={65}
            circleWidth={50}
            bgColor={Colors.primary}
            initialRouteName='THome'
            renderCircle={({ selectedTab, navigate }) => (
                <Animated.View style={styles.btnCircleUp}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('THome')}
                        activeOpacity={1}
                    >
                        <Feather name="home" style={styles.Home_Icon} />
                    </TouchableOpacity>
                </Animated.View>
            )}
            tabBar={renderTabBar}
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,

            }}
        >
            <CurvedBottomBar.Screen
                name="THome"
                position='CIRCLE'
                component={DefaultHome}
            />
            <CurvedBottomBar.Screen
                name="Azkar"
                position="RIGHT"
                component={Azkar}
            />
            <CurvedBottomBar.Screen
                name="Moshaf"
                component={MoshafScreen}
                position="RIGHT"
            />
            <CurvedBottomBar.Screen
                name="More"
                component={MoreItems}
                options={{ ...TransitionPresets.SlideFromRightIOS }}
                position="LEFT"
            />
            <CurvedBottomBar.Screen
                name="QuranLisn"
                component={QuranLisent}
                position="LEFT"
            />
            <CurvedBottomBar.Screen
                name="Sebha"
                component={Tasbih}
            />
            <CurvedBottomBar.Screen
                name="PrayTime"
                component={Pray_Timig}
            />
            <CurvedBottomBar.Screen
                name="Qibla"
                component={Qibla_Direct}
            />

        </CurvedBottomBar.Navigator>
    );
}


const NavigaScreens = () => {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
            })}>
            <Stack.Screen
                name='Splash'
                component={SplashScren}
            />
            <Stack.Screen
                name='Onbording'
                component={OnBoarding}
            />
            <Stack.Screen
                name='Home'
                component={CurvedBottomTabs}
            />
            <Stack.Screen
                name="Moshaf"
                component={MoshafScreen}
            />

            <Stack.Screen
                name="Surha"
                component={SurhasPage}
            />
            <Stack.Screen
                name="Juz"
                component={Agzaapage}
            />
            <Stack.Screen
                name="QuranLisn"
                component={QuranLisent}
            />
            <Stack.Screen
                name="Sebha"
                component={Tasbih}
            />
            <Stack.Screen
                name="PrayTime"
                component={Pray_Timig}
            />
            <Stack.Screen
                name="Qibla"
                component={Qibla_Direct}
            />
            <Stack.Screen
                name="Ayat"
                component={Ayhat_Surhas}
            />
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({

    tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Icons_Img: {
        width: 28,
        height: 28
    },
    Home_Icon: {
        fontSize: 22,
        color: Colors.Black,
    },
    shawdow: {
        shadowColor: '#DDDDDD',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    btnCircleUp: {
        width: 48,
        height: 48,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Third,
        bottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
    },

});


export default NavigaScreens;
