import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import LinkButton from '../index'
import { Props } from '../types'

let wrapper: ReactTestRenderer
const initialProps: Props = { title: 'test' }

describe('LinkButton test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <LinkButton {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', async () => {
    expect(wrapper).toBeTruthy()
  })
})
