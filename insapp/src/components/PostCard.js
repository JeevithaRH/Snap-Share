// src/components/PostCard.js
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function PostCard({ post, onLike, liked }) {
  return (
    <View style={{ marginBottom: 20, backgroundColor: "#fff", padding: 10 }}>
      <Image 
        source={{ uri: post.image }} 
        style={{ width: "100%", height: 300, borderRadius: 10 }} 
      />
      <TouchableOpacity onPress={onLike}>
        <Text style={{ marginTop: 5 }}>
          ❤️ {liked ? "Unlike" : "Like"}
        </Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 5 }}>{post.caption}</Text>
    </View>
  );
}
