import React, {useState, useEffect} from 'react';
import {View, FlatList, Text, Image, Modal} from 'react-native';
import styles from './styles';
import Loader from '../../components/loader/Loader';

const GetDataScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl =
    'http://13.235.150.18:4006/v1/hairingPartner/get_All_HairingPartner';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } else {
        console.error('api response error', response.status);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('api error ', error.message);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {data.length === 0 ? (
        <Loader />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.data.adminhairingPartner}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
          renderItem={({item}) => (
            <View style={styles.listContainer}>
              <View style={styles.listInnerContainer}>
                <Image style={styles.logoStyle} source={{uri: item.logo}} />
                <View style={styles.userInfoContainer}>
                  <Text style={styles.titleNameStyle}>
                    {item.name.length > 40
                      ? `${item.name.substring(0, 30)} ......`
                      : item.name}
                  </Text>
                  <Text>
                    {item.email.length > 40
                      ? `${item.email.substring(0, 30)} ......`
                      : item.email}
                  </Text>
                  <View style={styles.courseContainer}>
                    <Text style={styles.titleCourseName}>Course Name </Text>
                    <FlatList
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      data={item.course}
                      keyExtractor={courseItem => courseItem._id.toString()}
                      renderItem={({item: courseItem}) => (
                        <View key={courseItem._id}>
                          <Text>
                            {courseItem.name.length > 100
                              ? `${courseItem.name.substring(0, 100)} ...`
                              : courseItem.name}{' '}
                          </Text>
                        </View>
                      )}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default GetDataScreen;
