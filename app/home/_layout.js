import { Link, Tabs } from "expo-router";
import { Image, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';

export default function Layout() {

  return (
    <View style={{ flex: 1 }}>
      <Tabs>
        <Tabs.Screen
          // Name of the dynamic route.
          name="menu"
          options={{
            // Ensure the tab always links to the same href.
            href: "/home/menu",
            tabBarLabel: 'Menu',
            title: 'Menu',
            headerRight: () => <Link href="/cart/list"><Icon name="shopping-cart" size={24} /></Link>,
            headerRightContainerStyle: { marginRight: 16 },
            tabBarIcon: () => {
              return (
                <Image
                  source={require('../../assets/icon.png')}
                  fadeDuration={0}
                  style={{ width: 20, height: 20 }}
                />
              )
            }
          }}
        />
        <Tabs.Screen
          // Name of the dynamic route.
          name="transactions"
          options={{
            // Ensure the tab always links to the same href.
            href: "/home/transactions",
            tabBarLabel: 'Transaksi',
            title: 'Transaksi',
            tabBarIcon: () => {
              return (
                <Image
                  source={require('../../assets/icon.png')}
                  fadeDuration={0}
                  style={{ width: 20, height: 20 }}
                />
              )
            }
          }}
        />
      </Tabs>
    </View>
  )
}