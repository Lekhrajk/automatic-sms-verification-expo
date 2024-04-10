import { ScrollView } from 'react-native'
import React from 'react'
import { View, Text, YStack, H3 } from "tamagui";
import AppLogo from '~components/common/AppLogo';
import { COLORS, STYLES } from '~constants/theme';

const AuthWrapper = (props) => {
    const { title, message, children } = props;
    return (
        <View flex={1} backgroundColor={COLORS.white}>
            <View paddingTop={20} paddingBottom={10}>
                <AppLogo />
            </View>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={STYLES.contentContainer}>
                    <YStack
                        gap={5}
                    >
                        <H3>{title}</H3>
                        <Text color={COLORS.appGray}>{message}</Text>
                    </YStack>
                    <View marginVertical={30}>
                        {children}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default AuthWrapper