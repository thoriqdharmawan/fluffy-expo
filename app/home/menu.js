import { ScrollView, StyleSheet } from "react-native";
import { BorderRadiuses, Card, GridList, Spacings, TextField, Text, View, Image, Button, Colors, Stepper } from "react-native-ui-lib";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useMemo, useState } from "react";
import Icon from 'react-native-vector-icons/Feather';

import DialogContent from "../../components/dialog/DialogContent";
import Divider from "../../components/divider/Divider";
import Chip from "../../components/chip/Chip";


const products = [
  {
    id: 'a',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'In Stock',
      quantity: 1
    },
    mediaUrl: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200'
  },
  {
    id: 'b',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'In Stock',
      quantity: 2
    },
    mediaUrl: 'https://images.pexels.com/photos/3737604/pexels-photo-3737604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200'
  },
  {
    id: 'c',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'In Stock',
      quantity: 1
    },
    mediaUrl: 'https://images.pexels.com/photos/3685538/pexels-photo-3685538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200'
  },
  {
    id: 'd',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'Out of Stock',
      quantity: 0
    },
    mediaUrl: 'https://images.pexels.com/photos/4202467/pexels-photo-4202467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200'
  },
  {
    id: 'e',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'In Stock',
      quantity: 3
    },
    mediaUrl: 'https://static.wixstatic.com/media/cda177_f9de629d8c97416f82b398725bd49918.jpg_128'
  },
  {
    id: 'f',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'statu',
      status: 'Out of Stock',
      quantity: 0
    },
    mediaUrl: 'https://static.wixstatic.com/media/cda177_1782572f1dfc49d397e830918d912568.jpg_128'
  },
  {
    id: 'g',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'In Stock',
      quantity: 10
    },
    mediaUrl: 'https://static.wixstatic.com/media/cda177_03906910d07749199b09e443ce9fed6c.jpg_128'
  },
  {
    id: 'h',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'In Stock',
      quantity: 11
    },
    mediaUrl: 'https://static.wixstatic.com/media/cda177_9d3e5b8fc70e4d2997806ece35e7de54.jpg_128'
  },
  {
    id: 'i',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'In Stock',
      quantity: 10
    },
    mediaUrl: 'https://static.wixstatic.com/media/cda177_db24e0568cdc4a82be0a8559fb123b55.jpg_128'
  },
  {
    id: 'j',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'In Stock',
      quantity: 2
    },
    mediaUrl: 'https://static.wixstatic.com/media/cda177_085a5f9575ba4b208f6091b26cbda4c4.jpg_128'
  },
  {
    id: 'k',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'In Stock',
      quantity: 8
    },
    mediaUrl: 'https://static.wixstatic.com/media/cda177_82d66fece3e54a7aa10d49bda4d98259.jpg_128'
  },
  {
    id: 'l',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'In Stock',
      quantity: 8
    },
    mediaUrl: 'https://static.wixstatic.com/media/84770f_c611ded729fd4461a1bb57134d4e9dd2.png_128'
  },
  {
    id: 'm',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'In Stock',
      quantity: 3
    },
    mediaUrl: 'https://images.pexels.com/photos/3612182/pexels-photo-3612182.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 'n',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'In Stock',
      quantity: 22
    },
    mediaUrl: 'https://images.pexels.com/photos/4841529/pexels-photo-4841529.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 'o',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'In Stock',
      quantity: 10
    },
    mediaUrl: 'https://images.pexels.com/photos/4173450/pexels-photo-4173450.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  },
  {
    id: 'p',
    name: 'I\'m a Product',
    formattedPrice: '$19.99',
    inventory: {
      trackingMethod: 'status',
      status: 'In Stock',
      quantity: 10
    },
    mediaUrl: 'https://images.pexels.com/photos/10513273/pexels-photo-10513273.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=150'
  }
];

export default function Menu() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <View>
      <GridList
        data={products}
        renderItem={({ item }) => <CardItem item={item} onPress={() => setIsVisible(true)} />}
        keyExtractor={item => item.id}
        numColumns={2}
        itemSpacing={Spacings.s5}
        listPadding={Spacings.s5}
        contentContainerStyle={{ marginBottom: Spacings.s6 }}
        ListHeaderComponent={
          <TextField
            placeholder="Cari Produk"
            // onChangeText={onChangeText}
            containerStyle={styles.textField}
            trailingAccessory={<Icon name="search" size={24} />}
            fieldStyle={styles.textFieldInner}
          />
        }
      />

      <DialogContent isVisible={isVisible} title="Ayam Bakar" onDismiss={() => setIsVisible(false)}>
        <Content onDismiss={() => setIsVisible(false)} />
      </DialogContent>
    </View>
  );
}

const CardItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card flex>
        <Card.Section imageSource={{ uri: item.mediaUrl }} imageStyle={styles.itemImage} />
        <View padding-s2>
          <Text $textDefault>{item.name}</Text>
          <Text $textDefault>{item.formattedPrice}</Text>
          {item.inventory.status === 'Out of Stock' && (
            <Text text90M $errorColor>
              {item.inventory.status}
            </Text>
          )}
        </View>
      </Card>
    </TouchableOpacity>
  )
}


const Content = ({ onDismiss }) => {
  const [active, setActive] = useState('')
  const uri = 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=200'

  const handleAddToCart = () => {
    onDismiss()
  }

  const chips = useMemo(() => [
    {
      label: 'Chips 1',
      active: active === 'Chips 1',
    },
    {
      label: 'Chips 2',
      active: active === 'Chips 2',
    },
    {
      label: 'Chips 3',
      active: active === 'Chips 3',
    },
  ], [active])

  return (
    <View height="91%">
      <Image cover source={{ uri: uri }} marginB-20 />
      <ScrollView style={{ flex: 1 }}>
        <View marginH-20 marginB-20>
          <Text style={styles.titleSection} text70 marginB-10>Description</Text>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve</Text>
        </View>
        <View marginH-20 marginB-20>
          <Text style={styles.titleSection} text70 marginB-10>Varian</Text>
          <View style={styles.chipWrapper}>
            {chips?.map((c, idx) => (<Chip key={idx} label={c.label} active={c.active} onPress={() => setActive(c.label)} />))}
          </View>
        </View>
        <View marginH-20 marginB-20>
          <Text style={styles.titleSection} text70 marginB-10>Stok</Text>
          <Text>50</Text>
        </View>
        <View marginH-20 marginB-20>
          <Text style={styles.titleSection} text70 marginB-10>Harga</Text>
          <Text>Rp 50.000</Text>
        </View>
      </ScrollView >
      <View height={80}>
        <Divider />
        <View style={styles.action}>
          <Stepper minValue={0} />
          <Button
            label="Tambah ke Keranjang"
            onPress={handleAddToCart}
            size={Button.sizes.medium}
            backgroundColor={Colors.$iconPrimary}
            iconSource={() => <Icon name="shopping-cart" size={16} color="#fff" style={styles.iconCart} />}
          />
        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  textField: {
    marginVertical: Spacings.s5,
    borderWidth: 0.3,
    padding: Spacings.s2,
    borderRadius: Spacings.s3
  },
  textFieldInner: {
    marginHorizontal: Spacings.s2
  },
  itemImage: {
    width: '100%',
    height: 85,
    borderRadius: BorderRadiuses.br10
  },
  titleSection: { fontWeight: 'bold' },
  chipWrapper: {
    flexDirection: 'row',
    gap: 12,
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16
  },
  iconCart: {
    marginRight: 12
  }
});