import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './MainStack';

const RootStack = createNativeStackNavigator();


const RootStacks = () => (
    <NavigationContainer>
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
                animationDuration: 700,
                animationTypeForReplace: "push",
                animation: 'slide_from_right'
            }}
            initialRouteName="Main"
        >
            <RootStack.Screen name="Main" component={MainStack} />

            {/* Webview */}
            {/* <RootStack.Screen name="WebviewScreen" component={WebviewScreen} /> */}

        </RootStack.Navigator>
    </NavigationContainer>
);

export default RootStacks