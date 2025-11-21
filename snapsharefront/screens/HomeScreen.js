// import React from 'react';
// import { View, ScrollView, Image, StyleSheet, Text } from 'react-native';
// import ImageCircle from '../components/ImageCircle';

// const circleImages = [1, 2, 3, 4, 5]; // Replace with actual image URIs
// const verticalImages = [1, 2, 3, 4, 5];

// export default function HomeScreen() {
//   return (
//     <ScrollView style={styles.container}>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
//         {circleImages.map((item, index) => (
//           <ImageCircle key={index} source={{ uri: `https://picsum.photos/seed/${item}/100` }} />
//         ))}
//       </ScrollView>
//       <View style={styles.verticalList}>
//         {verticalImages.map((item, index) => (
//           <Image
//             key={index}
//             source={{ uri: `https://picsum.photos/seed/v${item}/300/200` }}
//             style={styles.verticalImage}
//           />
//         ))}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 10 },
//   horizontalScroll: { marginVertical: 10 },
//   verticalList: { marginTop: 10 },
//   verticalImage: { width: '100%', height: 200, marginBottom: 10, borderRadius: 10 },
// });
import React from 'react';
import { View, ScrollView, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ImageCircle from '../components/ImageCircle';
import { Ionicons, Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

// const circleImages = [1, 2, 3, 4, 5];
const circleImages = [
  { id: 1, title: 'Alice' },
  { id: 2, title: 'Bob' },
  { id: 3, title: 'Cleo' },
  { id: 4, title: 'Drew' },
  { id: 5, title: 'Ella' },
];
const verticalImages = [
  { id: 1, caption: 'Sunset Vibes' },
  { id: 2, caption: 'City Lights' },
  { id: 3, caption: 'Nature Walk' },
  { id: 4, caption: 'Ocean Breeze' },
  { id: 5, caption: 'Mountain Hike' },
];

// export default function HomeScreen() {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Horizontal Circle Images */}
//       {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
//         {circleImages.map((item, index) => (
//           <ImageCircle key={index} source={{ uri: `https://picsum.photos/seed/${item}/100` }} />
//         ))}
//       </ScrollView> */}
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
//   {circleImages.map((item) => (
//     <ImageCircle
//       key={item.id}
//       source={{ uri: `https://picsum.photos/seed/${item.id}/100` }}
//       title={item.title}
//     />
//   ))}
// </ScrollView>
//       {/* Vertical Image Cards */}
//       <View style={styles.verticalList}>
//         {verticalImages.map((item) => (
//           <View key={item.id} style={styles.card}>
//             <Image
//               source={{ uri: `https://picsum.photos/seed/v${item.id}/400/250` }}
//               style={styles.verticalImage}
//             />
//             <Text style={styles.caption}>{item.caption}</Text>
//             <View style={styles.iconRow}>
//               <TouchableOpacity>
//                 { <Ionicons name="heart-outline" size={24} color="#ef0b0bff" /> }
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Feather name="message-circle" size={24} color="#2806e9ff" />
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <Feather name="share" size={24} color="#333" />
//               </TouchableOpacity>
//               <TouchableOpacity>
//                 <FontAwesome name="bookmark-o" size={24} color="#333" />
//               </TouchableOpacity>
//               <TouchableOpacity style={{ marginLeft: 'auto' }}>
//                 <FontAwesome name="ellipsis-h" size={24} color="#333" />
//               </TouchableOpacity>
//             </View>
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   );
// }
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {circleImages.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.navigate('FullScreenImage', {
                imageUri: `https://picsum.photos/seed/${item.id}/100`,
              })
            }
          >
            <ImageCircle
              source={{ uri: `https://picsum.photos/seed/${item.id}/100` }}
              title={item.title}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.verticalList}>
        {verticalImages.map((item) => (
          <View key={item.id} style={styles.card}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('FullScreenImage', {
                  imageUri: `https://picsum.photos/seed/v${item.id}/400/250`,
                })
              }
            >
              <Image
                source={{ uri: `https://picsum.photos/seed/v${item.id}/400/250` }}
                style={styles.verticalImage}
              />
            </TouchableOpacity>
            <Text style={styles.caption}>{item.caption}</Text>
            <View style={styles.iconRow}>
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={24} color="#ef0b0bff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="message-circle" size={24} color="#2806e9ff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather name="share" size={24} color="#333" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="bookmark-o" size={24} color="#333" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: 'auto' }}>
                <FontAwesome name="ellipsis-h" size={24} color="#333" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f2f2f2' },
  horizontalScroll: { marginVertical: 10 },
  verticalList: { marginTop: 10 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  verticalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  caption: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  iconRow: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    gap: 20,
  },
});