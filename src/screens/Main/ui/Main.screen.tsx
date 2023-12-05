import { Dimensions, FlatList, Image, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from './Main.styles';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRouterParams, AppRoutes } from '@shared/config/router.config';
import WheelJpg from '@shared/assets/icons/wheelJpg.jpg';

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

type NavProps = NativeStackScreenProps<AppRouterParams, AppRoutes.MAIN>;

export default function MainScreen({ navigation }: NavProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Pressable
        style={{ height: 80, width: 80, backgroundColor: 'white' }}
        onPress={() => navigation.navigate(AppRoutes.WHEEL_OF_FORTUNE)}
      ></Pressable>
      <FlatList
        data={routes}
        horizontal
        decelerationRate={0}
        snapToInterval={CARD_SIZE}
        ItemSeparatorComponent={() => <View style={{ width: SPACING }}></View>}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                position: 'relative',
                width: 312,
                height: 156,
                borderRadius: 15,
                overflow: 'hidden',
              }}
              key={item.id}
            >
              <Image
                source={item.Image}
                style={{
                  objectFit: 'contain',
                }}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
