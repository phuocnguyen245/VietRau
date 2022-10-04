/*eslint-disable */
import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Filter, SearchIcon, ShoppingCart} from '../../../public/images/svgIcons';

interface Props {
  type: string;
}
const HeaderSearch = ({type}: Props) => {
  const [search, setSearch] = useState('');
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 40,
          backgroundColor: '#fff',
          flexDirection: 'row',
          width: '90%',
          marginRight: 12,
          borderRadius: 8,
        }}>
        <View
          style={{
            justifyContent: 'center',
            marginLeft: 12,
          }}>
          <SearchIcon width={20} height={20} />
        </View>
        <View style={{flex: 1}}>
          <TextInput style={styles.input} placeholder="Tìm kiếm sản phẩm" value={search} onChangeText={setSearch} />
        </View>
      </View>
      <View style={{width: 20}}>
        {type === 'cart' ? (
          <TouchableOpacity>
            <ShoppingCart width={20} height={20} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Filter width={20} height={20} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default HeaderSearch;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
  },
  containerNavigation: {
    marginTop: 0,
    marginBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    paddingLeft: 12,
    paddingRight: 12,
    fontWeight: '400',
  },
});
