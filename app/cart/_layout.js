import { Stack, useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/Feather';

export default function Layout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="list"
        options={() => ({
          title: "Keranjang Belanja",
          headerLeft: () => {
            return (
              <Icon
                size={24}
                name="arrow-left"
                onPress={() => router.back()}
                style={{ marginRight: 12 }}
              />
            )
          },
        })}
      />
      <Stack.Screen
        name="transactions"
        options={() => ({
          title: "Detail Pembayaran",
          headerLeft: () => {
            return (
              <Icon
                size={24}
                name="arrow-left"
                onPress={() => router.replace('/cart/list')}
                style={{ marginRight: 12 }}
              />
            )
          },
        })}
      />
    </Stack>
  )
}