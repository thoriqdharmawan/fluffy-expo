import { useState } from "react";
import { Text, View } from "react-native";
import { Button, Dialog, PanningProvider } from "react-native-ui-lib";

export default function Menu() {
  const [visible, setVisible] = useState(false)
  return (
    <View>
      <Text onPress={() => setVisible(true)}>Menu Page</Text>
      <Button onPress={() => setVisible(true)} label="visible" size={Button.sizes.small} />

      <Dialog
        visible={visible}
        onDismiss={() => setVisible(false)}
        panDirection={PanningProvider.Directions.DOWN}
      >
        <Text text60>Content</Text>

        <Button onPress={() => setVisible(false)} label="Click" size={Button.sizes.small} />
      </Dialog>
    </View>
  );
}
