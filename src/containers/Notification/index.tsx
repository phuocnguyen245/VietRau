import React from 'react';
import {ScrollView} from 'react-native';
import Notify from '../../components/Notify';

enum Type {
  DeliverySuccess = 1,
  Update = 2,
  Birthday = 3,
  Discount = 4,
}

const Notification = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
      {[...Array(10)].map((a, index) => {
        return <Notify type={'a'} key={index} />;
      })}
    </ScrollView>
  );
};
export default Notification;
