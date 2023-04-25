import { Chip as C, Colors } from 'react-native-ui-lib'

export default function Chip({ active = false, ...rest }) {
  return (
    <C containerStyle={{ borderColor: active ? 'rgb(25, 113, 194)' : Colors.grey60, borderWidth: 1.6 }} {...rest} />
  )
}
