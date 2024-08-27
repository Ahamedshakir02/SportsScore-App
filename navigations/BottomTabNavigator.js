import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import TopTabNavigator from './TopTabNavigator';
import WatchScreen from '../screens/WatchScreen';
import NewsScreen from '../screens/NewsScreen';
import FavouriteScreen from '../screens/FavouriteScreen';

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <BottomTabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Score') {
          iconName = 'stats-chart';
        } else if (route.name === 'Watch') {
          iconName = 'play-circle';
        } else if (route.name === 'News') {
          iconName = 'newspaper';
        } else if (route.name === 'Favorites') {
          iconName = 'heart';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#007BFF',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: styles.bottomTabBar,
    })}>
    <BottomTabs.Screen name="Score" component={TopTabNavigator} />
    <BottomTabs.Screen name="Watch" component={WatchScreen} />
    <BottomTabs.Screen name="News" component={NewsScreen} />
    <BottomTabs.Screen name="Favorites" component={FavouriteScreen} />
  </BottomTabs.Navigator>
);

const styles = {
  bottomTabBar: {
    backgroundColor: '#FFFFFF',
    borderTopColor: '#DDD',
    borderTopWidth: 1,
  },
};

export default BottomTabNavigator;
