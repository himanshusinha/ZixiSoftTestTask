import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import WrapperContainer from '../../../components/wrapperContainer/WrapperContainer';
import images from '../../../constants/images';

import colors from '../../../constants/colors';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../../styles/responsiveSize';
import fontFamily from '../../../styles/fontFamily';
import styles from './styles';
import strings from '../../../constants/strings';
import {
  bannerData,
  biddingServicesData,
  categoriesData,
  categoriesInfoData,
  offersInfoData,
  servicesData,
  trendingServicesData,
} from '../../../constants/list';
const {height, width} = Dimensions.get('window');

const FirstScreen = () => {
  const [currentIndex, setCurrentIndex] = useState('');
  const flatListRef = useRef(null);
  const autoplayInterval = 3000;
  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;

      flatListRef.current.scrollToIndex({animated: true, index: nextIndex});
      setCurrentIndex(nextIndex);
    }, autoplayInterval);

    return () => clearInterval(autoplayTimer);
  }, [currentIndex, data]);
  const [data, setData] = useState(bannerData);
  const [offer, setOffer] = useState(offersInfoData);

  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryPress = index => {
    setSelectedCategory(index);
  };

  return (
    <WrapperContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, backgroundColor: colors.WHITE}}>
        <View style={styles.container}>
          <View
            style={{
              marginTop: moderateScaleVertical(10.5),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginHorizontal: moderateScale(16),
            }}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: colors.LIGHT_GREEN,
                borderRadius: moderateScale(14),
                padding: moderateScale(4),
                margin: moderateScale(10),
              }}>
              <Image
                style={{width: moderateScale(38), height: moderateScale(38)}}
                source={images.user_profile}
              />
            </View>
            <View style={{flex: 1, marginHorizontal: moderateScale(8)}}>
              <Text
                style={{
                  fontSize: scale(14),
                  fontFamily: fontFamily.INTER_SEMI_BOLD,
                  color: colors.DARK_GREEN,
                }}>
                {strings.USER_NAME}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: moderateScale(16),
                    height: moderateScale(16),
                  }}
                  source={images.location}
                />
                <Text
                  style={{
                    fontSize: scale(11),
                    fontFamily: fontFamily.INTER_REGULAR,
                    color: colors.BLACK_PRIMARY,
                    marginStart: moderateScale(4),
                  }}>
                  {strings.LOCATION}
                </Text>
              </View>
            </View>
            <Image
              style={{width: moderateScale(24), height: moderateScale(24)}}
              source={images.notification}
            />
          </View>
          <View style={{marginTop: moderateScale(11)}}>
            <FlatList
              ref={flatListRef}
              data={data}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              onScroll={e => {
                const x = e.nativeEvent.contentOffset.x;
                setCurrentIndex(Math.round(x / width));
              }}
              horizontal
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      width: width,
                      height: height / 3,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      disabled={true}
                      style={{
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bottom: moderateScaleVertical(20),
                      }}>
                      <ImageBackground
                        resizeMode="contain"
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                        source={item.bannerImage}>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'flex-end',
                            width: '100%',
                            height: '100%',
                          }}>
                          <Image
                            style={{
                              width: moderateScale(168),
                              height: moderateScale(176),
                              marginEnd: moderateScale(10),
                              bottom: moderateScale(8),
                            }}
                            source={images.family}
                          />
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
                bottom: moderateScaleVertical(20),
              }}>
              {data.map((item, index) => {
                return (
                  <View
                    key={item.id}
                    style={{
                      width: moderateScale(14),
                      height: moderateScale(5),
                      bottom: moderateScale(80),
                      borderRadius: moderateScale(5),
                      backgroundColor:
                        currentIndex === index
                          ? colors.RED
                          : colors.PRIMARY_WHITE,
                      marginLeft: 10,
                    }}
                  />
                );
              })}
            </View>
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  borderRadius: moderateScale(12),
                  height: moderateScale(46),
                  borderWidth: 1,
                  width: '90%',
                  backgroundColor: colors.WHITE,
                  borderColor: colors.PRIMARY_WHITE,
                  bottom: moderateScale(86),
                  alignItems: 'center',
                  paddingStart: moderateScale(16),
                }}>
                <Image
                  source={images.search}
                  style={{
                    width: moderateScale(20),
                    height: moderateScale(20),
                    tintColor: colors.SECONDARY_BLACK,
                  }}
                />
                <TextInput
                  style={{
                    alignSelf: 'center',
                    marginStart: moderateScale(10),
                    fontSize: moderateScale(12),
                  }}
                  placeholder="Search for services"
                  placeholderTextColor={colors.SECONDARY_WHITE}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: moderateScale(20),
                bottom: moderateScale(65),
              }}>
              <Text
                style={{
                  fontFamily: fontFamily.INTER_BLOD,
                  fontSize: scale(16),
                  color: colors.BLACK_SECONDARY,
                  lineHeight: moderateScale(19.2),
                }}>
                Categories
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: fontFamily.INTER_MEDIUM,
                    fontSize: scale(12),
                    color: colors.RED,
                    lineHeight: moderateScale(19.2),
                  }}>
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginHorizontal: moderateScale(20),
                bottom: moderateScale(52),
              }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categoriesData}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => handleCategoryPress(index)}
                      style={{
                        height: moderateScale(40),
                        marginHorizontal: moderateScale(12),
                        backgroundColor:
                          selectedCategory === index
                            ? colors.BLACK
                            : colors.WHITE_PRIMARY,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: moderateScale(8),
                      }}>
                      <Text
                        style={{
                          fontFamily: fontFamily.INTER_SEMI_BOLD,
                          fontSize: moderateScale(12),
                          color:
                            selectedCategory === index
                              ? colors.WHITE
                              : colors.BLACK,
                          marginHorizontal: moderateScale(12),
                        }}>
                        {item.categories}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>

            <View
              style={{
                marginHorizontal: moderateScale(20),
                bottom: moderateScale(28),
              }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categoriesInfoData}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity>
                      <Image
                        resizeMode="contain"
                        style={{
                          width: moderateScale(79),
                          height: moderateScale(79),
                          marginHorizontal: moderateScale(10),
                        }}
                        source={item.categoriesImages}
                      />
                    </TouchableOpacity>
                  );
                }}
              />
            </View>

            <View
              style={{
                bottom: moderateScale(60),
              }}>
              <FlatList
                ref={flatListRef}
                data={offer}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={e => {
                  const x = e.nativeEvent.contentOffset.x;
                  setCurrentIndex(Math.round(x / width));
                }}
                horizontal
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        width: width,
                        height: height / 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        disabled={true}
                        style={{
                          width: '100%',
                          height: '100%',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bottom: moderateScaleVertical(20),
                        }}>
                        <Image
                          resizeMode="contain"
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                          source={item.categoriesImages}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  width: width,
                  justifyContent: 'center',
                  alignItems: 'center',
                  bottom: moderateScaleVertical(10),
                }}>
                {offer.map((item, index) => {
                  return (
                    <View
                      key={item.id}
                      style={{
                        width: moderateScale(14),
                        height: moderateScale(5),
                        bottom: moderateScale(80),
                        borderRadius: moderateScale(5),
                        backgroundColor:
                          currentIndex === index
                            ? colors.RED
                            : colors.PRIMARY_WHITE,
                        marginLeft: 10,
                      }}
                    />
                  );
                })}
              </View>
              <View>
                <Text
                  style={{
                    bottom: moderateScale(75),
                    marginHorizontal: moderateScale(20),
                    fontSize: moderateScale(16),
                    fontFamily: fontFamily.INTER_BLOD,
                    color: colors.BLACK_SECONDARY,
                    lineHeight: moderateScale(19.2),
                  }}>
                  Top Bidding Services
                </Text>
              </View>
              <View
                style={{
                  bottom: moderateScale(60),
                  marginHorizontal: moderateScale(20),
                }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={biddingServicesData}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity activeOpacity={0.9}>
                        <Image
                          style={{
                            width: moderateScale(180),
                            height: moderateScale(150),
                            borderRadius: moderateScale(8),
                            marginHorizontal: moderateScale(8),
                          }}
                          source={item.biddingServices}
                        />
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <View
                style={{
                  bottom: moderateScale(40),
                  marginHorizontal: moderateScale(20),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontFamily: fontFamily.INTER_BLOD,
                    fontSize: moderateScale(16),
                    color: colors.BLACK_SECONDARY,
                  }}>
                  Newly Launched Services
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: fontFamily.INTER_MEDIUM,
                      fontSize: moderateScale(12),
                      color: colors.RED,
                    }}>
                    See All
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  bottom: moderateScale(30),
                  marginHorizontal: moderateScale(20),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMode="contain"
                    source={images.up}
                    style={{
                      width: moderateScale(24),
                      height: moderateScale(24),
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: fontFamily.INTER_SEMI_BOLD,
                      fontSize: moderateScale(12),
                      color: colors.DARK_GREEN,
                      marginStart: moderateScale(6),
                    }}>
                    449+ Bids were made recently!
                  </Text>
                </View>
              </View>
              <View
                style={{
                  bottom: moderateScale(15),
                  marginHorizontal: moderateScale(20),
                }}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={servicesData}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity activeOpacity={0.9}>
                        <Image
                          style={{
                            width: moderateScale(208),
                            height: moderateScale(70),
                            borderRadius: moderateScale(8),
                            marginHorizontal: moderateScale(8),
                          }}
                          source={item.services}
                        />
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
              <View style={{bottom: moderateScale(10)}}>
                <Image
                  resizeMode="contain"
                  source={images.banner3}
                  style={{
                    height: moderateScale(180),
                    width: '100%',
                  }}
                />
              </View>

              <View>
                <View
                  style={{
                    bottom: moderateScale(10),
                    marginHorizontal: moderateScale(20),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily.INTER_BLOD,
                      fontSize: moderateScale(16),
                      color: colors.BLACK_SECONDARY,
                    }}>
                    Trending Services
                  </Text>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: fontFamily.INTER_MEDIUM,
                        fontSize: moderateScale(12),
                        color: colors.RED,
                      }}>
                      See All
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <FlatList
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  data={trendingServicesData}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      activeOpacity={0.9}
                      style={styles.itemContainer}>
                      <Image
                        style={{
                          height: moderateScale(150),
                          width: moderateScale(180),
                          borderRadius: moderateScale(10),
                        }}
                        source={item.services}
                      />
                      <Text
                        style={{
                          fontFamily: fontFamily.INTER_BLOD,
                          fontSize: moderateScale(12),
                          color: colors.BLACK,
                          marginTop: moderateScale(8),
                        }}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  )}
                  columnWrapperStyle={styles.columnWrapper}
                />
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: moderateScale(11),
                }}>
                <Image
                  resizeMode="center"
                  style={{
                    height: moderateScale(200),
                    borderRadius: moderateScale(10),
                    alignSelf: 'center',
                  }}
                  source={images.corona}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: moderateScale(10),
          width: '100%',
          backgroundColor: 'transparent',
        }}>
        <Image
          resizeMode="contain"
          style={{
            width: moderateScale(80),
            height: moderateScale(80),
            marginTop: moderateScale(8),
          }}
          source={images.five}
        />
      </View>
      <ImageBackground
        source={images.curve}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          alignItems: 'center',
          backgroundColor: 'transparent', // Set the background color to transparent
        }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="contain"
            style={{
              width: moderateScale(32),
              height: moderateScale(32),
              marginTop: moderateScale(4),
              color: '#FF2850',
            }}
            source={images.nine}
          />
          <Text
            style={{
              fontFamily: fontFamily.INTER_BLOD,
              fontSize: scale(13),
              color: '#FF2850',
              lineHeight: moderateScale(19.2),
            }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginEnd: moderateScale(80),
          }}>
          <Image
            resizeMode="contain"
            style={{
              width: moderateScale(20),
              height: moderateScale(20),
              marginTop: moderateScale(8),
            }}
            source={images.eight}
          />
          <Text
            style={{
              fontFamily: fontFamily.INTER_BLOD,
              fontSize: scale(13),
              color: colors.WHITE,
              lineHeight: moderateScale(19.2),
              marginTop: moderateScale(5),
            }}>
            Bookings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{
              width: moderateScale(20),
              height: moderateScale(20),
              marginTop: moderateScale(10),
            }}
            source={images.seven}
          />
          <Text
            style={{
              fontFamily: fontFamily.INTER_BLOD,
              fontSize: scale(13),
              color: colors.WHITE,
              lineHeight: moderateScale(19.2),
              marginTop: moderateScale(5),
            }}>
            Wallet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{
              width: moderateScale(20),
              height: moderateScale(20),
              marginTop: moderateScale(10),
            }}
            source={images.six}
          />
          <Text
            style={{
              fontFamily: fontFamily.INTER_BLOD,
              fontSize: scale(13),
              color: colors.WHITE,
              lineHeight: moderateScale(19.2),
              marginTop: moderateScale(5),
            }}>
            Wallet
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </WrapperContainer>
  );
};

export default FirstScreen;
