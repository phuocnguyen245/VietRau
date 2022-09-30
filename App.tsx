import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from './src/components/Header';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#F2F2F2', flex: 1, width: '100%'}}>
      <View>
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default App;
