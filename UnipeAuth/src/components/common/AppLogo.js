import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { logo } from '~constants/images'

const AppLogo = () => {
    return (
        <View style={styles.logoContainer}>
            <Image source={logo} resizeMode="contain" style={styles.logo} />
        </View>
    )
}

export default AppLogo

const styles = StyleSheet.create({
    logoContainer: {
        alignContent: 'center',
        alignSelf: "center"
    },
    logo: {
        width: 200,
        height: 100
    }
})