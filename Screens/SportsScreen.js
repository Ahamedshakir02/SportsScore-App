import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MatchItem from '../components/MatchItem';

const SportsScreen = ({ sport }) => {
  const [selectedDate, setSelectedDate] = useState('2024-08-24');
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');

  const filteredMatches = sport.matches.filter(match => 
    match.date === selectedDate &&
    (match.teams.some(team => team.name.toLowerCase().includes(searchText.toLowerCase())) || 
    match.competition.toLowerCase().includes(searchText.toLowerCase()))
  );

  return (
    <ScrollView style={styles.sportScreen}>
      <View style={styles.searchContainer}>
        {isSearching ? (
          <TextInput
            style={styles.searchBox}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
            autoFocus={true}
            onBlur={() => setIsSearching(false)}
          />
        ) : (
          <TouchableOpacity onPress={() => setIsSearching(true)}>
            <Icon name="search" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView horizontal style={styles.dateSelector}>
        {['2024-08-23', '2024-08-24', '2024-08-25'].map(date => (
          <TouchableOpacity key={date} onPress={() => setSelectedDate(date)}>
            <Text style={[styles.dateText, date === selectedDate && styles.selectedDate]}>
              {new Date(date).toDateString().split(' ').slice(0, 3).join(' ')}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {filteredMatches.map(match => (
        <MatchItem key={match.id} match={match} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sportScreen: {
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchBox: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  dateSelector: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#F9F9F9',
    paddingVertical: 10,
    borderRadius: 10,
  },
  dateText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#666',
  },
  selectedDate: {
    fontWeight: 'bold',
    color: '#007BFF',
  },
});

export default SportsScreen;
