import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardMiniApp from 'dashboard/src/App';
import ProductsMiniApp from 'products/src/App';
import React from 'react';
import {MyTabs} from '../components/Tabs';

const Stack = createStackNavigator();

export function MainStack(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardMiniApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Products"
          component={ProductsMiniApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
