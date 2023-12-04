import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const AppButton = ({title, onPress, style, titleStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[style, titleStyle]}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
