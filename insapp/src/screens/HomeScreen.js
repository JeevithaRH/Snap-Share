// src/screens/HomeScreen.js
import React, { useEffect, useState } from "react";
import { View, ScrollView, Button } from "react-native";
import { auth } from "../../firebase/config";
import { getPosts, toggleLike } from "../services/postService";
import PostCard from "../components/PostCard";

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setPosts(await getPosts());
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Button title="Upload" onPress={() => navigation.navigate("Upload")} />
      <ScrollView>
        {posts.map(p => {
          const liked = p.likes?.includes(auth.currentUser.uid);
          return (
            <PostCard 
              key={p.id}
              post={p}
              liked={liked}
              onLike={() => {
                toggleLike(p.id, auth.currentUser.uid, liked);
                loadPosts();
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
