import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import colors from '../../constants/colors';

const WrapperContainer = ({style = {}, children}) => {
  return (
    <View
      style={{
        ...styles.container,
        ...style,
        backgroundColor: colors.WHITE,
      }}>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
  },
});

export default WrapperContainer;
