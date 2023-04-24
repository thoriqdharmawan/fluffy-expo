import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="list" options={{ title: "Keranjang Belanja" }} />
    </Stack>
  )
}