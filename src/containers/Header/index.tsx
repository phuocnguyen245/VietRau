import React from 'react';
import {View} from 'react-native';
import Banner from '../../components/Banner';
import HomepageNavigation from '../../components/HeaderNavigation/HomepageNavigation';
import HeaderSearch from '../../components/Search';
interface Props {
  type: string;
  navigation: any;
}
const Header = ({type, navigation}: Props) => {
  return (
    <View>
      <HeaderSearch type={type} />
      <HomepageNavigation navigation={navigation} />
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
