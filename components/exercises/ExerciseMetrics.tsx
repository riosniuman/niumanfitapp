import type { FC } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'neutral';
}

const MetricCard: FC<MetricCardProps> = ({ title, value, unit, trend }) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return '#4CAF50';
      case 'down':
        return '#F44336';
      default:
        return '#757575';
    }
  };

  return (
    <View style={styles.metricCard}>
      <Text style={styles.metricTitle}>{title}</Text>
      <View style={styles.metricValueContainer}>
        <Text style={styles.metricValue}>{value}</Text>
        {unit && <Text style={styles.metricUnit}>{unit}</Text>}
      </View>
      {trend && (
        <View style={[styles.trendIndicator, { backgroundColor: getTrendColor() }]} />
      )}
    </View>
  );
};

interface Metric {
  id: string;
  title: string;
  value: number;
  unit?: string;
  trend: 'up' | 'down' | 'neutral';
}

export const ExerciseMetrics: FC = () => {
  // This would typically come from your state management or API
  const metrics: Metric[] = [
    { id: 'total-workouts', title: 'Total Workouts', value: 24, trend: 'up' },
    { id: 'avg-duration', title: 'Average Duration', value: 45, unit: 'min', trend: 'neutral' },
    { id: 'calories', title: 'Calories Burned', value: 1200, unit: 'kcal', trend: 'up' },
    { id: 'streak', title: 'Workout Streak', value: 5, unit: 'days', trend: 'up' },
    { id: 'performance', title: 'Best Performance', value: 85, unit: '%', trend: 'down' },
    { id: 'distance', title: 'Total Distance', value: 12.5, unit: 'km', trend: 'up' },
  ];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          title={metric.title}
          value={metric.value}
          unit={metric.unit}
          trend={metric.trend}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  metricCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: 160,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  metricTitle: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  metricValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  metricUnit: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 4,
  },
  trendIndicator: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
}); 