import { TextInputProps as InputProps } from 'react-native'
import { SpaceProps, LayoutProps } from 'styled-system'
import FeatherGlyphs from 'react-native-vector-icons/glyphmaps/Feather.json'

type Props = {
  icon?: keyof typeof FeatherGlyphs
  placeholder?: string
}

export type TextInputProps = Props & InputProps & SpaceProps & LayoutProps
