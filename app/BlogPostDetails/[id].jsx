import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { blogPosts } from "../../constants/Posts";
import { SafeAreaView } from "react-native-safe-area-context";

const BlogPostDetails = () => {
  const { id } = useLocalSearchParams();

  // Find the specific blog post by ID (Ensure id is a string and matches post.id)
  const post = blogPosts.find((p) => p.id.toString() === id?.toString());

  if (!post) {
    return <Text>Post not found!</Text>;
  }

  return (
    <SafeAreaView className="bg-black h-full p-5">
      <ScrollView style={styles.container}>
        {/* Header Image */}
        <Image
          source={{ uri: post.imageUrl }} // Replace with actual image URL
          style={styles.headerImage}
        />

        {/* Post Content */}
        <View style={styles.content}>
          {/* Title */}
          <Text style={styles.title}>{post.title}</Text>

          {/* Author Info */}
          <View style={styles.authorContainer}>
            <Image
              source={{ uri: post.imageUrl }} // Replace with actual avatar URL
              style={styles.avatar}
            />
            <View style={styles.authorDetails}>
              <Text style={styles.authorName}>{post.author}</Text>
              <Text style={styles.timestamp}>3 days ago</Text>
            </View>
          </View>

          {/* Article Content */}
          <Text style={styles.articleText}>{post.body}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "white",
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  authorDetails: {
    flex: 1,
    marginLeft: 10,
  },
  authorName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  timestamp: {
    color: "white",
    fontSize: 12,
  },
  followButton: {
    backgroundColor: "#FF5A5F",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  followButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  articleText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: "white",
  },
  destinationList: {
    marginTop: 20,
  },
  destinationTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
    color: "#333",
  },
  destinationDescription: {
    fontSize: 16,
    color: "#555",
  },
});

export default BlogPostDetails;
