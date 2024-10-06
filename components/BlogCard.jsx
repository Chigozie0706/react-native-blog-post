import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const BlogCard = ({ title, author, imageUrl, date, onViewMore, id }) => {
  return (
    <View className=" py-5 mt-5 flex-row">
      {/* Image Section */}
      <Image
        source={{
          uri: imageUrl,
        }}
        className="w-24 h-24 rounded-lg"
        resizeMode="cover"
        style={{ width: 96, height: 96, borderRadius: 10 }}
      />

      {/* Content Section */}
      <View className="ml-4 flex-1">
        <Text className="text-white text-sm font-bold">
          {title} {/* Dynamically receive title as a prop */}
        </Text>

        {/* Author and Date */}
        <View className="flex-row items-center mt-2">
          <Text className="text-white text-sm ">
            Author: {author} {/* Dynamically receive author as a prop */}
          </Text>
        </View>

        {/* Date */}
        <Text className="text-gray-400 text-xs mt-1">
          {date} {/* Dynamically receive date as a prop */}
        </Text>

        {/* View More Button */}
        <TouchableOpacity
          // (`/search/${query}`)
          onPress={() => router.push(`BlogPostDetails/${id}`)} // Use onPress to handle view more action
          // onPress={() => navigation.navigate("BlogPostDetails", { id })}
          className=" bg-blue-500 py-2  rounded-lg"
          style={{
            backgroundColor: "#1e40af", // Tailwind blue-900 color for button
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 8,
            width: "50%",
          }}
        >
          <Text className="text-white text-center font-bold">View More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BlogCard;
