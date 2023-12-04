import {Alert, Modal, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import AppButton from '../../components/button/AppButton';
import InputField from '../../components/input/InputField';
import images from '../../constants/images';
import colors from '../../constants/colors';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../components/loader/Loader';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const validation = () => {
    if (email == '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
      if (password == '') {
        setBadPassword(true);
      } else {
        setTimeout(() => {
          setBadPassword(false);
          signUp();
        }, 2000);
      }
    }
  };
  const signUp = () => {
    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Signup successfully !!!');
        setIsLoading(false);
      })
      .catch(error => {
        let errorMessage = 'An error occurred';

        if (error.code === 'auth/email-already-in-use') {
          errorMessage = 'That email address is already in use!';
          setIsLoading(false);
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = 'Invalid email address';
          setIsLoading(false);
        }
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Modal>
          <Loader />
        </Modal>
      ) : null}
      <View style={styles.inputContainer}>
        <InputField
          leftIcon={images.email}
          value={email}
          onChangeText={e => setEmail(e)}
          placeholder={'Enter your email'}
          placeholderTextColor={colors.BLACK}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
        {badEmail === true && (
          <Text style={styles.errorText}>Please Enter Email</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <InputField
          leftIcon={images.lock}
          rightIcon={images.hide}
          value={password}
          onChangeText={e => setPassword(e)}
          placeholder={'Enter your password'}
          placeholderTextColor={colors.BLACK}
          autoCapitalize={'none'}
          autoCorrect={false}
          secureTextEntry={true}
        />
        {badPassword === true && (
          <Text style={styles.errorText}>Please Enter Password</Text>
        )}
      </View>
      <View style={styles.signUpBtnStyle}>
        <AppButton
          onPress={validation}
          title={'Sign Up'}
          titleStyle={styles.titleStyle}
          style={styles.buttonStyle}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.titleDont}>Already have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.titleSignUp}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;
