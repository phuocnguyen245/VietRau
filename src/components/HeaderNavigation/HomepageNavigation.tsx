/*eslint-disable */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  DifferentType as DifferentTypeIcon,
  Fruits as FruitsIcon,
  Spices as SpicesIcon,
  Vegetables as VegetablesIcon,
} from '../../../public/images/svgIcons';

const HomepageNavigation = ({navigation}: any) => {
  return (
    <View style={styles.containerNavigation}>
      <TouchableOpacity
        onPress={() => navigation.navigate('BottomProducts', {type: 1})}
        style={{
          backgroundColor: '#00A74C',
          justifyContent: 'center',
          alignItems: 'center',
          width: '23%',
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 8,
        }}>
        <VegetablesIcon width={30} height={30} />
        <Text style={{fontSize: 14, marginTop: 6, color: '#fff'}}>Rau ăn lá</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('BottomProducts', {type: 2})}
        style={{
          backgroundColor: '#92C856',
          justifyContent: 'center',
          alignItems: 'center',
          width: '23%',
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 8,
        }}>
        <FruitsIcon width={30} height={30} />
        <Text style={{fontSize: 14, marginTop: 6, color: '#fff'}}>Rau ăn quả</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('BottomProducts', {type: 3})}
        style={{
          backgroundColor: '#D3C327',
          justifyContent: 'center',
          alignItems: 'center',
          width: '23%',
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 8,
        }}>
        <SpicesIcon width={30} height={30} />
        <Text style={{fontSize: 14, marginTop: 6, color: '#fff'}}>Rau gia vị</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('BottomProducts', {type: 4})}
        style={{
          backgroundColor: '#989b96',
          justifyContent: 'center',
          alignItems: 'center',
          width: '23%',
          paddingTop: 10,
          paddingBottom: 10,
          borderRadius: 8,
        }}>
        <DifferentTypeIcon width={30} height={30} />
        <Text style={{fontSize: 14, marginTop: 6, color: '#fff'}}>Loại khác</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomepageNavigation;
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
