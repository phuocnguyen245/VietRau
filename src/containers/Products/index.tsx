import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import ProductNavigation from '../../components/HeaderNavigation/ProductNavigation';
import ProductList from '../../components/ProductList';
import HeaderSearch from '../../components/Search';

const ProductPage = (props: any) => {
  const [menuType, setMenuType] = useState<number>(0);

  useEffect(() => {
    setMenuType(props?.route?.params?.type);
  }, [props]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HeaderSearch type="filter" />
      <ProductNavigation navigation={props.navigation} menuType={menuType} />
      <View style={{marginTop: 12, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
        <ProductList />
      </View>
    </ScrollView>
  );
};

export default ProductPage;
