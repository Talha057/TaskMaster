import { ImageBackgroundProps, ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { height, width } from "../../utilities";

interface Onboarding {
    imageBg: ImageStyle,
    bannerWrapper: ViewStyle,
    bannerWrapperTwo: ViewStyle,
    banner: ImageStyle,
    bannerTwo: ImageStyle,
    seconndWrapper: ViewStyle,
    onboardText: TextStyle,
    onboardThirdText: TextStyle,
    onboardInnerText: TextStyle,
    skipBtnText: TextStyle
}

export const onboardingStyle = StyleSheet.create<Onboarding>({
    imageBg: {
        flex: 0.4,
    },
    bannerWrapper:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        top: height*0.14,
        left: width * 0.05
    },
    bannerWrapperTwo:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        top: height*0.1,
    },
    banner: {
        width: width,
        height: width * 0.75,
        resizeMode: 'contain'
    },
    bannerTwo: {
        width: width,
        height: width,
    },
    seconndWrapper: {
        top: height * 0.15,
        flex: 0.4,
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    onboardText: {
        fontSize: 23,
        textAlign: 'center',
        color: '#333333',
        fontFamily: 'outfit',
        fontWeight: '700'
    },
    onboardThirdText: {
        fontSize: 26,
        textAlign: 'center',
        color: '#333333',
        fontFamily: 'outfit',
        fontWeight: '700'
    },
    onboardInnerText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666666',
        fontFamily: 'Poppins-Regular'
    },
    skipBtnText: {
        fontFamily: 'Poppins-Regular',
        color: '#999999',
        fontWeight: '600',
        fontSize: 16
    }
})