import { Pressable, StyleSheet } from 'react-native'
import { View, Text } from 'tamagui';
import React from 'react'
import { COLORS, SIZES } from '~constants/theme'

const TncMessage = ({ navigation }) => {
    return (
        <View flexDirection="row" flexWrap="wrap" alignItems="center">
            <Text style={styles.textStyle}>*By signing up you agree to our{" "}</Text>
            <Pressable
                onPress={() => navigation.navigate("WebviewScreen",
                    { title: "Terms and Conditions", webURL: "https://www.portfoliloobuilder.com/" }
                )}
            >
                <Text style={styles.linkStyle}>Terms and Conditions</Text>
            </Pressable>
            <Text style={styles.textStyle}> and {" "}</Text>
            <Pressable
                onPress={() => navigation.navigate("WebviewScreen",
                    { title: "Privacy Policy", webURL: "https://www.portfoliloobuilder.com/" }
                )}
            >
                <Text style={styles.linkStyle}>Privacy policies</Text>
            </Pressable>
        </View>
    )
}

export default TncMessage

const styles = StyleSheet.create({
    linkStyle: {
        fontSize: SIZES.sxs,
        color: COLORS.blue
    },
    textStyle: {
        fontSize: SIZES.sxs
    }
})