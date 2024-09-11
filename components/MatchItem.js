import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export function MatchItem({ match }) {
  return (
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
      <View style={styles.teamscore}>
        {match.teams.map((team, index) =>(
          <Text style={styles.score}>{team.score}</Text>
        ))}
      </View>
      <Text style={styles.matchTime}>{match.time}</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  matchItem: {
    backgroundColor: '#FFFFFF',
    padding:15,
    marginBottom: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
  matchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  teamscore:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around'
  },
  score:{
    fontSize: 30,
    textAlign: 'center',
    color: '#333',
  },
  matchCompetition: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  teams: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
  teamName: {
    fontSize: 13,
    fontWeight: '500',
    color:'darkgreen'
  },
  matchTime: {
    fontSize: 12,
    color: '#888',
    textAlign:'center',
  },
});
