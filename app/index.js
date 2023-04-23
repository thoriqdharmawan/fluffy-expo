import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router'

import { useAuth } from "../context/auth";

export default function Page() {
  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Link href="/home/menu">Go to Menus</Link>
      <Text onPress={() => signOut()}>Sign Out</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
