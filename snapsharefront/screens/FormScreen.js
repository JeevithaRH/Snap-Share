// import React from 'react';
// import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

// export default function FormScreen() {
//   return (
//     <View style={styles.container}>
//       <TextInput style={styles.input} placeholder="Image" />
//        <TextInput style={styles.input} placeholder="Username" secureTextEntry />
//       <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />

//       <View style={styles.buttonRow}>
//         <TouchableOpacity style={styles.optionButton}>
//           <Text style={styles.optionText}>Status</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton}>
//           <Text style={styles.optionText}>Post</Text>
//         </TouchableOpacity>
//         </View>
//         <br/>
//         <TouchableOpacity style={styles.optionButton}>
//           <Text style={styles.optionText}>Both</Text>
//         </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
//   input: {
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 15,
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   optionButton: {
//     backgroundColor: '#28a745',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     marginHorizontal: 5,
//   },
//   optionText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function FormScreen() {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        <Text style={styles.imagePickerText}>
          {imageUri ? 'Change Image' : 'Select Image'}
        </Text>
      </TouchableOpacity>

      {imageUri && <Image source={{ uri: imageUri }} style={styles.preview} />}

      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Caption" /> 
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Status</Text>
        </TouchableOpacity>
        <>OR</>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Post</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.optionButton, { marginTop: 15 }]}>
        <Text style={styles.optionText}>Both</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  imagePicker: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  imagePickerText: {
    color: '#fff',
    fontSize: 16,
  },
  preview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  optionButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
});