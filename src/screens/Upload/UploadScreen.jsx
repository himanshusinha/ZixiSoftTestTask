import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import InputField from '../../components/input/InputField';
import AppButton from '../../components/button/AppButton';
import {course} from '../../constants/list';
import {moderateScale} from '../../styles/responsiveSize';
import images from '../../constants/images';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import routes from '../../constants/routes';
import Loader from '../../components/loader/Loader';

const UploadScreen = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState(course);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageName, setSelectedImageName] = useState('');
  const [selectedObject, setSelectedObject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl =
    'http://13.235.150.18:4006/v1/hairingPartner/add_HairingPartner';
  const navigation = useNavigation();

  const logOut = async () => {
    try {
      await auth().signOut();
      navigation.dispatch(StackActions.popToTop());
    } catch (error) {
      Alert.alert(error);
    }
  };

  const onSelect = index => {
    const tempData = data.map((item, i) => {
      if (i === index) {
        setSelectedObject(item);
        return {...item, selected: !item.selected};
      } else {
        return item;
      }
    });
    setData(tempData);
  };

  const openImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        includeBase64: true,
        compressImageQuality: 0.8,
      });

      const lastPathSegment = image.path ? image.path.split('/').pop() : null;

      const imageData = image.data
        ? `data:${image.mime};base64,${image.data}`
        : null;

      setSelectedImage(imageData);
      setSelectedImageName(lastPathSegment);
    } catch (error) {}
  };

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      if (!selectedImage || !selectedImageName || !name || !selectedObject) {
        Alert.alert('Please fill in all required fields');
        return;
      }

      const formData = new FormData();
      formData.append('file', {
        uri: selectedImage,
        type: 'image/jpeg',
        name: 'profile_image.jpg',
      });
      formData.append('name', name);

      const selectedCourses = data
        .filter(item => item.selected)
        .map(item => ({id: item.id, name: item.name}));

      formData.append('course', JSON.stringify(selectedCourses));

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setIsLoading(false);
        navigation.navigate(routes.GET_DATA_SCREEN);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.error('api error ', error.message);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Modal>
          <Loader />
        </Modal>
      ) : null}
      <TouchableOpacity
        style={styles.logOutContainer}
        onPress={() => {
          logOut();
        }}>
        <Image source={images.logout} style={styles.logOut} />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <InputField
          leftIcon={images.email}
          value={name}
          onChangeText={e => setName(e)}
          placeholder={'Enter your name'}
          placeholderTextColor={'black'}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
      </View>
      <View style={styles.uploadBtnStyle}>
        <AppButton
          onPress={() => {
            openImagePicker();
          }}
          title={'Choose Image'}
          titleStyle={styles.titleStyle}
          style={styles.buttonStyle}
        />
      </View>
      <View style={styles.listContainer}>
        {selectedImage && <Text>Selected Image: {selectedImageName}</Text>}
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => onSelect(index)}
              style={{
                borderWidth: 0.5,
                borderColor: item.selected ? 'green' : 'black',
                marginVertical: 20,
                padding: moderateScale(10),
                borderRadius: moderateScale(10),
              }}>
              <Text style={{color: item.selected ? 'black' : 'black'}}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.uploadBtnStyle}>
        <AppButton
          onPress={() => {
            onSubmit();
          }}
          title={'Submit'}
          titleStyle={styles.titleStyle}
          style={styles.buttonStyle}
        />
      </View>
    </View>
  );
};

export default UploadScreen;
