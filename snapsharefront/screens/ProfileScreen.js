// import React from 'react';
// import { View, Image, Text, StyleSheet } from 'react-native';

// export default function ProfileScreen() {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={{ uri: 'https://picsum.photos/seed/profile/150' }}
//         style={styles.profileImage}
//       />
//       <Text style={styles.name}>John Doe</Text>
//       <Text style={styles.info}>Email: john@example.com</Text>
//       <Text style={styles.info}>Location: Bengaluru, India</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', paddingTop: 50 },
//   profileImage: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
//   name: { fontSize: 24, fontWeight: 'bold' },
//   info: { fontSize: 16, marginTop: 5 },
// });
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