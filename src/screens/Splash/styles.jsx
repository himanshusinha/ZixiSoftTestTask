import {StyleSheet} from 'react-native';
import {scale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLACK,
  },
  titleStyle: {
    fontSize: scale(20),
    color: colors.WHITE,
  },
});
export default styles;
