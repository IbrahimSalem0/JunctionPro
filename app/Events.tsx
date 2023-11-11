// Events.tsx

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import axios from "axios";

const Events: React.FC = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://94.237.37.166/api/events");
        setEvents(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading events...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.eventCard}>
            <ImageBackground
              source={{
                uri: "https://fastly.picsum.photos/id/8/536/354.jpg?hmac=iq32r2KbxTL0059Bkv9d-S_TbkSEY2c4bhmkvgcJylk",
              }}
              style={styles.backgroundImage}
            >
              <View style={styles.cardContent}>
                <Text style={styles.eventName}>{item?.name}</Text>
                <Text style={styles.eventLocation}>{item?.location}</Text>
                <Text style={styles.eventDate}>{new Date(item.date).toLocaleDateString()}</Text>
              </View>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  eventCard: {
    width: "100%",
    aspectRatio: 2, // You can adjust the aspect ratio based on your design
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  cardContent: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  eventName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  eventLocation: {
    fontSize: 16,
    color: "white",
  },
  eventDate: {
    fontSize: 14,
    color: "white",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
