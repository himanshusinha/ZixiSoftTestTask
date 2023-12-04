import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  listContainer: {
    marginVertical: moderateScaleVertical(10),
    backgroundColor: colors.WHITE,
  },
  listInnerContainer: {
    flexDirection: 'row',
    margin: moderateScaleVertical(10),
  },
  logoStyle: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
  },
  userInfoContainer: {marginHorizontal: moderateScaleVertical(15)},
  titleNameStyle: {fontWeight: 'bold', fontSize: moderateScale(13)},
  courseContainer: {flexDirection: 'row'},
  titleCourseName: {fontWeight: 'bold', fontSize: moderateScale(13)},
});
export default styles;
