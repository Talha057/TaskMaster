import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {height, width} from '../../utilities';

interface SignupStyle {
  imageWrapper: ViewStyle;
  profilePic: ImageStyle;
  profileUpload: ViewStyle;
  title: TextStyle;
  formWrapper: ViewStyle;
  input: TextStyle;
  nextWrapper: ViewStyle;
  customWrapper: ViewStyle;
  nextBtn: ViewStyle;
  nextTxt: TextStyle;
  uploadWrapper: ViewStyle;
  semiWrapper: ViewStyle;
  semiInput: TextStyle;
  providor: TextStyle;
  addMore: ViewStyle;
  btnText: TextStyle;
  validationText: TextStyle;
}

export const signupStyle = StyleSheet.create<SignupStyle>({
  imageWrapper: {
    width: width,
    height: width * 0.5,
    position: 'relative',
  },
  profilePic: {
    position: 'absolute',
    bottom: width * -0.1,
    right: width * 0.05,
    borderColor: '#55A9F5',
    borderWidth: 1,
    borderRadius: (width * 0.3) / 2,
  },
  profileUpload: {
    backgroundColor: '#55A9F5',
    width: width * 0.1,
    height: width * 0.1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (width * 0.1) / 2,
    bottom: 0,
    right: 0,
  },
  title: {
    marginTop: width * 0.1,
    fontSize: 22,
    marginLeft: width * 0.1,
    fontFamily: 'outfit',
    color: '#496FC6',
    fontWeight: '700',
  },
  formWrapper: {
    width: width * 0.9,
    alignSelf: 'center',
    gap: 10,
    marginTop: width * 0.05,
    paddingBottom: width * 0.05,
  },
  semiWrapper: {
    width: width * 0.9,
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 30,
    paddingHorizontal: '5%',
    marginVertical: '1%',
    color: '#000',
    height: width * 0.15,
  },
  semiInput: {
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 30,
    paddingHorizontal: '5%',
    marginVertical: '2%',
    width: width * 0.42,
    color: '#000',
    height: height * 0.06,
  },
  nextWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.9,
    alignItems: 'center',
    marginVertical: width * 0.05,
  },
  customWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: width * 0.9,
    alignItems: 'center',
    marginVertical: width * 0.02,
  },
  nextBtn: {
    width: width * 0.3,
    backgroundColor: '#55A9F5',
    height: width * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  nextTxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#fff',
  },
  uploadWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: width * 0.03,
    gap: 10,
  },
  providor: {
    color: '#384D8A',
    fontFamily: 'outfit',
    fontWeight: '700',
    fontSize: 17,
    marginVertical: width * 0.03,
  },
  addMore: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.9,
    height: width * 0.1,
    alignSelf: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#E1E4EB',
    borderRadius: 30,
    marginVertical: width * 0.05,
  },
  btnText: {
    fontFamily: 'Poppins-Medium',
    color: '#B9BCC5',
    fontSize: 12,
  },
  validationText: {
    fontSize: 13,
    color: '#FF0000',
    textAlign: 'left',
  },
});
