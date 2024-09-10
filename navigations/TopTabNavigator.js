import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { SportsScreen } from '../screens/SportsScreen'; // Assuming this component is in a separate file
import sportsData from '../data/sports.json'; // Adjust the path as necessary
import { useNavigation } from '@react-navigation/native';

const TopTabs = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    // Set header options to include the search bar functionality
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRight}>
          {showSearch ? (
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoFocus={true}
            />
          ) : (
            <TouchableOpacity onPress={toggleSearch}>
              <Icon name="search" size={24} color="#007BFF" />
            </TouchableOpacity>
          )}
          {showSearch && (
            <TouchableOpacity onPress={toggleSearch}>
              <Icon name="close" size={24} color="#007BFF" style={styles.closeIcon} />
            </TouchableOpacity>
          )}
        </View>
      ),
    });
  }, [navigation, showSearch, searchQuery]);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (showSearch) setSearchQuery(''); // Clear search query when closing the search bar
  };

  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: styles.tabIndicator,
        tabBarLabelStyle: styles.tabLabel,
        tabBarStyle: styles.tabBar,
      }}>
      {sportsData.sports.map(sport => (
        <TopTabs.Screen key={sport.id} name={sport.name} >
          {props => <SportsScreen {...props} sport={sport} searchQuery={searchQuery} />}
        </TopTabs.Screen>
      ))}
    </TopTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    elevation: 0,
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  tabIndicator: {
    backgroundColor: '#007BFF',
    height: 63,
    borderRadius:40,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 19,
  },
  searchInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#007BFF',
    marginRight: 10,
    padding: 6,
    width: 200,
    color: '#333',
  },
  closeIcon: {
    marginLeft: 5,
  },
});
