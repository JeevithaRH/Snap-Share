 
 import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleImagePress = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/originals/0c/d3/6a/0cd36a9443c137fd97eba1691dd49893.jpg',
          }}
          style={isEnlarged ? styles.profileImageLarge : styles.profileImage}
        />
      </TouchableOpacity>

      {/* Name */}
      <Text style={styles.name}>Snap Share✨</Text>

      {/* Bio */}
      <Text style={styles.bio}>
        Email: john@example.com
      </Text>
       <Text style={styles.bio}>
        Location: Bengaluru, India
      </Text>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Edit your Profile')}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#cffcd7ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#4caf50',
  },

  profileImageLarge: {
    width: 200,
    height: 200,
    borderRadius: 10, // square with slightly rounded corners
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#4caf50',
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});