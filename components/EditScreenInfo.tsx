import React from "react";
import { StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

import Colors from "../constants/Colors";
import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";
import { useNavigation } from "expo-router";
// import { useNavigation } from "@react-navigation/native";

const Section = ({ title, imageUrl, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.sectionContainer}>
    <ImageBackground
      source={{ uri: imageUrl }}
      style={styles.backgroundImage}
      resizeMode="contian"
    >
      <View style={styles.sectionContent}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {/* Add your arrow icon here */}
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

export default function EditScreenInfo({ path }) {
  const navigation = useNavigation();
  const navigateToSection = (sectionName) => {
    // Add your navigation logic here
    // For example, you can use navigation.navigate to go to the section details page
    navigation.navigate(sectionName);
    console.log(`Navigating to ${sectionName} details`);
  };

  return (
    <ImageBackground
      source={require("./background-noise.jpg")}
      style={styles.backgroundImage}
    >
      <Section
        title="Events"
        imageUrl="https://assets-global.website-files.com/6266854f3c3d183d9ce92dc8/651bcb6672058d46fb4d4411_EE7A0447-p-2000.jpg"
        onPress={() => navigateToSection("Events")}
      />
      <Section
        title=""
        imageUrl="https://img.etimg.com/thumb/msid-60916721,width-300,height-225,imgsize-170135,,resizemode-75/.jpg"
        onPress={() => navigateToSection("listCareers")}
      />
      <Section
        title=""
        imageUrl="https://wallpapers.com/images/featured-full/meme-background-u260cqghqox0mz3d.jpg"
        onPress={() => navigateToSection("Memes")}
      />
      <Section
        title="Development"
        imageUrl="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4"
        onPress={() => navigateToSection("Section 3")}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    height: 200,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  sectionContent: {
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "700",
  },
});
