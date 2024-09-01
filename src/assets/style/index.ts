import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {height, width} from '../../utilities';

interface GlobalStyle {
  container: ViewStyle;
  label: TextStyle;
  required: TextStyle;
  inputView: ViewStyle;
  messageView: ViewStyle;
  input: TextStyle;
  bold: TextStyle;
}

export const globalStyle = StyleSheet.create<GlobalStyle>({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
  },
  required: {
    color: 'red',
  },
  inputView: {
    width: '100%',
    backgroundColor: 'rgba(233,233,233,0.3)',
    height: width * 0.15,
    marginTop: width * 0.03,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 30,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
  messageView: {
    width: '100%',
    backgroundColor: 'rgba(233,233,233,0.3)',
    height: width * 0.3,
    marginTop: width * 0.03,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 30,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
  },
  input: {
    height: '100%',
    width: width * 0.6,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'black',
  },
  bold: {
    fontWeight: '900',
  },
});
