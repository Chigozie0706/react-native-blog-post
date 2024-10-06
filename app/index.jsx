import React from "react";
import { FlatList, Text, View } from "react-native"; // FlatList for rendering a scrollable list of items
import BlogCard from "../components/BlogCard"; // Custom component to display individual blog posts
import { SafeAreaView } from "react-native-safe-area-context"; // Ensures the app works well with notched devices
import { StatusBar } from "expo-status-bar"; // StatusBar for handling the app's status bar styling
import { blogPosts } from "../constants/Posts"; // Importing blog posts data

const BlogList = () => {
  return (
    <SafeAreaView className="bg-black h-full p-5">
      {/* SafeAreaView to avoid overlap with system elements */}
      {/* Header Title */}
      <Text className="text-white text-2xl font-bold pt-1 pb-5 text-center">
        Blog Posts {/* Displaying title for the blog list */}
      </Text>
      {/* FlatList to render blog posts dynamically */}
      <FlatList
        data={blogPosts} // Providing the list of blog posts to render
        keyExtractor={(item) => item.id.toString()} // Setting unique key for each blog post (converted to string)
        renderItem={({ item }) => (
          // Rendering each blog post with the BlogCard component
          <BlogCard
            id={item.id} // Passing the blog post ID to the BlogCard
            title={item.title} // Passing the title
            body={item.body} // Passing the content/body of the blog post
            author={item.author} // Passing the author's name
            imageUrl={item.imageUrl} // Passing the image URL for the blog post
          />
        )}
      />
      {/* Status bar with custom background color and light text style */}
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default BlogList;
