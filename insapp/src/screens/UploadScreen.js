// src/screens/UploadScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { uploadPost } from "../services/postService";
import { auth } from "../../firebase/config";

export default function UploadScreen({ navigation }) {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleUpload = async () => {
    if (!image) return alert("Pick an image");

    await uploadPost(image, auth.currentUser.uid, caption);
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Pick Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <TextInput placeholder="Caption..." onChangeText={setCaption} />
      <Button title="Upload" onPress={handleUpload} />
    </View>
  );
}
