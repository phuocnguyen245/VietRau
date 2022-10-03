import React from 'react';
import {View, Image, Text} from 'react-native';
const Product = () => {
  return (
    <View
      style={{
        width: 140,
        height: 180,
        marginRight: 12,
        borderRadius: 8,
        overflow: 'hidden',
      }}>
      <View>
        <Image
          source={require('../../../public/images/VegetableImage.png')}
          style={{width: 140, height: 100}}
        />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          padding: 6,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}>
        <Text style={{fontWeight: '600', fontSize: 14}}>
          Ceylon Spinach-M..
        </Text>
        <Text style={{color: '#828282', fontSize: 12}}>1,000g</Text>
        <Text style={{fontSize: 16, color: '#F68B1F', fontWeight: '600'}}>
          32,000đ
        </Text>
      </View>
    </View>
  );
};

export default Product;
