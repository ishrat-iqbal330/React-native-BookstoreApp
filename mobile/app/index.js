import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My first expo app</Text>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1745253606009-9f01a3404db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "purple",
    fontWeight: "bold",
  },
});
