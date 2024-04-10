import { Pressable } from 'react-native'
import { View, Text } from 'tamagui';
import React from 'react'
import { COLORS, SIZES } from '~constants/theme';
import { useNavigation } from '@react-navigation/native';

const RedirectMessage = (props) => {
    const { message, link, linkText } = props;
    const navigation = useNavigation();
    
    return (
        <View flexDirection="row" flexWrap="wrap" alignItems="center">
            <Text fontSize={SIZES.smd}>{message}{" "}</Text>
            <Pressable
                onPress={() => navigation.navigate(link)}
            >
                <Text
                    color={COLORS.appPrimary}
                    fontSize={SIZES.smd}
                    textDecorationLine="underline"
                >
                    {linkText}
                </Text>
            </Pressable>
        </View>
    )
}

export default RedirectMessage
