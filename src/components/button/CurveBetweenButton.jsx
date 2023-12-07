// CurveBetweenButtons.js
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import images from '../../constants/images';

const CurveBetweenButtons = () => {
  return (
    <View
      style={{
        height: 96,
        width: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
              color: '#FF2850',
            }}
            source={images.nine}
          />
          <Text
            style={{
              fontFamily: 'Your-Font-Family-Bold',
              fontSize: 13,
              color: '#FF2850',
              lineHeight: 19.2,
              marginTop: 4,
            }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{
              width: 28,
              height: 28,
              marginTop: 8,
            }}
            source={images.eight}
          />
          <Text
            style={{
              fontFamily: 'Your-Font-Family-Bold',
              fontSize: 13,
              color: 'white',
              lineHeight: 19.2,
              marginTop: 5,
            }}>
            Bookings
          </Text>
        </TouchableOpacity>
        <Svg height={20} width={50} style={{marginTop: 5}}>
          <Path
            d="M 0 10 Q 25 20 50 10"
            fill="transparent"
            stroke="white"
            strokeWidth={1}
          />
        </Svg>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{
              width: 28,
              height: 28,
              marginTop: 10,
            }}
            source={images.seven}
          />
          <Text
            style={{
              fontFamily: 'Your-Font-Family-Bold',
              fontSize: 13,
              color: 'white',
              lineHeight: 19.2,
              marginTop: 5,
            }}>
            Wallet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            style={{
              width: 28,
              height: 28,
              marginTop: 10,
            }}
            source={images.six}
          />
          <Text
            style={{
              fontFamily: 'Your-Font-Family-Bold',
              fontSize: 13,
              color: 'white',
              lineHeight: 19.2,
              marginTop: 5,
            }}>
            Wallet
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CurveBetweenButtons;
