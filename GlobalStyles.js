
import { StyleSheet } from "react-native";
import { ThemeColors } from "./src/constants/Colors";
import { fontFamilyGroup } from "./src/constants/fontFamilyConstant/FontFamilyConstant";

export const GlobalStyles = StyleSheet.create({
    safeAreaViewStyle: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexGrow1: {
        flexGrow: 1
    },
    font12: {
        fontSize: 12,
    },
    font14: {
        fontSize: 14,
    },


    // for Auth screen/input fileds Global styles
    label: {
        fontFamily: fontFamilyGroup.boldFont500,
        fontSize: 14,
        color: "#717171",
        color: ThemeColors.normalTextColor,
        marginBottom: 8,
    },
    astric: {
        color: ThemeColors.requiredTextColor,
        marginLeft: 2,
    },
    hintText: {
        color: ThemeColors.normalTextColor,
        fontFamily: fontFamilyGroup.regulerFont,
        textAlign: 'left',
        fontSize: 12,
        paddingHorizontal: 10,
    },
    inputError: {
        color: ThemeColors.requiredTextColor,
        fontSize: 12,
        paddingTop: 5,
    },
    signUpText1: {
        fontSize: 14,
        color: ThemeColors.normalTextColor,
        fontFamily: fontFamilyGroup.boldFont500
    },
    signUpText2: {
        fontSize: 14,
        color: ThemeColors.purple,
        fontFamily: fontFamilyGroup.boldFont600
    },

    cardWrapper: {
        // flex: 1,
        minHeight:100,
        display: 'flex',
        width: '100%',
        padding: 16.247,
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 12.185,
        elevation: 8, // Android shadow
        shadowColor: 'black', // iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
})