/*eslint-disable */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import {
  DifferentType as DifferentTypeIcon,
  Fruits as FruitsIcon,
  SearchIcon,
  ShoppingCart,
  Spices as SpicesIcon,
  Vegetables as VegetablesIcon,
} from '../../../public/images/svgIcons';
import DifferentType from '../../containers/Products/DifferentType';
import Fruits from '../../containers/Products/Fruits';
import Spices from '../../containers/Products/Spices';
import Vegetables from '../../containers/Products/Vegetables';
import Banner from '../Banner';
import ProductList from '../ProductList';
import Product from '../ProductList/Product';

const Tab = createBottomTabNavigator();
const Header = ({searchPhrase, setSearchPhrase}: any) => {
  const windowWidth = Dimensions?.get('window')?.width;
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            height: 40,
            backgroundColor: '#fff',
            flexDirection: 'row',
            width: '90%',
            marginRight: 12,
            borderRadius: 8,
          }}>
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 12,
            }}>
            <SearchIcon width={20} height={20} />
          </View>
          <View style={{flex: 1}}>
            <TextInput
              style={styles.input}
              placeholder="Tìm kiếm sản phẩm"
              value={searchPhrase}
              onChangeText={setSearchPhrase}
            />
          </View>
        </View>
        <View style={{width: 20}}>
          <ShoppingCart width={20} height={20} />
        </View>
      </View>
      <View style={styles.containerNavigation}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarStyle: {
                padding: 0,
                backgroundColor: '#F2F2F2',
                height: 100,
                elevation: 0,
                borderTopColor: '#F2F2F2',
              },
            }}>
            <Tab.Screen
              name="Vegetable"
              component={Vegetables}
              options={{
                tabBarIcon: () => (
                  <View
                    style={{
                      backgroundColor: '#00A74C',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'column',
                      width: (windowWidth / 4) * 0.85,
                      paddingTop: 10,
                      paddingBottom: 10,
                      borderRadius: 8,
                    }}>
                    <VegetablesIcon width={45} height={45} />
                    <Text style={{fontSize: 14, marginTop: 10, color: '#fff'}}>
                      Rau ăn lá
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Fruits"
              component={Fruits}
              options={{
                tabBarIcon: () => (
                  <View
                    style={{
                      backgroundColor: '#92C856',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      width: (windowWidth / 4) * 0.85,
                      paddingTop: 10,
                      paddingBottom: 10,
                      borderRadius: 8,
                    }}>
                    <FruitsIcon width={45} height={45} />
                    <Text style={{fontSize: 14, marginTop: 10, color: '#fff'}}>
                      Rau ăn quả
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Spices"
              component={Spices}
              options={{
                tabBarIcon: () => (
                  <View
                    style={{
                      backgroundColor: '#D3C327',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      width: (windowWidth / 4) * 0.85,
                      paddingTop: 10,
                      paddingBottom: 10,
                      borderRadius: 8,
                    }}>
                    <SpicesIcon width={45} height={45} />
                    <Text style={{fontSize: 14, marginTop: 10, color: '#fff'}}>
                      Rau gia vị
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="DifferentType"
              component={DifferentType}
              options={{
                tabBarIcon: () => (
                  <View
                    style={{
                      backgroundColor: '#989b96',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      width: (windowWidth / 4) * 0.85,
                      paddingTop: 10,
                      paddingBottom: 10,
                      borderRadius: 8,
                    }}>
                    <DifferentTypeIcon width={45} height={45} />
                    <Text style={{fontSize: 14, marginTop: 10, color: '#fff'}}>
                      Loại khác
                    </Text>
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
          marginLeft: 15,
          marginRight: 15,
        }}>
        {/* <Banner /> */}
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerNavigation: {
    margin: 15,
    marginTop: 0,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    paddingLeft: 12,
    paddingRight: 12,
    fontWeight: '400',
  },
});
