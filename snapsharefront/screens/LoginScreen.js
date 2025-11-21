 import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  Animated,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleLogin = () => {
    navigation.replace('MainTabs');
  };

  const toggleLogoSize = () => {
    setIsEnlarged((prev) => !prev);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Logo Image */}
      <TouchableOpacity onPress={toggleLogoSize} activeOpacity={0.8}>
        <Image
          source={{ uri: ' https://i.pinimg.com/1200x/04/1e/92/041e923cc79b9f92b12e936ec0b23024.jpg' }} // Replace with your logo URL or local image
          style={[
            styles.logo,
            isEnlarged && styles.logoEnlarged,
          ]}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email or Username"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#cffcd7ff' },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#e40fcfff',
  },
  logoEnlarged: {
    width: 200,
    height: 200,
    borderRadius: 30,
  },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  input: {
    height: 50,
    borderColor:  '#e40fcfff',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  forgotText: { color: '#007bff', textAlign: 'center', marginTop: 10 ,textDecorationLine: 'underline'},
});








