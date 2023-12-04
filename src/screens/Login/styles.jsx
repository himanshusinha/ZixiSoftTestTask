import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inputContainer: {
    justifyContent: 'center',
    width: '90%',
    marginTop: moderateScaleVertical(20),
  },
  titleStyle: {
    color: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: scale(14),
  },
  buttonStyle: {
    backgroundColor: colors.BLACK,
    height: moderateScale(45),
    borderRadius: moderateScale(10),
  },
  titleSignUp: {
    fontSize: scale(14),
    color: colors.BLACK,
    fontWeight: 'bold',
  },
  titleDont: {
    fontSize: scale(14),
    color: colors.BLACK,
  },
  buttonContainer: {flexDirection: 'row', marginTop: moderateScale(80)},
  loginBtnStyle: {marginTop: moderateScale(20), width: '90%'},
  errorText: {
    marginTop: moderateScale(10),
    color: 'red',
  },
});
export default styles;
