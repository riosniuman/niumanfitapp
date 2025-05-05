import type { FC } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface Meal {
  id: string;
  name: string;
  time: string;
  calories: number;
  emoji: string;
}

const todaysMeals: Meal[] = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    time: '8:00 AM',
    calories: 450,
    emoji: '🍳',
  },
  {
    id: 'snack1',
    name: 'Morning Snack',
    time: '10:30 AM',
    calories: 150,
    emoji: '🍎',
  },
  {
    id: 'lunch',
    name: 'Lunch',
    time: '1:00 PM',
    calories: 650,
    emoji: '🥗',
  },
  {
    id: 'snack2',
    name: 'Afternoon Snack',
    time: '4:00 PM',
    calories: 200,
    emoji: '🥜',
  },
  {
    id: 'dinner',
    name: 'Dinner',
    time: '7:00 PM',
    calories: 550,
    emoji: '🍽️',
  },
];

export const AlimentationPlan: FC = () => {
  const renderMeal = (meal: Meal) => (
    <View key={meal.id} style={styles.mealCard}>
      <View style={styles.mealHeader}>
        <View style={styles.mealIconContainer}>
          <Text style={styles.mealIcon}>{meal.emoji}</Text>
        </View>
        <View style={styles.mealInfo}>
          <Text style={styles.mealName}>{meal.name}</Text>
          <Text style={styles.mealTime}>{meal.time}</Text>
        </View>
        <View style={styles.caloriesContainer}>
          <Text style={styles.caloriesText}>{meal.calories}</Text>
          <Text style={styles.caloriesUnit}>kcal</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Today's Meal Plan</Text>
        <View style={styles.totalCalories}>
          <Text style={styles.totalCaloriesText}>2000</Text>
          <Text style={styles.totalCaloriesUnit}>kcal daily goal</Text>
        </View>
      </View>
      <ScrollView 
        horizontal={false}
        showsVerticalScrollIndicator={false}
        style={styles.mealsList}
      >
        {todaysMeals.map(renderMeal)}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  totalCalories: {
    alignItems: 'flex-end',
  },
  totalCaloriesText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4CAF50',
  },
  totalCaloriesUnit: {
    fontSize: 12,
    color: '#666666',
  },
  mealsList: {
    maxHeight: 320,
  },
  mealCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  mealHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mealIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  mealIcon: {
    fontSize: 24,
  },
  mealInfo: {
    flex: 1,
  },
  mealName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  mealTime: {
    fontSize: 12,
    color: '#666666',
  },
  caloriesContainer: {
    alignItems: 'flex-end',
  },
  caloriesText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  caloriesUnit: {
    fontSize: 12,
    color: '#666666',
  },
}); 