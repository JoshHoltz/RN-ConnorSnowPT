import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Footer } from "../components/client/Footer";

const RootLayout = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Slot />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5", 
  },
  container: {
    flex: 1,
  },
});
