import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const RootLayout = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Slot />
        </View>
        <Text style={styles.footer}>Footer - Always visible</Text>
      </View>
    </SafeAreaView>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#121212", 
  },
  container: {
    flex: 1,
  },
  footer: {
    color: "white",
    textAlign: "center",
    padding: 20,
    borderTopWidth: 4,
    borderTopColor: "#333",
    backgroundColor: "#121212",
  },
})
