import React from 'react';
import {ScrollView, View} from 'react-native';
import ProductNavigation from '../../components/HeaderNavigation/ProductNavigation';
import ProductList from '../../components/ProductList';
import HeaderSearch from '../../components/Search';
const ProductPage = () => {
  const onChangeMenuType = (type: number) => {
    console.log(type);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HeaderSearch type="filter" />
      <ProductNavigation onChangeMenuType={onChangeMenuType} />
      <View style={{marginTop: 12}}>
        <ProductList />
      </View>
    </ScrollView>
  );
};

export default ProductPage;
