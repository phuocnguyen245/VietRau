import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
interface Props {
  menuType: number;
  navigation: any;
}
const ProductNavigation = ({navigation, menuType = 1}: Props) => {
  return (
    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('BottomProducts', {screen: 'Vegetables', params: {type: 1}})}>
        <View>
          <View>
            <Text style={{fontSize: 16, fontWeight: `${menuType === 1 ? '600' : '400'}`}}>Rau ăn lá</Text>
          </View>
          <View
            style={{
              ...styles.line,
              backgroundColor: `${menuType === 1 ? '#00A74C' : 'transparent'}`,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('BottomProducts', {screen: 'Fruits', params: {type: 2}})}>
        <View>
          <View>
            <Text style={{fontSize: 16, fontWeight: `${menuType === 2 ? '600' : '400'}`}}>Rau ăn quả</Text>
          </View>
          <View
            style={{
              ...styles.line,
              backgroundColor: `${menuType === 2 ? '#00A74C' : 'transparent'}`,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('BottomProducts', {screen: 'Spices', params: {type: 3}})}>
        <View>
          <View>
            <Text style={{fontSize: 16, fontWeight: `${menuType === 3 ? '600' : '400'}`}}>Rau gia vị</Text>
          </View>
          <View
            style={{
              ...styles.line,
              backgroundColor: `${menuType === 3 ? '#00A74C' : 'transparent'}`,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('BottomProducts', {screen: 'DifferentType', params: {type: 4}})}>
        <View>
          <View>
            <Text style={{fontSize: 16, fontWeight: `${menuType === 4 ? '600' : '400'}`}}>Loại khác</Text>
          </View>
          <View
            style={{
              ...styles.line,
              backgroundColor: `${menuType === 4 ? '#00A74C' : 'transparent'}`,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  line: {
    height: 2,
    marginLeft: '5%',
    marginRight: '5%',
  },
});
export default ProductNavigation;
