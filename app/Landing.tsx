import { Link } from 'expo-router';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.Headings}>Landing Page</Text>
      <Link href="../Landing" style={{color: "white"}}>Landing</Link>
            <Link href="/" style={{color: "white"}}>Home</Link>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Welcome!</Text>
        <Text style={styles.cardText}>
          This is the main screen. Here you can add links, navigation, or
          dashboard info.
        </Text>
        <Button title="Get Started" onPress={() => alert("Button pressed!")} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Latest Updates</Text>
        <Text style={styles.cardText}>
          • Feature 1: Added navigation layout {"\n"}
          • Feature 2: Improved styling {"\n"}
          • Feature 3: Added footer
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>More Content</Text>
        <Text style={styles.cardText}>
          Scroll down to see how the footer stays after the content.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#121212",
  },
  Headings: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
  },
  card: {
    backgroundColor: "#1E1E1E",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  cardTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardText: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 10,
  },
});
