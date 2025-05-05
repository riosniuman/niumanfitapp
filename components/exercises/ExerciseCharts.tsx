import type { FC } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    color: (opacity: number) => string;
    strokeWidth: number;
  }[];
}

interface GoalLineProps {
  value: number;
  maxValue: number;
  chartHeight: number;
  color: string;
  label: string;
}

const GoalLine: FC<GoalLineProps> = ({ value, maxValue, chartHeight, color, label }) => {
  const yPosition = chartHeight - (value / maxValue) * chartHeight;

  return (
    <View style={[styles.goalLineContainer, { top: yPosition }]}>
      <View style={[styles.goalLine, { backgroundColor: color }]} />
      <View style={styles.goalLabelContainer}>
        <Text style={[styles.goalLabel, { color }]}>{label}</Text>
      </View>
    </View>
  );
};

export const ExerciseCharts: FC = () => {
  const [showAllCharts, setShowAllCharts] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const chartHeight = 220;
  const chartWidth = screenWidth * 0.8;

  // Sample data - this would typically come from your API or state management
  const weeklyData: ChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
        color: (opacity = 1) => `rgba(25, 118, 210, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const monthlyData: ChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        data: [65, 78, 90, 81],
        color: (opacity = 1) => `rgba(76, 175, 80, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const yearlyData: ChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        data: [75, 82, 88, 90],
        color: (opacity = 1) => `rgba(156, 39, 176, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const allTimeData: ChartData = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [
      {
        data: [70, 75, 85, 90],
        color: (opacity = 1) => `rgba(255, 152, 0, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#FFFFFF',
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientTo: '#FFFFFF',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#1976D2',
    },
  };

  const renderChart = (data: ChartData, title: string, goal: number, maxValue: number) => (
    <View style={[styles.chartContainer, { width: chartWidth }]}>
      <Text style={styles.chartTitle}>{title}</Text>
      <View style={styles.chartWrapper}>
        <LineChart
          data={data}
          width={chartWidth - 32}
          height={chartHeight}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
        <GoalLine
          value={goal}
          maxValue={maxValue}
          chartHeight={chartHeight}
          color="#FF5722"
          label={`Goal: ${goal}`}
        />
      </View>
    </View>
  );

  const charts = [
    { data: weeklyData, title: 'Weekly Progress', goal: 80, maxValue: 100 },
    { data: monthlyData, title: 'Monthly Overview', goal: 85, maxValue: 100 },
    { data: yearlyData, title: 'Yearly Progress', goal: 90, maxValue: 100 },
    { data: allTimeData, title: 'All Time Progress', goal: 95, maxValue: 100 },
  ];

  const visibleCharts = showAllCharts ? charts : charts.slice(0, 3);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Progress Charts</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {visibleCharts.map((chart, index) => (
          renderChart(chart.data, chart.title, chart.goal, chart.maxValue)
        ))}
        {!showAllCharts && charts.length > 3 && (
          <TouchableOpacity 
            style={[styles.chartContainer, styles.seeMoreContainer, { width: chartWidth }]}
            onPress={() => setShowAllCharts(true)}
          >
            <Text style={styles.seeMoreText}>See More</Text>
          </TouchableOpacity>
        )}
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
    position: 'relative',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  goalLineContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  goalLine: {
    flex: 1,
    height: 1,
    marginRight: 8,
  },
  goalLabelContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  goalLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  seeMoreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  seeMoreText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1976D2',
  },
}); 