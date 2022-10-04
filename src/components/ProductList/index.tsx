import React from 'react';
import Product from './Product';
import {View} from 'react-native';
const ProductList = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        paddingHorizontal: 6,
      }}>
      {[...Array(5)].map((p: any, index: number) => (
        <Product key={index} type="product" isShowAddToCart={true} />
      ))}
    </View>
  );
};

export default ProductList;
