import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { ThemeColors } from "../constants/Colors";
import { fontFamilyGroup } from "../constants/fontFamilyConstant/FontFamilyConstant";

export const OverlayLoader = ({ text }) => {
    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={ThemeColors.purple} />
            {text &&
                <Text style={[styles.textStyle]}>
                    {text}
                </Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    // loaderContainer: {
    //     flex: 1,
    //     justifyContent: 'center',
    // }
    loaderContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(100, 100, 100, 0.3)",
        zIndex:99999,
    },
    textStyle: {
        fontFamily: fontFamilyGroup.boldFont500,
        fontSize: 12,
        color: ThemeColors.purple,

    },
})