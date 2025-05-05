import { Text, View } from 'react-native';
import { ExerciseDashboard } from '@/components/exercises/ExerciseDashboard';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ExerciseDashboard />
    </View>
  );
}