/*eslint-disable */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import Banner from '../Banner';
import HeaderNavigation from './HeaderNavigation';

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
      <HeaderNavigation />
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Banner />
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
  },
  containerNavigation: {
    marginTop: 0,
    marginBottom: 15,
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
