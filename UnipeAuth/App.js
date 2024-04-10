import { StatusBar } from 'expo-status-bar';
import '@tamagui/core/reset.css'
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'
import { useFonts } from 'expo-font'
import { useEffect, useState } from 'react';
import { ToastProvider, ToastViewport } from "@tamagui/toast"
import { COLORS, STYLES } from './src/constants/theme';
import AuthRoutes from './src/routes/AuthStack';
import RootStacks from '~routes/RootStack';
import { SafeAreaView } from 'react-native-safe-area-context';

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config)

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded])

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={STYLES.container}>
      <TamaguiProvider config={tamaguiConfig}>
        <StatusBar style='light' backgroundColor={COLORS.appSecondary} />
        {
          isAuthenticated ?
            <RootStacks />
            :
            <AuthRoutes />
        }
      </TamaguiProvider>
    </SafeAreaView>
  );
}
