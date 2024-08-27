import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MatchItem = ({ match }) => (
  <View style={styles.matchItem}>
    <View style={styles.matchHeader}>
      <Text style={styles.matchCompetition}>{match.competition}</Text>
      <TouchableOpacity>
        <Icon
          name={match.notification ? 'notifications' : 'notifications-off'}
          size={20}
          color="#666"
        />
      </TouchableOpacity>
    </View>
    <View style={styles.teams}>
      {match.teams.map((team, index) => (
        <View key={index} style={styles.team}>
          <Image source={{ uri: team.logo }} style={styles.logo} />
          <Text style={styles.teamName}>{team.name}</Text>
        </View>
      ))}
    </View>
    <Text style={styles.matchTime}>{match.time}</Text>
  </View>
);

const styles = StyleSheet.create({
  matchItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  matchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  matchCompetition: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  teams: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  teamName: {
    fontSize: 16,
    fontWeight: '500',
  },
  matchTime: {
    fontSize: 12,
    color: '#888',
  },
});

export default MatchItem;
