import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {AddToCart} from '../../../public/images/svgIcons';
import {Dimensions} from 'react-native';
interface Props {
  type: string;
  isShowAddToCart: boolean;
}
const windowWidth = Dimensions.get('window').width;
const Product = ({type, isShowAddToCart = false}: Props) => {
  return (
    <View
      style={{
        width: type === 'homepage' ? 140 : windowWidth / 2 - 12,
        height: type === 'homepage' ? 180 : 220,
        borderRadius: 8,
        overflow: 'hidden',
        marginHorizontal: 6,
        marginVertical: 6,
      }}>
      <View>
        <Image
          source={require('../../../public/images/VegetableImage.png')}
          style={{width: '100%', height: type === 'homepage' ? 100 : 150}}
        />
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          padding: 6,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          position: 'relative',
        }}>
        <Text style={{fontWeight: '600', fontSize: 14}}>Ceylon Spinach-M..</Text>
        <Text
          style={{
            color: '#828282',
            fontSize: 12,
            paddingLeft: type === 'homepage' ? 0 : 4,
            paddingRight: type === 'homepage' ? 0 : 4,
          }}>
          1,000g
        </Text>
        <Text style={{fontSize: 16, color: '#F68B1F', fontWeight: '600'}}>32,000đ</Text>
        {isShowAddToCart && (
          <View style={{position: 'absolute', bottom: 0, right: 10}}>
            <TouchableWithoutFeedback>
              <AddToCart width={40} height={40} />
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
    </View>
  );
};

export default Product;
