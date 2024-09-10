import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import WatchScreen from '../screens/WatchScreen';
import NewsScreen from '../screens/NewsScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTabs = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
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
      })}
    >
      <BottomTabs.Screen name="Score" component={TopTabNavigator} />
      <BottomTabs.Screen name="Watch" component={WatchScreen} />
      <BottomTabs.Screen name="News" component={NewsScreen} />
      <BottomTabs.Screen name="Favorites" component={FavouriteScreen} />
    </BottomTabs.Navigator>
  );
}
