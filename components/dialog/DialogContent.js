import { StyleSheet } from "react-native";
import { Colors, Dialog, PanningProvider, Text, View } from "react-native-ui-lib";

import Divider from "../divider/Divider";

export default function DialogContent(props) {
  const { isVisible, onDismiss, title, children, key = 'dialog', height = '90%' } = props
  return (
    <Dialog
      bottom
      useSafeArea
      visible={isVisible}
      onDismiss={onDismiss}
      panDirection={PanningProvider.Directions.DOWN}
      key={key}
      height={height}
      width="100%"
      containerStyle={styles.roundedDialog}
      renderPannableHeader={() => <Header title={title} onDismiss={onDismiss} />}
    >
      {children}
    </Dialog>
  )
}

const Header = props => {
  const { title } = props;
  return (
    <View>
      <View centerH>
        <View style={{ borderRadius: 5 }} height={4} width={44} bg-grey60 marginT-8 marginB-12 marginH-40 />
        <View marginH-20 marginB-20>
          <Text $textDefault>{title}</Text>
        </View>
      </View>
      <Divider />
    </View>
  )
}

const styles = StyleSheet.create({
  roundedDialog: {
    backgroundColor: Colors.$backgroundDefault,
    borderRadius: 12
  }
})