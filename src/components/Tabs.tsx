import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardMiniApp from 'dashboard/src/App';
import ProductsMiniApp from 'products/src/App';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardMiniApp} />
      <Tab.Screen name="Products" component={ProductsMiniApp} />
    </Tab.Navigator>
  );
}
