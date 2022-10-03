import React from 'react';
import Product from './Product';
import {
  TouchableWithoutFeedback,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from 'react-native';
interface Props {
  title: string;
}
const ProductList = ({title}: Props) => {
  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <View style={styles.buttonWrapper}>
        <Text style={{fontWeight: '600', fontSize: 16}}>{title}</Text>
        <TouchableWithoutFeedback>
          <Text style={{fontWeight: '400', fontSize: 16, color: '#00A74C'}}>
            Xem thêm
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[...Array(5)].map((p: any, index: number) => (
            <Product key={index} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductList;
const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 12,
  },
});
