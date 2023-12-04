import {StyleSheet} from 'react-native';

import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../styles/responsiveSize';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  buttonStyle: {
    height: moderateScale(45),
    backgroundColor: colors.BLACK,
    width: '90%',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScaleVertical(30),
  },
  titleStyle: {
    fontSize: scale(14),
    color: colors.WHITE,
  },
  disabledButton: {
    height: moderateScale(45),
    backgroundColor: colors.BLACK,
    width: '90%',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScaleVertical(30),
  },
  errorText: {
    color: colors.RED,
  },
});
export default styles;
