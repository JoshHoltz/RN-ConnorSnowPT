import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text style={styles.Headings}>index</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Headings: {
    color: "white",
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});
