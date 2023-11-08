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

import { Colors, Images } from '../Constants/Colors/Themes';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SplashScren from '../Screens/Splash'
import OnBoarding from '../Screens/Onboarding'
import DefaultHome from '../Screens/Home'
import SebhaScreen from '../Screens/Sebha'
import MoshafScreen from '../Screens/Moshaf'
import Azkar from '../Screens/Azkar'



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
            >
                {_renderIconImg(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    return (
        <CurvedBottomBar.Navigator
            type="DOWN"
            style={{ height: 70 }}
            shadowStyle={styles.shawdow}
            height={55}
            circleWidth={50}
            bgColor={Colors.primary}
            initialRouteName='THome'
            renderCircle={({ selectedTab, navigate }) => (
                <Animated.View style={styles.btnCircleUp}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('THome')}
                    >
                        <Image source={Images.Home_Icon} style={styles.Home_Icon} resizeMode='contain' />
                    </TouchableOpacity>
                </Animated.View>
            )}
            tabBar={renderTabBar}
            screenOptions={{
                headerShown: false,

            }}
        >
            <CurvedBottomBar.Screen
                name="THome"
                position='CIRCLE'
                component={DefaultHome}


            />
            <CurvedBottomBar.Screen
                name="Azkar"
                position="LEFT"
                component={Azkar}
            />
            <CurvedBottomBar.Screen
                name="Moshaf"
                component={MoshafScreen}
                position="RIGHT"
            />
        </CurvedBottomBar.Navigator>
    );
}


const BottomTabs = () => {
    return (
        <Tab.Navigator initialRouteName='TBHome'
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    width: width * 0.90,
                    height: 60,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,

                    elevation: 7,
                    position: 'absolute',
                    left: 19,
                    bottom: 20,
                    borderRadius: 40
                }
            }}>
            <Tab.Screen name='sebha' component={SebhaScreen} />
            <Tab.Screen name='TBHome' component={DefaultHome} />
            <Tab.Screen name='Moshaf' component={MoshafScreen} />
        </Tab.Navigator>
    )
}


const NavigaScreens = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='Splash' component={SplashScren} />
            <Stack.Screen name='Onbording' component={OnBoarding} />
            <Stack.Screen name='Home' component={CurvedBottomTabs} />
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
        width: 25,
        height: 25,
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
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Third,
        bottom: 18,
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
