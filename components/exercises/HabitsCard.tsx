import type { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Habit {
  id: string;
  name: string;
  progress: number;
  streak: number;
  icon: string;
}

export const HabitsCard: FC = () => {
  // Sample data - this would typically come from your API or state management
  const habits: Habit[] = [
    {
      id: 'morning-workout',
      name: 'Morning Workout',
      progress: 85,
      streak: 7,
      icon: '🏋️',
    },
    {
      id: 'daily-steps',
      name: 'Daily Steps',
      progress: 92,
      streak: 14,
      icon: '🚶',
    },
    {
      id: 'water-intake',
      name: 'Water Intake',
      progress: 75,
      streak: 5,
      icon: '💧',
    }
  ];

  const renderHabit = (habit: Habit) => (
    <View key={habit.id} style={styles.habitItem}>
      <View style={styles.habitHeader}>
        <Text style={styles.habitIcon}>{habit.icon}</Text>
        <Text style={styles.habitName}>{habit.name}</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${habit.progress}%` }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>{habit.progress}%</Text>
      </View>
      <View style={styles.streakContainer}>
        <Text style={styles.streakText}>🔥 {habit.streak} days streak</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Habits</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.habitsList}>
        {habits.map(renderHabit)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1976D2',
  },
  habitsList: {
    gap: 16,
  },
  habitItem: {
    gap: 8,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
  },
  habitHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  habitIcon: {
    fontSize: 20,
  },
  habitName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#666666',
    minWidth: 40,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakText: {
    fontSize: 12,
    color: '#FF5722',
  },
}); 