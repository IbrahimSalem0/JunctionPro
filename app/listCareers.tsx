// ListCareers.tsx

import React from 'react';
import { StyleSheet, FlatList, View, Text, SafeAreaView } from 'react-native';

const techJobsData = [
  { id: '1', title: 'Software Engineer' },
  { id: '2', title: 'Frontend Developer' },
  { id: '3', title: 'Backend Developer' },
  // Add more job data as needed
];

const ListCareers: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tech Jobs</Text>
      <FlatList
        data={techJobsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ListCareers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'red'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
