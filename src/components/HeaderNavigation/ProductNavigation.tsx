import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
interface Props {
  onChangeMenuType: (menuType: number) => void;
}
const ProductNavigation = ({onChangeMenuType}: Props) => {
  const [menuType, setMenuType] = useState<number>(1);

  const onPressMenu = (type: number) => {
    setMenuType(type);
    onChangeMenuType(type);
  };

  return (
    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
      <TouchableWithoutFeedback onPress={() => onPressMenu(1)}>
        <View>
          <View>
            <Text style={{fontSize: 16, fontWeight: `${menuType === 1 ? '600' : '400'}`}}>Rau ăn lá</Text>
          </View>
          <View
            style={{
              ...styles.line,
              backgroundColor: `${menuType === 1 ? '#00A74C' : 'transparent'}`,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => onPressMenu(2)}>
        <View>
          <View>
            <Text style={{fontSize: 16, fontWeight: `${menuType === 2 ? '600' : '400'}`}}>Rau ăn quả</Text>
          </View>
          <View
            style={{
              ...styles.line,
              backgroundColor: `${menuType === 2 ? '#00A74C' : 'transparent'}`,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => onPressMenu(3)}>
        <View>
          <View>
            <Text style={{fontSize: 16, fontWeight: `${menuType === 3 ? '600' : '400'}`}}>Rau gia vị</Text>
          </View>
          <View
            style={{
              ...styles.line,
              backgroundColor: `${menuType === 3 ? '#00A74C' : 'transparent'}`,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => onPressMenu(4)}>
        <View>
          <View>
            <Text style={{fontSize: 16, fontWeight: `${menuType === 4 ? '600' : '400'}`}}>Loại khác</Text>
          </View>
          <View
            style={{
              ...styles.line,
              backgroundColor: `${menuType === 4 ? '#00A74C' : 'transparent'}`,
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  line: {
    height: 2,
    marginLeft: '5%',
    marginRight: '5%',
  },
});
export default ProductNavigation;
