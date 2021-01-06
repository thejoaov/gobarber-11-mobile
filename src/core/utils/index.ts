// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createTestProps = ({
  props = {},
  params = {},
}: {
  props?: Record<string, unknown>
  params?: Record<string, unknown>
}) => ({
  navigation: {
    state: { params: {} },
    dispatch: jest.fn(),
    goBack: jest.fn(),
    dismiss: jest.fn(),
    navigate: jest.fn(),
    openDrawer: jest.fn(),
    closeDrawer: jest.fn(),
    toggleDrawer: jest.fn(),
    getParam: jest.fn(),
    setParams: jest.fn(),
    addListener: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    isFocused: jest.fn(),
  },
  route: {
    params: {
      ...params,
    },
  },
  ...props,
})
