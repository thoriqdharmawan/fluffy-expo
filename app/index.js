import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router'

import { useAuth } from "../context/auth";

export default function Page() {
  const { signOut } = useAuth();
  return (
    <View style={styles.container}>
      <Link style={styles.goto} href="/home/menu">Go to Menus</Link>
      <Pressable style={styles.button} onPress={signOut}>
        <Text style={styles.text}>Sign out</Text>
      </Pressable>
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
  goto: {
    marginBottom: 24
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
