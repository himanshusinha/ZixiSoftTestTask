import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import styles from './styles';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      const routeName = user !== null ? 'UploadScreen' : 'LoginScreen';
      navigation.replace(routeName);
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Test Task</Text>
    </View>
  );
};

export default SplashScreen;
