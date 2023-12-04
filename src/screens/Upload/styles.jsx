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
  uploadBtnStyle: {
    marginTop: moderateScale(20),
    width: '90%',
    backgroundColor: colors.BLACK,
    borderRadius: moderateScale(10),
  },
  titleStyle: {
    color: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: scale(14),
  },
  buttonStyle: {
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.BLACK,
    padding: 10,
  },
  logOutContainer: {alignItems: 'flex-end', width: '90%'},
  logOut: {
    width: moderateScale(20),
    height: moderateScale(20),
    bottom: moderateScale(130),
  },
  listContainer: {width: '90%'},
});
export default styles;
