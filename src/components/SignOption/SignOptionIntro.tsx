import {
  View,
  Text,
  ImageBackground,
  ViewStyle,
  StyleSheet,
  ImageStyle,
  TextProps,
  TextStyle,
} from 'react-native';
import React from 'react';
import {signOptionBg} from '../../assets/images';
import {height, width} from '../../utilities';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface Styles {
  wrapper: ViewStyle;
  background: ImageStyle;
  backBtn: ViewStyle;
  logo: ImageStyle;
  textWrapper: ViewStyle;
  title: TextStyle;
  subText: TextStyle;
}

interface CustomTextProps extends TextProps {
  title: string;
  subText: string;
}

const SignOptionIntro: React.FC<CustomTextProps> = ({title, subText}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.wrapper}>
      <ImageBackground style={styles.background} source={signOptionBg}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignOptionIntro;

const styles = StyleSheet.create<Styles>({
  wrapper: {
    width: width,
    marginTop: height * 0.05,
    height: height * 0.38,
  },
  background: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backBtn: {
    marginTop: width * 0.05,
    marginLeft: width * 0.04,
  },
  logo: {
    alignSelf: 'center',
    marginTop: width * 0.15,
  },
  textWrapper: {
    marginLeft: width * 0.03,
    marginTop: width * 0.04,
  },
  title: {
    fontSize: 25,
    color: '#496FC6',
    fontFamily: 'outfit',
    fontWeight: '700',
  },
  subText: {
    marginTop: width * 0.03,
    color: '#5A5A5A',
    fontSize: 18,
    textShadowColor: '#000',
    textShadowOffset: {width: 0.1, height: 0.1},
    fontFamily: 'Poppins-Regular',
  },
});
