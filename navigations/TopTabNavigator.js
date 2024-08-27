import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import sportsData from '../data/sports.json';
import SportsScreen from '../screens/SportsScreen';

const TopTabs = createMaterialTopTabNavigator();

const TopTabNavigator = () => (
  <TopTabs.Navigator
    screenOptions={{
      tabBarScrollEnabled: true,
      tabBarIndicatorStyle: styles.tabIndicator,
      tabBarLabelStyle: styles.tabLabel,
      tabBarStyle: styles.tabBar,
    }}>
    {sportsData.map(sport => (
      <TopTabs.Screen key={sport.id} name={sport.name}>
        {props => <SportsScreen {...props} sport={sport} />}
      </TopTabs.Screen>
    ))}
  </TopTabs.Navigator>
);

const styles = {
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0,
    elevation: 0,
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  tabIndicator: {
    backgroundColor: '#007BFF',
    height: 3,
  },
};

export default TopTabNavigator;
