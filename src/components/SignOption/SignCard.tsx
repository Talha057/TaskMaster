import {
  View,
  Text,
  ImageBackground,
  Image,
  ImageStyle,
  StyleSheet,
  ViewStyle,
  Pressable,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {height, width} from '../../utilities';

interface Styles {
  wrapper: ViewStyle;
  imageWrapper: ImageStyle;
  image: ImageStyle;
  text: TextStyle;
}

interface SignCardTypes {
  background: ImageSourcePropType;
  text1: string;
  text2: string;
  onPress?: () => void;
}

const SignCard: React.FC<SignCardTypes> = ({
  background,
  text1,
  text2,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageWrapper}
        imageStyle={{borderRadius: 20}}
        source={background}>
        <Text style={styles.text}>{text1}</Text>
        <Text style={styles.text}>{text2}</Text>
      </ImageBackground>
    </Pressable>
  );
};

export default SignCard;

const styles = StyleSheet.create<Styles>({
  wrapper: {
    width: width * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: width * 0.02,
  },
  imageWrapper: {
    width: width * 0.9,
    height: height * 0.2,
    alignSelf: 'center',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
  },
  image: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  text: {
    color: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    lineHeight: 30,
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
});
