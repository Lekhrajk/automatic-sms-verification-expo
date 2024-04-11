import React from 'react'
import { H3, View } from 'tamagui'
import { STYLES } from '~constants/theme'

const HomeScreen = () => {
    return (
        <View flex={1}>
            <View style={STYLES.contentContainer}>
                <H3>Analytics Screen</H3>
            </View>
        </View>
    )
}

export default HomeScreen

