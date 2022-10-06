/*eslint-disable */
import React from 'react';
import {Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ArrowRight, ArrowRightActive, DeliverySuccess} from '../../../public/images/svgIcons';
const ImagePicker = require('react-native-image-picker');

const windowWidth = Dimensions.get('window').width;

const Account = ({navigation}: any) => {
  const changePhoto = () => {
    const options: any = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
    };
    ImagePicker.launchImageLibrary(options, ({assets}: any) => {
      console.log(assets);
    });
  };
  return (
    <View>
      <View style={{width: windowWidth, height: 120}}>
        <ImageBackground
          source={require('../../../public/images/UserHeaderBackground.png')}
          style={{width: windowWidth, height: 120}}>
          <View
            style={{
              width: windowWidth,
              height: '100%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginLeft: 16,
            }}>
            <View style={{marginRight: 16, width: '10%'}}>
              <TouchableOpacity onPress={changePhoto}>
                <Image source={require('../../../public/images/UserImage.png')} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: windowWidth * 0.9 - 50}}>
              <View>
                <Text style={{color: '#FEFFFE', fontWeight: '600', fontSize: 18}}>Nguyễn Văn Lộc</Text>
                <Text style={{color: '#FEFFFE', fontSize: 14}}>Mã KH: 15263933</Text>
              </View>
              <View>
                <ArrowRight width={24} height={24} />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{marginTop: 8, marginBottom: 8}}>
        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => navigation.navigate('BottomAccount', {screen: 'EditProfile', isShow: false})}>
          <View style={styles.wrapper}>
            <View style={styles.icon}>
              <DeliverySuccess width={16} height={16} />
            </View>
            <View style={{...styles.textWrapper, ...styles.borderText}}>
              <Text style={styles.text}>Lịch sử đơn hàng</Text>
              <ArrowRightActive />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.icon}>
            <DeliverySuccess width={16} height={16} />
          </TouchableOpacity>
          <View style={{...styles.textWrapper, ...styles.borderText}}>
            <Text style={styles.text}>Địa chỉ giao hàng</Text>
            <ArrowRightActive />
          </View>
        </View>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.icon}>
            <DeliverySuccess width={16} height={16} />
          </TouchableOpacity>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Thay đổi mật khẩu</Text>
            <ArrowRightActive />
          </View>
        </View>
      </View>
      <View style={{}}>
        <View style={styles.wrapper}>
          <View style={styles.icon}>
            <DeliverySuccess width={16} height={16} />
          </View>
          <View style={{...styles.textWrapper, ...styles.borderText}}>
            <Text style={styles.text}>Cài đặt</Text>
            <ArrowRightActive />
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.icon}>
            <DeliverySuccess width={16} height={16} />
          </View>
          <View style={{...styles.textWrapper, ...styles.borderText}}>
            <Text style={styles.text}>Trung tâm hỗ trợ</Text>
            <ArrowRightActive />
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.icon}>
            <DeliverySuccess width={16} height={16} />
          </View>
          <View style={{...styles.textWrapper, ...styles.borderText}}>
            <Text style={styles.text}>Thông tin ứng dụng</Text>
            <ArrowRightActive />
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.icon}>
            <DeliverySuccess width={16} height={16} />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Đăng xuất</Text>
            <ArrowRightActive />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Account;
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 12,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textWrapper: {
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '84%',
    paddingBottom: 12,
  },
  borderText: {
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
  },
  text: {
    fontSize: 16,
    color: '#4F4F4F',
  },
  icon: {width: '6%', paddingBottom: 12, marginLeft: 16, borderBottomWidth: 2, borderBottomColor: '#fff'},
});
