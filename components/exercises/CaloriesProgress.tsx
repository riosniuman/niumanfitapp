import type { FC } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

interface CaloriesData {
  name: string;
  calories: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
}

export const CaloriesProgress: FC = () => {
  const screenWidth = Dimensions.get('window').width;
  const chartWidth = screenWidth * 0.8; // 80% of screen width for each chart

  // Sample data - this would typically come from your API or state management
  const dailyProgress: CaloriesData[] = [
    {
      name: 'Consumed',
      calories: 1200,
      color: '#4CAF50',
      legendFontColor: '#666666',
      legendFontSize: 12,
    },
    {
      name: 'Remaining',
      calories: 800,
      color: '#E0E0E0',
      legendFontColor: '#666666',
      legendFontSize: 12,
    },
  ];

  const weeklyProgress: CaloriesData[] = [
    {
      name: 'Consumed',
      calories: 8400,
      color: '#1976D2',
      legendFontColor: '#666666',
      legendFontSize: 12,
    },
    {
      name: 'Remaining',
      calories: 5600,
      color: '#E0E0E0',
      legendFontColor: '#666666',
      legendFontSize: 12,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  const renderCaloriesInfo = (consumed: number, total: number) => (
    <View style={styles.caloriesInfo}>
      <Text style={styles.caloriesValue}>{consumed}</Text>
      <Text style={styles.caloriesLabel}>of {total} kcal</Text>
    </View>
  );

  const renderChart = (data: CaloriesData[], title: string, consumed: number, total: number) => (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>{title}</Text>
      <View style={styles.chartWrapper}>
        <PieChart
          data={data}
          width={chartWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="calories"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          hasLegend={true}
        />
        {renderCaloriesInfo(consumed, total)}
      </View>
      <View style={styles.legendContainer}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: item.color }]} />
            <Text style={styles.legendText}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Calories Progress</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {renderChart(dailyProgress, 'Daily Goal', 1200, 2000)}
        {renderChart(weeklyProgress, 'Weekly Goal', 8400, 14000)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  scrollContent: {
    paddingRight: 16,
  },
  chartContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    width: Dimensions.get('window').width * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  chartWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  caloriesInfo: {
    position: 'absolute',
    alignItems: 'center',
  },
  caloriesValue: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  caloriesLabel: {
    fontSize: 14,
    color: '#666666',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    gap: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    fontSize: 12,
    color: '#666666',
  },
}); 