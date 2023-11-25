import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  FlatList,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';

const { width, height } = Dimensions.get('screen');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import Agzaapage from '../Screens/Agzaaa';
import SurhasPage from '../Screens/Surhas';

import { Colors, Images } from '../Constants/Colors/Themes';

const Categories = [
  {
    id: 1,
    txtName: 'السور',
    catName: 'Surha',
    activeCategor: true,
  },
  {
    id: 2,
    txtName: 'الأجزاء',
    catName: 'Ahzab',
    activeCategor: false,
  },
];

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

const MoshafScreen = () => {
  const [searchText, setSearchText] = React.useState('');
  const [active, setActive] = React.useState(0);
  const navigation = useNavigation();

  const SurhasListItems = ({ items, indx }) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('Ayat', {
            Data: items,
          });
        }}
        style={styles.rendering}>
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
    );
  };

  const AgzaaasListItems = ({ Items, indx }) => {
    return (
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
    );
  };
  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="moon-outline" style={styles.StautsMode} />
          <Ionicons name="notifications-outline" style={styles.Notification} />
        </View>
        <Text style={styles.TitlHeadr}>القرأن الكريم</Text>
        <Feather name="arrow-right" style={styles.Back} />
      </View>
      <View style={styles.SearchContainer}>
        <Feather name="search" style={styles.SearchIcon} />
        <TextInput
          value={searchText}
          onChangeText={value => setSearchText(value)}
          placeholder="ادخل إسم السورة أو الايه ..الخ"
          placeholderTextColor={Colors.Gray}
          style={styles.SearchBar}
        />
      </View>
      <View style={styles.ButtonTobTabs}>
        {Categories.map((item, index) => {
          return (
            <Pressable
              onPress={() => {
                setActive(item.id - 1);
              }}
              key={item.id}
              style={[
                styles.hizbBtn,
                active == item.id - 1
                  ? {
                    backgroundColor: Colors.Third,
                    borderWidth: 0,
                    borderColor: Colors.primary,
                  }
                  : {
                    backgroundColor: Colors.primary,
                    borderWidth: 2,
                    borderColor: Colors.Gray,
                  },
              ]}>
              <Text
                style={
                  active == item.id - 1
                    ? {
                      fontSize: 15,
                      color: Colors.primary,
                      fontFamily: 'NotoKufiArabic-Medium',
                      // fontWeight: '600',
                      textAlign: 'center',
                    }
                    : {
                      fontSize: 15,
                      color: Colors.Gray,
                      fontFamily: 'NotoKufiArabic-Medium',
                      // fontWeight: '600',
                      textAlign: 'center',
                    }
                }>
                {item.txtName}
              </Text>
            </Pressable>
          );
        }).reverse()}
      </View>
      <View style={styles.RenderSuhars}>
        {active == 0 ? (
          <FlatList
            data={Surahs}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => (
              <SurhasListItems items={item} indx={index} />
            )}
          />
        ) : (
          <FlatList
            data={Agzaa}
            keyExtractor={item => item.id}
            renderItem={({ item, index }) => (
              <AgzaaasListItems Items={item} indx={index} />
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  Header: {
    height: height * 0.06,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  TitlHeadr: {
    fontSize: 15,
    fontFamily: 'NotoKufiArabic-Bold',
    color: Colors.Black,
  },
  Back: {
    fontSize: 28,
    color: Colors.Black,
  },
  SearchContainer: {
    width: width * 0.9,
    height: 45,
    backgroundColor: Colors.Gray_semiLight,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: 15,
  },
  SearchIcon: {
    fontSize: 21,
    color: Colors.secondray,
    marginLeft: 15,
  },
  SearchBar: {
    width: '87%',
    height: 45,
    paddingRight: 15,
    fontSize: 12,
    color: Colors.Black,
    textAlign: 'right',
    fontFamily: 'NotoKufiArabic-Medium',
    alignItems: 'center',
  },
  ButtonTobTabs: {
    width: width * 0.95,
    height: height * 0.09,
    // backgroundColor: Colors.Yellow,
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  SurahBtn: {
    width: '45%',
    height: 48,
    // backgroundColor: Colors.Third,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hizbBtn: {
    width: '45%',
    height: 48,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.Gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RenderSuhars: {
    height: height * 0.56,
    // backgroundColor: Colors.Yellow,
    marginTop: 10,
  },
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

export default MoshafScreen;

{
  /*
        <Pressable style={[styles.hizbBtn,
                        {
                            backgroundColor: (active == "Ahzab") ? (Background) : (setActive(Colors.primary)),
                            
                        }
                        ]}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: Colors.Gray,
                                    fontFamily: 'NotoKufiArabic-Medium',
                                    // fontWeight: '600',
                                    textAlign: 'center',
                                }}>
                                الاجزاء
                            </Text>
                        </Pressable>
                        <Pressable style={[styles.SurahBtn,
                        {
        
                            backgroundColor: (active == "Surha") ? (Background) : (setActive(Colors.primary)),
                            borderWidth: (active == "Surha") ? (BordWidth) : (setBordWidth(2)),
                            borderColor: (active == "Surha") ? (BordColor) : (setBordColor(Colors.Gray)),
        
                        }
                        ]}>
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: Colors.primary,
                                    fontFamily: 'NotoKufiArabic-Medium',
                                    textAlign: 'center',
                                }}>
                                السور
                            </Text>
                        </Pressable>
         */
}
