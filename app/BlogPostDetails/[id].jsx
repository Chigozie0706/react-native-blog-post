import { useLocalSearchParams } from "expo-router"; // Hook to get local search parameters (like route params)
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { blogPosts } from "../../constants/Posts"; // Importing blog posts data
import { SafeAreaView } from "react-native-safe-area-context"; // SafeAreaView to account for notches on iPhones

const BlogPostDetails = () => {
  const { id } = useLocalSearchParams(); // Get the 'id' parameter from the URL or route

  // Find the specific blog post by ID (Ensure id is a string and matches post.id)
  const post = blogPosts.find((p) => p.id.toString() === id?.toString());

  // If no post is found with the given ID, display a "Post not found" message
  if (!post) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text className="text-lg text-white">Post not found!</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-black h-full p-5">
      {/* SafeAreaView to avoid status bar overlap */}
      <ScrollView className="flex-1">
        {/* ScrollView to allow scrolling if content exceeds screen size */}
        {/* Header Image */}
        <Image
          source={{ uri: post.imageUrl }}
          className="w-full h-52 object-cover"
        />
        {/* Post Content */}
        <View className="p-5">
          {/* Title */}
          <Text className="text-2xl font-bold text-white mb-4">
            {post.title}
          </Text>

          {/* Author Info */}
          <View className="flex-row items-center mb-4">
            <Image
              source={{ uri: post.imageUrl }}
              className="w-12 h-12 rounded-full"
            />
            <View className="ml-3">
              <Text className="text-base font-bold text-white">
                {post.author}
              </Text>
              <Text className="text-xs text-gray-400">3 days ago</Text>
            </View>
          </View>

          {/* Article Content */}
          <Text className="text-base leading-6 text-white">{post.body}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BlogPostDetails;
