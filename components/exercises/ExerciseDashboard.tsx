import type { FC } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ExerciseMetrics } from './ExerciseMetrics';
import { CaloriesProgress } from './CaloriesProgress';
import { HabitsCard } from './HabitsCard';
import { ExerciseCharts } from './ExerciseCharts';
import { WorkoutSections } from './WorkoutSections';
import { AlimentationPlan } from './AlimentationPlan';

export const ExerciseDashboard: FC = () => {
  return (
    <ScrollView style={styles.container}>
      <ExerciseMetrics />
      <CaloriesProgress />
      <HabitsCard />
      <ExerciseCharts />
      <WorkoutSections />
      <AlimentationPlan />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
}); 