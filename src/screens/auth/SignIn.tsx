import {
  View,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
  Switch,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {globalStyle} from '../../assets/style';
import {onboardingBg, signOptionBg} from '../../assets/images';
import {signinStyle} from '../../assets/style/signinStyle';
import Button from '../../components/Button';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import {signupStyle} from '../../assets/style/signUpStyles';
import UserModal from '../../components/Modal';
import {height, width} from '../../utilities';
import auth from '@react-native-firebase/auth';

interface SignScreenProps {
  navigation: NavigationProp<ParamListBase>;
  route: any;
}
interface FormData {
  email: string;
  password: string;
}
const Signin: React.FC<SignScreenProps> = ({navigation, route}) => {
  const {role} = route.params;
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [errorMsg, setErrorMsg] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({mode: 'all'});
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [enable, setEnabled] = useState<boolean>(true);
  const toggleSwitch = (): void => setEnabled(prevState => !prevState);

  const handleSignin = async (data: FormData) => {
    const {email, password} = data;
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Success', 'Login Successfully');

      // AsyncStorage.setItem(
      //   "signinToken",
      //   JSON.stringify(resultAction.accessToken)
      // );
      // AsyncStorage.setItem("role", JSON.stringify(role));
    } catch (err: any) {
      const message = err.message.split(' ').slice(1).join(' ');
      setModalVisible(true);
      setErrorMsg(message);
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView
      style={globalStyle.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={globalStyle.container}
        showsVerticalScrollIndicator={false}>
        <View style={globalStyle.container}>
          <ImageBackground
            style={signinStyle.imageWrapper}
            source={signOptionBg}>
            <View style={signinStyle.textWrapper}>
              <Text style={signinStyle.title}>Sign In As {role}</Text>
              <Text style={signinStyle.note}>
                Enter Your Credentials To Sign In
                {'\n'}To Your Account
              </Text>
            </View>
          </ImageBackground>
          <View style={[signinStyle.formWrapper]}>
            <View>
              <Text style={globalStyle.label}>
                Email Address
                <Text style={globalStyle.required}>*</Text>
              </Text>
              <View style={globalStyle.inputView}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({field}) => {
                    return (
                      <TextInput
                        placeholderTextColor="#000"
                        placeholder="Enter Email Address"
                        style={globalStyle.input}
                        keyboardType="email-address"
                        value={field.value}
                        onChangeText={field.onChange}
                      />
                    );
                  }}
                  rules={{
                    required: '*Email is required',
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: '*Enter a valid email',
                    },
                  }}
                />
              </View>
              {errors.email && (
                <Text style={signupStyle.validationText}>
                  {errors.email.message}
                </Text>
              )}
            </View>
            <View>
              <Text style={globalStyle.label}>
                Password
                <Text style={globalStyle.required}>*</Text>
              </Text>
              <View style={globalStyle.inputView}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({field}) => (
                    <TextInput
                      placeholderTextColor="#000"
                      placeholder="Enter Password"
                      style={globalStyle.input}
                      secureTextEntry={showPassword}
                      value={field.value}
                      onChangeText={field.onChange}
                    />
                  )}
                  rules={{
                    required: '*Password is required',
                  }}
                />
              </View>
            </View>
            {errors.password && (
              <Text style={signupStyle.validationText}>
                {errors.password.message}
              </Text>
            )}
          </View>
          <View style={signinStyle.signinBtn}>
            <Button
              onPress={handleSubmit(handleSignin)}
              backgroundColor="#55A9F5"
              text="Sign in"
              loading={loading}
              color="#fff"
            />
            <View style={signinStyle.orWrapper}>
              <View style={signinStyle.line} />
              <Text style={signinStyle.or}>OR</Text>
              <View style={signinStyle.line}></View>
            </View>
            <View>
              <Pressable
                onPress={() => navigation.navigate('SignUp', {role: role})}>
                <Text style={signinStyle.authNote}>
                  Don't Have An Account?{' '}
                  <Text style={signinStyle.authInner}>Sign Up</Text>
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <UserModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          message={errorMsg}
          btnText="Ok"
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signin;
