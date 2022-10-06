/*eslint-disable */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {
  Code,
  Home,
  HomeActive,
  Notification,
  NotificationActive,
  Product,
  ProductActive,
  User,
  UserActive,
} from './public/images/svgIcons';
import Account from './src/containers/Account';
import EditProfile from './src/containers/Account/containers/EditProfile';
import Homepage from './src/containers/Homepage';
import NotificationContainer from './src/containers/Notification';
import ProductPage from './src/containers/Products';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const ProductStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Vegetables" component={ProductPage} options={{headerShown: false}} />
        <Stack.Screen name="Fruits" component={ProductPage} options={{headerShown: false}} />
        <Stack.Screen name="Spices" component={ProductPage} options={{headerShown: false}} />
        <Stack.Screen name="DifferentType" component={ProductPage} options={{headerShown: false}} />
      </Stack.Navigator>
    );
  };

  const AccountStack = () => {
    return (
      <Stack.Navigator initialRouteName="Account">
        <Stack.Screen name="Account" component={Account} options={{headerShown: false}} />
        <Stack.Group>
          <Stack.Screen name="EditProfile" component={EditProfile} options={{title: 'Chỉnh sửa thông tin cá nhân'}} />
          <Stack.Screen name="Address" component={ProductPage} />
          <Stack.Screen name="OrderHistory" component={ProductPage} />
          <Stack.Screen name="ChangePassword" component={ProductPage} />
        </Stack.Group>
      </Stack.Navigator>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#F2F2F2', flex: 1, width: '100%'}}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="BottomHome"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}>
          <Tab.Screen
            name="BottomHome"
            component={Homepage}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <View style={{alignItems: 'center'}}>
                    {focused ? <HomeActive /> : <Home />}
                    <Text style={{color: `${focused ? '#00A74C' : '#BDBDBD'}`}}>Trang chủ</Text>
                  </View>
                </>
              ),
            }}
          />
          <Tab.Screen
            name="BottomProducts"
            component={ProductStack}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <View style={{alignItems: 'center'}}>
                    {focused ? <ProductActive /> : <Product />}
                    <Text style={{color: `${focused ? '#00A74C' : '#BDBDBD'}`}}>Sản phẩm</Text>
                  </View>
                </>
              ),
            }}
          />
          <Tab.Screen
            name="Button"
            component={ProductPage}
            options={{
              tabBarIcon: () => (
                <TouchableOpacity
                  style={{top: -12, width: 57, height: 57, borderRadius: 57, backgroundColor: '#F68B1F'}}>
                  <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{lineHeight: 57}}>
                      <Code width={50} height={50} />
                    </Text>
                  </View>
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            name="BottomNotifications"
            component={NotificationContainer}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <View style={{alignItems: 'center'}}>
                    {focused ? <NotificationActive /> : <Notification />}
                    <Text style={{color: `${focused ? '#00A74C' : '#BDBDBD'}`}}>Thông báo</Text>
                  </View>
                </>
              ),
              headerShown: false,
              headerTitle: 'Thông báo',
            }}
          />
          <Tab.Screen
            name="BottomAccount"
            component={AccountStack}
            listeners={({navigation, route}) => ({
              tabPress: e => {
                e.preventDefault();
                navigation.navigate('BottomAccount', {screen: 'Account'});
              },
            })}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <View style={{alignItems: 'center'}}>
                    {focused ? <UserActive /> : <User />}
                    <Text style={{color: `${focused ? '#00A74C' : '#BDBDBD'}`}}>Tài khoản</Text>
                  </View>
                </>
              ),
              headerStyle: {
                height: 120,
                backgroundColor: '#45BA7A',
              },
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
