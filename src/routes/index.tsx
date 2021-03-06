import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components/native'

import { useAuth } from 'core/hooks/AuthContext'
import SignIn from 'screens/Auth/SignIn'
import SignUp from 'screens/Auth/SignUp'
import ForgotPassword from 'screens/Auth/ForgotPassword'
import Feedback from 'screens/Feedback'
import Home from 'screens/Dashboard/Home'
import Schedule from 'screens/Dashboard/Schedule'
import Profile from 'screens/Settings/Profile'
import Logout from 'screens/Settings/Logout'

import {
  AuthStackParams,
  AppStackParams,
  MainStackParams,
  DashboardStackParams,
  SettingsStackParams,
} from './types'

const AppStack = createStackNavigator<AppStackParams>()
const AuthStack = createStackNavigator<AuthStackParams>()
const MainStack = createStackNavigator<MainStackParams>()
const DashboardStack = createStackNavigator<DashboardStackParams>()
const SettingsStack = createStackNavigator<SettingsStackParams>()

const DashboardRoutes = (): JSX.Element => {
  const theme = useTheme()

  return (
    <DashboardStack.Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.background },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <DashboardStack.Screen name="Home" component={Home} />
      <DashboardStack.Screen name="Schedule" component={Schedule} />
    </DashboardStack.Navigator>
  )
}

const SettingsRoutes = (): JSX.Element => {
  const theme = useTheme()

  return (
    <SettingsStack.Navigator
      headerMode="none"
      initialRouteName="Profile"
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.background },
      }}>
      <SettingsStack.Screen name="Profile" component={Profile} />
      <SettingsStack.Screen
        name="Logout"
        component={Logout}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
      />
    </SettingsStack.Navigator>
  )
}

const AuthRoutes = (): JSX.Element => {
  const theme = useTheme()

  return (
    <AuthStack.Navigator
      headerMode="none"
      initialRouteName="SignIn"
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.background },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  )
}

const MainRoutes = (): JSX.Element => {
  const theme = useTheme()

  return (
    <MainStack.Navigator
      headerMode="none"
      initialRouteName="Dashboard"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: { backgroundColor: theme.colors.background },
      }}>
      <MainStack.Screen name="Dashboard" component={DashboardRoutes} />
      <MainStack.Screen name="Settings" component={SettingsRoutes} />
    </MainStack.Navigator>
  )
}

const App = (): JSX.Element => {
  const { user } = useAuth()
  const theme = useTheme()

  return (
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.background },
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}>
      {!!user ? (
        <AppStack.Screen name="Main" component={MainRoutes} />
      ) : (
        <AppStack.Screen name="Auth" component={AuthRoutes} />
      )}
      <AuthStack.Screen
        name="Feedback"
        component={Feedback}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
      />
    </AppStack.Navigator>
  )
}

const Routes = (): JSX.Element => {
  const { colors } = useTheme()

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.black.medium}
        animated
      />
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </>
  )
}

export default Routes
