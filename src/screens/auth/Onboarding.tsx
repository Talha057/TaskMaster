import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {globalStyle} from '../../assets/style';
import {onboardingBg} from '../../assets/images';
import {onboardingStyle} from '../../assets/style/onboarding';
import Button from '../../components/Button';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface OnboardingScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const Onboarding: React.FC<OnboardingScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={globalStyle.container}>
      <ImageBackground
        style={onboardingStyle.imageBg}
        source={onboardingBg}></ImageBackground>
      <View style={onboardingStyle.seconndWrapper}>
        <Text style={onboardingStyle.onboardThirdText}>
          Welcome to TaskMaster
        </Text>
        <Text style={onboardingStyle.onboardInnerText}>
          "Organize Your Day, {'\n'}Achieve Your Goals"
        </Text>

        <Button
          text="Create My Account"
          backgroundColor="#55A9F5"
          color="#fff"
          onPress={() => navigation.navigate('SignOption', {screen: 'SignUp'})}
        />
        <Button
          onPress={() => navigation.navigate('SignOption', {screen: 'SignIn'})}
          text="I Have An Account"
          color="#5891FF"
          border="#5891FF"
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
