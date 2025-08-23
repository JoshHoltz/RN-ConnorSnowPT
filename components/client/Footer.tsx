import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

const ICON_SIZE = 28;

export const Footer = () => {
  const router = useRouter();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 25,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff', 
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <TouchableOpacity onPress={() => router.push('/home')}>
        <MaterialIcons name="dashboard" size={ICON_SIZE} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/search')}>
        <Ionicons name="analytics" size={ICON_SIZE} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/create')}>
        <Ionicons name="barbell-outline" size={ICON_SIZE} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/notifications')}>
        <AntDesign name="calendar" size={ICON_SIZE} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/profile')}>
        <AntDesign name="message1" size={ICON_SIZE} color="black" />
      </TouchableOpacity>
    </View>
  );
};

