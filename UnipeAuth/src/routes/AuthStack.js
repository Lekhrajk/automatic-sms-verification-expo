import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '~screens/auth/RegisterScreen';
import ForgotPasswordScreen from '~screens/auth/ForgotPasswordScreen';
import VerifyOTPScreen from '~screens/auth/VerifyOTPScreen';
// import RegisterScreen from '~screens/auth/RegisterScreen';


const AuthStack = createNativeStackNavigator();

const AuthStacks = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="RegisterScreen"
            >
                <AuthStack.Group
                    screenOptions={{
                        presentation: 'modal',
                        animationDuration: 700,
                        animationTypeForReplace: "pop",
                        animation: 'slide_from_bottom'
                    }}
                >
                    <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
                    <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
                    <AuthStack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
                    <AuthStack.Screen name="VerifyOTPScreen" component={VerifyOTPScreen} />
                    {/* 
                    <AuthStack.Screen name="VerifyAccountScreen" component={VerifyAccountScreen} />
                    <AuthStack.Screen name="ResetPassScreen" component={ResetPassScreen} /> */}
                </AuthStack.Group>
            </AuthStack.Navigator>
        </NavigationContainer>
    );
}

export default AuthStacks