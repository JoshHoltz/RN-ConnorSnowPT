import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const clientId = 1;

export const UpcomingWorkout = () => {
  const [workouts, setWorkouts] = useState<any[]>([]);

  useEffect(() => {
    if (!clientId) return;

    fetch(`https://connorsnowpt.onrender.com/api/upcoming-workouts/${clientId}`)
      .then((res) => res.json())
      .then((data) => setWorkouts(data || []))
      .catch((err) => console.error(err));
  }, []);

return (
  <View style={{ marginTop: 20, paddingHorizontal: 16 }}>
    <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 12 }}>
      Upcoming Workout
    </Text>

    {workouts.length === 0 ? (
      <Text style={{ color: "gray" }}>No upcoming workouts</Text>
    ) : (
      workouts.map((workout, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "#fff",
            padding: 12,
            borderRadius: 8,
            marginBottom: 10,
            flexDirection: "row", 
            alignItems: "center", 
          }}
        >
          {/* Text Section */}
          <View style={{ flex: 1, marginRight: 12 }}>
            <Text style={{ color: "gray", marginBottom: 4 }}>Next Session</Text>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 4 }}>
              {workout.upcoming_workout_split_name}
            </Text>
            <Text style={{ color: "gray", fontSize: 12 }}>
              {workout.upcoming_workout_date || "No date provided"}
            </Text>
          </View>

          {/* Image Section */}
          <Image
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 12,
            }}
            resizeMode="cover"
          />
        </View>
      ))
    )}
  </View>
)};