// src/services/postService.js
import { 
  collection, addDoc, getDocs, updateDoc, doc, arrayUnion, arrayRemove 
} from "firebase/firestore";
import { db, storage } from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadPost = async (imageUri, userId, caption) => {
  const imgRef = ref(storage, `posts/${Date.now()}.jpg`);
  const img = await fetch(imageUri);
  const bytes = await img.blob();
  await uploadBytes(imgRef, bytes);

  const url = await getDownloadURL(imgRef);

  return addDoc(collection(db, "posts"), {
    userId,
    caption,
    image: url,
    likes: [],
    createdAt: Date.now()
  });
};

export const getPosts = async () => {
  const snapshot = await getDocs(collection(db, "posts"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const toggleLike = (postId, userId, liked) => {
  const refDoc = doc(db, "posts", postId);

  return updateDoc(refDoc, {
    likes: liked ? arrayRemove(userId) : arrayUnion(userId)
  });
};
