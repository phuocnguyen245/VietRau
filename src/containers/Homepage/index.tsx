import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

const Homepage = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <ProductList title="Ưu đãi hôm nay" />
      <ProductList title="Sản phẩm mới" />
      <ProductList title="Công thức món ngon" />
    </ScrollView>
  );
};

export default Homepage;
