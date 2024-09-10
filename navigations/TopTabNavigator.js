import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { SportsScreen } from '../screens/SportsScreen';
import sportsData from '../data/sports.json'; // Import your JSON data

const TopTabs = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {/* Search Box */}
      <View style={styles.searchSection}>
        <TouchableOpacity onPress={() => setShowSearchBox(!showSearchBox)}>
          <Icon name="search" size={25} color="#666" />
        </TouchableOpacity>
        {showSearchBox && (
          <TextInput
            style={styles.searchInput}
            placeholder="Search matches or competitions..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        )}
      </View>

      {/* Top Tab Navigator */}
      <TopTabs.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarIndicatorStyle: styles.tabIndicator,
          tabBarLabelStyle: styles.tabLabel,
          tabBarStyle: styles.tabBar,
        }}>
        {sportsData.sports.map((sport) => (
          <TopTabs.Screen key={sport.id} name={sport.name}>
            {(props) => <SportsScreen {...props} sport={sport} searchQuery={searchQuery} />}
          </TopTabs.Screen>
        ))}
      </TopTabs.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#F9F9F9',
  },
  searchInput: {
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    flex: 1,
  },
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
});
