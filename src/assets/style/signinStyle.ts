import {ImageStyle, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {height, width} from '../../utilities';

interface SigninStyle {
  imageWrapper: ViewStyle;
  logo: ImageStyle;
  textWrapper: ViewStyle;
  title: TextStyle;
  note: TextStyle;
  formWrapper: ViewStyle;
  toggleSwitchView: ViewStyle;
  secondWrapper: ViewStyle;
  rememberMe: TextStyle;
  forgotPass: TextStyle;
  btnWrapper: ViewStyle;
  orWrapper: ViewStyle;
  line: ViewStyle;
  or: TextStyle;
  socialIconWrapper: ViewStyle;
  authNote: TextStyle;
  authInner: TextStyle;
  signinBtn: ViewStyle;
}

export const signinStyle = StyleSheet.create<SigninStyle>({
  imageWrapper: {
    marginTop: height * 0.03,
    width: width,
    height: height * 0.4,
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
  },
  logo: {
    alignSelf: 'center',
  },
  textWrapper: {
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontFamily: 'outfit',
    fontWeight: '700',
    fontSize: 25,
    color: '#000000',
    textTransform: 'capitalize',
  },
  note: {
    color: '#5A5A5A',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 15,
  },
  formWrapper: {
    width: width * 0.9,
    alignSelf: 'center',
    gap: width * 0.03,
  },
  toggleSwitchView: {
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: width * 0.02,
  },
  rememberMe: {
    color: '#999999',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  forgotPass: {
    color: '#000000',
    textDecorationLine: 'underline',
  },
  btnWrapper: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#D1D2D8',
    width: width * 0.9,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: width * 0.01,
    gap: width * 0.02,
    // paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
  },
  orWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: width * 0.3,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#CCCCCC',
  },
  or: {
    color: '#666666',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  socialIconWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: width * 0.1,
  },
  authNote: {
    fontFamily: 'Poppins-Regular',
    color: '#384D8A',
    fontSize: 12,
    fontWeight: '800',
  },
  authInner: {
    color: '#5BD7E3',
  },
  signinBtn: {
    flex: 1,
    width: width * 0.9,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: width * 0.1,
    gap: width * 0.02,
  },
});
