import {
  Text,
  ViewStyle,
  StyleSheet,
  TextStyle,
  Pressable,
  PressableProps,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {width} from '../utilities';

interface ButtonStyle {
  btnWrapper: ViewStyle;
  btnText: TextStyle;
}
interface CustomPressableProps extends PressableProps {
  backgroundColor?: string;
  border?: string;
  text: string;
  color: string;
  height?: any;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button: React.FC<CustomPressableProps> = ({
  backgroundColor,
  text,
  color,
  border,
  height,
  loading,
  disabled,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={loading || disabled}
      style={[
        styles.btnWrapper,
        {
          backgroundColor: backgroundColor || 'transparent',
          borderColor: border || 'transparent',
          borderWidth: border ? 1 : 0,
          height: height || width * 0.14,
        },
      ]}>
      {loading ? (
        <ActivityIndicator size={25} color={'white'} />
      ) : (
        <Text
          style={[
            styles.btnText,
            {
              color: color || '#fff',
            },
          ]}>
          {text}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create<ButtonStyle>({
  btnWrapper: {
    width: width * 0.9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  btnText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});
