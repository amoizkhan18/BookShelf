import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen/HomeScreen';
import SearchScreen from '../SearchScreen/SearchScreen';
import LibraryScreen from '../LibraryScreen/LibraryScreen';
import CustomTabBar from './CustomTabBar'; 

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />} 
      screenOptions={{ headerShown: false }} 
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
};

export default MainContainer;
