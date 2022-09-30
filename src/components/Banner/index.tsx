import React from 'react';
import {Image} from 'react-native';
const Banner = () => {
  return (
    <Image
      source={require('../../../public/images/Banner.png')}
      style={{width: '100%', height: 120}}
    />
  );
};

export default Banner;
