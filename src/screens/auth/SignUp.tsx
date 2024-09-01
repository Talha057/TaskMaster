import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {onboardingBg} from '../../assets/images';
import {globalStyle} from '../../assets/style';
import {signupStyle} from '../../assets/style/signUpStyles';
import Feather from 'react-native-vector-icons/Feather';
import {width, height} from '../../utilities';
import {signinStyle} from '../../assets/style/signinStyle';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
// import UserModal from "../../components/Modal";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldErrors,
  FieldValues,
} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import UserModal from '../../components/Modal';
// import { AppDispatch } from "../../store";
// import { signupDoctor, uploadImage } from "../../store/user/thunk";
interface SignScreenProps {
  navigation: NavigationProp<ParamListBase>;
  route: any;
}
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC<SignScreenProps> = ({navigation, route}) => {
  const {
    control,
    handleSubmit,
    trigger,
    setValue,
    watch,
    formState: {errors},
  } = useForm<FormValues>({mode: 'all'});
  const [password, setPassword] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [image, setImage] = useState<any>();
  const [loading, setLoading] = useState(false);
  const {role} = route.params;

  const onSubmit = async (data: FormValues): Promise<void> => {
    setLoading(true);
    console.log(data);
    const {email, password} = data;
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      navigation.navigate('SignIn', {role: role});
    } catch (error: any) {
      const message = error.message.split(' ').slice(1).join(' ');
      setModalVisible(true);
      setErrorMsg(message);
    }
    setLoading(false);
  };
  const watchedPassword = watch('password');

  useEffect(() => {
    if (watchedPassword) {
      trigger('confirmPassword');
    }
  }, [watchedPassword]);
  return (
    <KeyboardAvoidingView
      style={globalStyle.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={[globalStyle.container, {marginBottom: height * 0.1}]}>
        <ImageBackground
          style={signupStyle.imageWrapper}
          source={onboardingBg}></ImageBackground>
        <Text style={signupStyle.title}>Sign up as a {role}</Text>
        <View style={signupStyle.formWrapper}>
          <Controller
            name="firstName"
            control={control}
            render={({field}) => (
              <TextInput
                style={signupStyle.input}
                placeholder="Enter First Name*"
                placeholderTextColor="#999999"
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
            rules={{
              required: '*First Name is required',
              minLength: {
                value: 2,
                message: 'First Name must be longer than 2 characters',
              },
            }}
          />
          {errors.firstName && (
            <Text style={signupStyle.validationText}>
              {errors.firstName.message}
            </Text>
          )}

          <Controller
            name="lastName"
            control={control}
            render={({field}) => (
              <TextInput
                style={signupStyle.input}
                placeholder="Enter Last Name*"
                placeholderTextColor="#999999"
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
            rules={{
              required: '*Last Name is required',
              minLength: {
                value: 2,
                message: 'Last Name must be longer than 2 characters',
              },
            }}
          />
          {errors.lastName && (
            <Text style={signupStyle.validationText}>
              {errors.lastName.message}
            </Text>
          )}

          <Controller
            name="email"
            control={control}
            render={({field}) => (
              <TextInput
                style={signupStyle.input}
                placeholder="Enter Email address*"
                placeholderTextColor="#999999"
                onChangeText={field.onChange}
                value={field.value}
                keyboardType="email-address"
              />
            )}
            rules={{
              required: '*Email address is required',
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: '*Enter a valid Email',
              },
            }}
          />
          {errors.email && (
            <Text style={signupStyle.validationText}>
              {errors.email.message}
            </Text>
          )}

          <View style={{position: 'relative'}}>
            <Controller
              name="password"
              control={control}
              render={({field}) => (
                <TextInput
                  style={signupStyle.input}
                  placeholder="Enter Password*"
                  placeholderTextColor="#999999"
                  onChangeText={val => {
                    field.onChange(val);
                    setPassword(val);
                  }}
                  secureTextEntry={true}
                  value={field.value}
                />
              )}
              rules={{
                required: '*Password is required',
                minLength: {
                  value: 8,
                  message: 'Password too short (minimum length is 8)',
                },
                maxLength: {
                  value: 32,
                  message: 'Password too long (maximum length is 32)',
                },
                pattern: {
                  value:
                    /^((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                  message: 'Password is too weak',
                },
              }}
            />
          </View>
          {errors.password && (
            <Text style={signupStyle.validationText}>
              {errors.password.message}
            </Text>
          )}
          <View style={{position: 'relative'}}>
            <Controller
              name="confirmPassword"
              control={control}
              render={({field}) => (
                <TextInput
                  style={signupStyle.input}
                  placeholder="Re-Enter Password*"
                  placeholderTextColor="#999999"
                  onChangeText={field.onChange}
                  secureTextEntry={true}
                  value={field.value}
                />
              )}
              rules={{
                required: '*Password is required',
                validate: (val: string) => {
                  return val === password || 'Passwords do not match';
                },
              }}
            />
          </View>
          {errors.confirmPassword && (
            <Text style={signupStyle.validationText}>
              {errors.confirmPassword.message}
            </Text>
          )}
        </View>

        <UserModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          message={errorMsg}
          btnText="Ok"
        />
      </ScrollView>
      <View style={signinStyle.btnWrapper}>
        <View style={signupStyle.nextWrapper}>
          <Pressable
            onPress={() => navigation.navigate('SignIn', {role: role})}>
            <Text style={signinStyle.authNote}>
              Already a member?{' '}
              <Text style={signinStyle.authInner}>Sign In</Text>
            </Text>
          </Pressable>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            activeOpacity={0.6}
            style={signupStyle.nextBtn}
            disabled={loading}>
            {loading ? (
              <ActivityIndicator size={20} color={'white'} />
            ) : (
              <Text style={signupStyle.nextTxt}>Next</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
