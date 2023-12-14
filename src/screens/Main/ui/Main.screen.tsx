import { Dimensions, FlatList, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from './Main.styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRouterParams, AppRoutes } from '@shared/config/router.config';
import WheelJpg from '@shared/assets/icons/wheelJpg.jpg';
import { Card, CardTypes } from '@shared/ui/Card';
import { MainHeader } from '@widgets/MainHeader';
import SlotsSection from '@widgets/Slots/ui/SlotsSection/SlotsSection.component';
import { BlackJackSection } from '@widgets/BlackJackSection';
import GamesList from '@entities/Game/ui/GamesList/GamesList.component';

const { width: screenWidth } = Dimensions.get('screen');
const width = screenWidth * 1.5;
const SPACING = 16;
const CARD_SIZE = 312 + SPACING;

export default function MainScreen() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  const routes = [
    {
      id: 1,
      path: AppRoutes.WHEEL_OF_FORTUNE,
      image: WheelJpg,
      title: 'TRIGGER THE FREESPINS BONUS',
      subTitle: '3 bonus symboltrigger free spins!',
      buttonTitle: 'Play 23:09:07',
      type: CardTypes.BIG,
      onPress: () => navigation.navigate(AppRoutes.WHEEL_OF_FORTUNE),
    },
    {
      id: 2,
      path: AppRoutes.WHEEL_OF_FORTUNE,
      image: WheelJpg,
      title: 'TRIGGER THE FREESPINS BONUS',
      subTitle: '3 bonus symboltrigger free spins!',
      buttonTitle: 'Play 23:09:07',
      type: CardTypes.BIG,
      onPress: () => navigation.navigate(AppRoutes.WHEEL_OF_FORTUNE),
    },
    {
      id: 3,
      path: AppRoutes.WHEEL_OF_FORTUNE,
      image: WheelJpg,
      title: 'TRIGGER THE FREESPINS BONUS',
      subTitle: '3 bonus symboltrigger free spins!',
      buttonTitle: 'Play 23:09:07',
      type: CardTypes.BIG,
      onPress: () => navigation.navigate(AppRoutes.WHEEL_OF_FORTUNE),
    },
    {
      id: 4,
      path: AppRoutes.WHEEL_OF_FORTUNE,
      image: WheelJpg,
      title: 'TRIGGER THE FREESPINS BONUS',
      subTitle: '3 bonus symboltrigger free spins!',
      buttonTitle: 'Play 23:09:07',
      type: CardTypes.BIG,
      onPress: () => navigation.navigate(AppRoutes.WHEEL_OF_FORTUNE),
    },
  ];

  const slots = [
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

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <MainHeader />
      <ScrollView  contentContainerStyle={{ rowGap: 30, paddingBottom: 30 }}>
        {/* <FlatList
          data={routes}
          horizontal
          decelerationRate={'fast'}
          snapToInterval={CARD_SIZE}
          ItemSeparatorComponent={() => <View style={{ width: SPACING }}></View>}
          style={{ flexGrow: 0 }}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          renderItem={({ item }) => {
            return (
              <Card
                type={CardTypes.BIG}
                image={item.Image}
                onPress={() => navigation.navigate(AppRoutes.WHEEL_OF_FORTUNE)}
                title="TRIGGER THE FREESPINS BONUS"
                subTitle="3 bonus symboltrigger free spins!"
                buttonTitle="Play 23:09:07"
              />
            );
          }}
        /> */}
        <GamesList slots={routes} cardsType={CardTypes.BIG} isLoading={false} />
        <BlackJackSection />
        <SlotsSection />
      </ScrollView>
    </SafeAreaView>
  );
}
