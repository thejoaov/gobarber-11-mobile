import React from 'react'

import { Container, IconView, StyledIcon, StyledInput } from './styles'
import { TextInputProps } from './types'

const TextInput: React.FC<TextInputProps> = ({ icon, ...props }) => (
  <Container {...props}>
    {!!icon && (
      <IconView>
        <StyledIcon name={icon} size={18} />
      </IconView>
    )}

    <StyledInput {...props} />
  </Container>
)

TextInput.defaultProps = {
  width: '100%',
  autoCapitalize: 'none',
}

export default TextInput
