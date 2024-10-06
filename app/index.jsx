// src/BlogList.js
import React from "react";
import { FlatList, Text, View } from "react-native";
import BlogCard from "../components/BlogCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { blogPosts } from "../constants/Posts";

const BlogList = () => {
  return (
    <SafeAreaView className="bg-black h-full p-5">
      <Text className="text-white text-2xl font-bold pt-1 pb-5 text-center">
        Blog Posts
      </Text>
      <FlatList
        data={blogPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <BlogCard
            id={item.id}
            title={item.title}
            body={item.body}
            author={item.author}
            imageUrl={item.imageUrl}
          />
        )}
      />
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default BlogList;
