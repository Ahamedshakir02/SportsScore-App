import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MatchItem } from '../components/MatchItem';

export function SportsScreen({ sport, searchQuery }) {
  const [selectedDate, setSelectedDate] = useState('2024-08-24');

  // Filter matches by selected date and search query
  const filteredMatches = sport.matches.filter(
    (match) =>
      match.date === selectedDate &&
      (match.teams.some((team) =>
        team.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
        match.competition.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <ScrollView style={styles.sportScreen}>
      {/* Date Selector */}
      <ScrollView horizontal style={styles.dateSelector}>
        {['2024-08-23', '2024-08-24', '2024-08-25'].map((date) => (
          <TouchableOpacity key={date} onPress={() => setSelectedDate(date)}>
            <Text
              style={[
                styles.dateText,
                date === selectedDate && styles.selectedDate,
              ]}
            >
              {new Date(date).toDateString().split(' ').slice(0, 3).join(' ')}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Matches List */}
      {filteredMatches.map((match) => (
        <MatchItem key={match.id} match={match} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sportScreen: {
    padding: 10,
    backgroundColor: '#FFFFFF',
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
