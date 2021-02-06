import { TextInputProps as InputProps } from 'react-native'
import { SpaceProps, LayoutProps } from 'styled-system'
import FeatherGlyphs from 'react-native-vector-icons/glyphmaps/Feather.json'

export type OwnProps = {
  icon?: keyof typeof FeatherGlyphs
  placeholder?: string
  error?: boolean
  isFilled?: boolean
  isFocused?: boolean
}

export type InputRef = {
  focus?(): void
}

export type Props = OwnProps & InputProps & SpaceProps & LayoutProps
