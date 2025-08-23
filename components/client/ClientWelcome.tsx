import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";

export const ClientWelcome = () => {
  const [client, setClient] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const clientId = 1; // ✅ hardcoded to 1

  useEffect(() => {
    fetch(`https://connorsnowpt.onrender.com/api/client-by-id/1`)
      .then((res) =>
        res.ok ? res.json() : Promise.reject("Failed to fetch client")
      )
      .then((data) => {
        setClient(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="#444" />
      </View>
    );
  }

  if (!client) {
    return (
      <View style={{ marginTop: 20, padding: 16 }}>
        <Text style={{ fontSize: 16, color: "black" }}>Loading client...</Text>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 20, paddingHorizontal: 16 }}>

        {/* ConnorSnowImage */}
              <Image
        source={require('@expo/../../assets/user.png')}
        style={{
          marginBottom: 10,
          width: 150,
          height: 150,
          borderRadius: 100,
          backgroundColor: "#e0e0e0",
        }}
      />

        {/* Welcoming Text */}
        <Text style={{ fontSize: 20, fontWeight: 700}}>Coach Connor</Text>
        <Text style={{ fontSize: 17}}>Your dedicated training app</Text>
        <Text style={{ fontSize: 16, color: "#333" }}>
          Welcome back, {client.client_firstname}!
        </Text>
      </View>
  );
};
