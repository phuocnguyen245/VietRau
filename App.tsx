import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
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
import Homepage from './src/containers/Homepage';
import ProductPage from './src/containers/Products';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#F2F2F2', flex: 1, width: '100%'}}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}>
          <Tab.Screen
            name="Home"
            component={Homepage}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <HomeActive />
                      <Text style={{color: '#00A74C'}}>Trang chủ</Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <Home />
                      <Text style={{color: '#BDBDBD'}}>Trang chủ</Text>
                    </View>
                  )}
                </>
              ),
            }}
          />
          <Tab.Screen
            name="Products"
            component={ProductPage}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <ProductActive />
                      <Text style={{color: '#00A74C'}}>Sản phẩm</Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <Product />
                      <Text style={{color: '#BDBDBD'}}>Sản phẩm</Text>
                    </View>
                  )}
                </>
              ),
            }}
          />
          <Tab.Screen
            name="Button"
            component={ProductPage}
            options={{
              tabBarIcon: ({focused}) => (
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
            name="Notifications"
            component={ProductPage}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <NotificationActive />
                      <Text style={{color: '#00A74C'}}>Thông báo</Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <Notification />
                      <Text style={{color: '#BDBDBD'}}>Thông báo</Text>
                    </View>
                  )}
                </>
              ),
            }}
          />
          <Tab.Screen
            name="User"
            component={ProductPage}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  {focused ? (
                    <View style={{alignItems: 'center'}}>
                      <UserActive />
                      <Text style={{color: '#00A74C'}}>Tài khoản</Text>
                    </View>
                  ) : (
                    <View style={{alignItems: 'center'}}>
                      <User />
                      <Text style={{color: '#BDBDBD'}}>Tài khoản</Text>
                    </View>
                  )}
                </>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
