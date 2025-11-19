// src/screens/RegisterScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { register } from "../services/authService";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleRegister = async () => {
    try {
      await register(email, pass);
      navigation.replace("Home");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Create Account</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPass} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}
