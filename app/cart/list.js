import { useRouter } from "expo-router";
import { Dimensions, ScrollView, StyleSheet } from "react-native";
import { Button, Card, Stepper, Text, View } from "react-native-ui-lib";

const HEIGHT = Dimensions.get('window').height
const BUTTON_HEIGHT = 55

export default function List() {
  const router = useRouter();

  const handleGoToTransaction = () => {
    router.replace('/cart/transactions')
  }

  return (
    <View style={{ height: HEIGHT - BUTTON_HEIGHT }}>
      <ScrollView>
        <View gap={16} paddingV-20>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </View>
      </ScrollView>
      <Button style={{ height: BUTTON_HEIGHT }} label="Lanjut Ke Pembayaran" fullWidth onPress={handleGoToTransaction} />
    </View>

  )
}


const ProductItem = () => {
  return (
    <Card onPress={() => console.log('pressed')}>
      <View padding-20>
        <Text style={styles.titleSection} text70 marginB-10>Baju Anak</Text>
        <View spread row marginB-4>
          <Text>Harga Satuan</Text>
          <Text>Rp 18.000</Text>
        </View>
        <View spread row marginB-4>
          <Text>Harga Total</Text>
          <Text>Rp 36.000</Text>
        </View>

        <View marginT-10 style={styles.stepper}>
          <Stepper small minValue={0} />
        </View>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  titleSection: {
    fontWeight: 'bold'
  },
  stepper: {
    alignItems: 'flex-end'
  },
  buttonPayment: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  }
});