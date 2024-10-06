import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Avatar, Button } from "react-native-elements";

const BlogPostDetails = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Image */}
      <Image
        source={{ uri: "https://example.com/travel-image.jpg" }} // Replace with actual image URL
        style={styles.headerImage}
      />

      {/* Post Content */}
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>
          The Top 5 Travel Destinations for 2024!
        </Text>

        {/* Author Info */}
        <View style={styles.authorContainer}>
          <Avatar
            rounded
            source={{ uri: "https://example.com/avatar.jpg" }} // Replace with actual avatar URL
            size="medium"
          />
          <View style={styles.authorDetails}>
            <Text style={styles.authorName}>Natasya Wrinkles</Text>
            <Text style={styles.timestamp}>3 days ago</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>

        {/* Article Content */}
        <Text style={styles.articleText}>
          The year 2024 is right around the corner, and with it comes the
          opportunity to explore new places...
        </Text>

        {/* Travel Destinations */}
        <View style={styles.destinationList}>
          <Text style={styles.destinationTitle}>1. Greece</Text>
          <Text style={styles.destinationDescription}>
            From the ancient ruins of Athens to the stunning beaches of
            Santorini, Greece has something for everyone.
          </Text>

          <Text style={styles.destinationTitle}>2. Japan</Text>
          <Text style={styles.destinationDescription}>
            Japan's mix of ancient tradition and cutting-edge technology is
            truly unique...
          </Text>

          {/* Add more destinations as needed */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
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
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  authorDetails: {
    flex: 1,
    marginLeft: 10,
  },
  authorName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  timestamp: {
    color: "#888",
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
  },
  destinationList: {
    marginTop: 20,
  },
  destinationTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  destinationDescription: {
    fontSize: 16,
    color: "#555",
  },
});

export default BlogPostDetails;
