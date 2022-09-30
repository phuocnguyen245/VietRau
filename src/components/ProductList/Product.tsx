import React from 'react';
import {View, Image, Text} from 'react-native';
const Product = () => {
  return (
    <View style={{width: 140, height: 200}}>
      <Image
        source={require('../../../public/images/VegetableImage.png')}
        style={{width: '100%', height: 120}}
      />
      <Text>Ceylon Spinach-M..</Text>
      <Text>1,000g</Text>
      <Text>32,000đ</Text>
    </View>
  );
};

export default Product;
