import { StatusBar } from 'expo-status-bar';
import '@tamagui/core/reset.css'
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'
import { useFonts } from 'expo-font'
import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';
import { COLORS, STYLES } from './src/constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import AuthNavigator from '~components/auth/AuthNavigator';

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config)

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  const flashMessage = useRef();

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded])

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={STYLES.container}>
          <TamaguiProvider config={tamaguiConfig}>
            <StatusBar style='light' backgroundColor={COLORS.appSecondary} />
            <AuthNavigator />
          </TamaguiProvider>
          <FlashMessage
            ref={flashMessage}
            floating={true}
            position="top"
            statusBarHeight={40}
          />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}
