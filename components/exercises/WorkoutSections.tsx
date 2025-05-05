import type { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

interface Exercise {
  id: string;
  name: string;
  sets: number;
}

const todaysExercises: Exercise[] = [
  {
    id: 'pogo-hops',
    name: 'Pogo Hops',
    sets: 20,
  },
  {
    id: 'bodyweight-squats',
    name: 'Bodyweight Squats',
    sets: 30,
  },
  {
    id: 'jumping-jacks',
    name: 'Jumping Jacks',
    sets: 25,
  },
];

export const WorkoutSections: FC = () => {
  const renderExercise = (exercise: Exercise) => (
    <TouchableOpacity key={exercise.id} style={styles.exerciseCard}>
      <View style={styles.imageContainer}>
        <View style={styles.placeholderImage}>
          <Text style={styles.placeholderIcon}>🏋️</Text>
        </View>
        <View style={styles.playButton}>
          <Text style={styles.playIcon}>▶</Text>
        </View>
      </View>
      <View style={styles.exerciseInfo}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSets}>{exercise.sets} sets</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Workout</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {todaysExercises.map(renderExercise)}
      </ScrollView>
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
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  scrollContent: {
    gap: 16,
    paddingRight: 16,
  },
  exerciseCard: {
    width: 180,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 200,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9575CD',
  },
  placeholderIcon: {
    fontSize: 48,
  },
  playButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  exerciseInfo: {
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  exerciseSets: {
    fontSize: 14,
    color: '#666666',
  },
}); 