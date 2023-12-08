import { Dimensions, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { createStyles } from './Main.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRouterParams, AppRoutes } from '@shared/config/router.config';
import WheelJpg from '@shared/assets/icons/wheelJpg.jpg';
import { Card, CardTypes } from '@shared/ui/Card';
import { MainHeader } from '@widgets/MainHeader';
import SlotsSection from '@widgets/Slots/ui/SlotsSection/SlotsSection.component';

const { width: screenWidth } = Dimensions.get('screen');
const width = screenWidth * 1.5;
const SPACING = 16;
const CARD_SIZE = 312 + SPACING;

const routes = [
  {
    id: 1,
    path: AppRoutes.WHEEL_OF_FORTUNE,
    Image: WheelJpg,
  },
  {
    id: 2,
    path: AppRoutes.WHEEL_OF_FORTUNE,
    Image: WheelJpg,
  },
  {
    id: 3,
    path: AppRoutes.WHEEL_OF_FORTUNE,
    Image: WheelJpg,
  },
  {
    id: 4,
    path: AppRoutes.WHEEL_OF_FORTUNE,
    Image: WheelJpg,
  },
];

export default function MainScreen() {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <SafeAreaView style={{ flex: 1, rowGap: 30 }} edges={['top']}>
      <MainHeader />
      
      <SlotsSection />
    </SafeAreaView>
  );
}
