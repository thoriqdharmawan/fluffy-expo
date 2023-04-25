import { StyleSheet, Text, View } from "react-native";

export default function Transactions() {
  return (

    <View style={styles.MainContainer}>
      <Text> This is Main Container View. </Text>
      <Text> This is Main Container View. </Text>
      <Text> This is Main Container View. </Text>
      <Text> This is Main Container View. </Text>
      <Text> This is Main Container View. </Text>
      <Text> This is Main Container View. </Text>
      <Text> This is Main Container View. </Text>
      <Text> This is Main Container View. </Text>
      <Text> This is Main Container View. </Text>

      <View style={styles.bottomView} >

        <Text style={styles.textStyle}>This is Bottom View.</Text>

      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF9800',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },

  textStyle: {
    color: '#fff',
    fontSize: 22
  }
});