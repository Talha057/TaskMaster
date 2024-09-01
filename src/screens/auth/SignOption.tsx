import {SafeAreaView} from 'react-native';
import React from 'react';
import {globalStyle} from '../../assets/style';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import SignOptionIntro from '../../components/SignOption/SignOptionIntro';
import SignCard from '../../components/SignOption/SignCard';
import {adminBg, memberBg} from '../../assets/images';

interface SignOptionProps {
  navigation: any;
  route: any;
}

const SignOption: React.FC<SignOptionProps> = ({navigation, route}) => {
  const {screen} = route.params;
  return (
    <SafeAreaView style={globalStyle.container}>
      <SignOptionIntro
        subText="Join your team and manage tasks efficiently. Whether you're an admin assigning tasks or a member completing them, let's get started."
        title={`${screen} as a!`}
      />
      <SignCard
        background={adminBg}
        text1="Are you an Admin?"
        text2={`${screen} here...`}
        onPress={() => navigation.navigate(`${screen}`, {role: 'Admin'})}
      />
      <SignCard
        background={memberBg}
        text1="Are you a Member?"
        text2={`${screen} here...`}
        onPress={() => navigation.navigate(`${screen}`, {role: 'Member'})}
      />
    </SafeAreaView>
  );
};

export default SignOption;
