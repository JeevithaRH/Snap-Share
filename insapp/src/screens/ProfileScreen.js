// src/screens/ProfileScreen.js
import React from "react";
import { View, Button, Text } from "react-native";
import { logout } from "../services/authService";

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text>My Profile</Text>
      <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile")} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
