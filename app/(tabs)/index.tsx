import { StyleSheet, ImageBackground } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function TabOneScreen() {
  return <EditScreenInfo path="app/(tabs)/index.tsx" navigation={navigator} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  sectionContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  sectionContent: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: "white",
  },
});
