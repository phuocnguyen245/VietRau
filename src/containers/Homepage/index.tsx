import React from 'react';
import {ScrollView} from 'react-native';
import ProductList from '../../components/ProductList/ScrollList';
import Header from '../Header';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Homepage = () => {
  const HomeStack = createNativeStackNavigator();
  const Home = ({navigation}: any) => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header type={'cart'} navigation={navigation} />
        <ProductList title="Ưu đãi hôm nay" />
        <ProductList title="Sản phẩm mới" />
        <ProductList title="Công thức món ngon" />
      </ScrollView>
    );
  };
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{headerShown: false}} />
    </HomeStack.Navigator>
  );
};

export default Homepage;
