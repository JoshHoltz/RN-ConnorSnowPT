import { Link } from 'expo-router';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { ClientWelcome } from '../components/client/ClientWelcome'
import { UpcomingWorkout } from '../components/client/UpcomingWorkout'

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <ClientWelcome />
      <UpcomingWorkout />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
