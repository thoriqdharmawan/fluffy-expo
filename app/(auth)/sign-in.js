import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from "../../context/auth";


export default function SignIn() {
  const { signIn } = useAuth();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", paddingTop: insets.top, paddingBottom: insets.bottom + 24 }}>
      <Pressable style={styles.button} onPress={signIn}>
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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