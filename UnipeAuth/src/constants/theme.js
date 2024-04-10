import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export const COLORS = {
    white: '#FFFFFF',
    black: '#000000',
    gray: '#7c7c7c',
    red: '#FF0000',
    green: '#808000',
    blue: '#7140FF',
    lightGray: "#d7d7d7",
    appPrimary: '#2cb87d',
    appSecondary: '#020321',
    appYellow: '#DFFE00',
    appGray: '#8593A3',
    appTransparent: '#FFFFFF00'
}

export const SIZES = {
    WIDTH: width,
    HEIGHT: height,
    sxs: 10,
    ssm: 12,
    smd: 14,
    snm: 16,
    slg: 18,
    sxl: 20,
    sxxl: 22,
    s3xl: 26,
}

export const RADIUS = {
    rxs: 2,
    rsm: 4,
    rmd: 6,
    rnm: 8,
    rlg: 10,
    rxl: 12,
    rxxl: 14,
    r3xl: 16,
    r4xl: 18,
    r5xl: 20,
    r6xl: 22,
    r7xl: 26,
    r8xl: 30,
    r9xl: 50
}


export const STYLES = {
    // Layout styles
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: SIZES.sxl,
        marginVertical: SIZES.smd
    },
}

const appTheme = { COLORS, SIZES, RADIUS, STYLES };
export default appTheme;