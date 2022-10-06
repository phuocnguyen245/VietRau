import React from 'react';
import {Text, View} from 'react-native';
import {Clock, DeliverySuccess} from '../../../public/images/svgIcons';

interface Props {
  type: string;
}
const Notify = ({type}: Props) => {
  return (
    <View
      style={{width: '100%', marginTop: 12, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
      <View style={{width: '80%', flexDirection: 'row', paddingTop: 12, paddingBottom: 12}}>
        <View style={{width: '15%'}}>
          <DeliverySuccess />
        </View>
        <View style={{width: '75%'}}>
          <Text style={{fontWeight: '700'}}>Đã giao hàng thành công</Text>
          <Text style={{color: '#828282', marginTop: 4, marginBottom: 4}}>
            Đơn hàng #4856 đã được giao hàng thành công
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Clock />
            <Text style={{marginLeft: 6, color: '#828282'}}>20:00 10-03-2021</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Notify;
