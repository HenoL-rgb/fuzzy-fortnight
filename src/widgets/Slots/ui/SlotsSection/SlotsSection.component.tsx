import { View, Text, Dimensions, FlatList } from 'react-native';
import React, { useState } from 'react';
import SlotsSectionHeader from '../SlotsSectionHeader/SlotsSectionHeader.component';
import { SelectValue, selects } from '@features/SlotsSelect';
import Card1 from '@shared/assets/icons/Card1.jpg';
import Card2 from '@shared/assets/icons/Card2.jpg';
import Card3 from '@shared/assets/icons/Card3.jpg';
import Card4 from '@shared/assets/icons/Card.jpg';
import { SlotsList } from '@entities/Slot';
import { AppRouterParams, AppRoutes } from '@shared/config/router.config';
import WheelJpg from '@shared/assets/icons/wheelJpg.jpg';
import { Card, CardTypes } from '@shared/ui/Card';
import { useNavigation } from '@react-navigation/native';

const slots = [
  {
    id: 1,
    image: Card4,
    onPress: () => {},
  },
  {
    id: 2,
    image: Card1,
    onPress: () => {},
  },
  {
    id: 3,
    image: Card2,
    onPress: () => {},
  },
  {
    id: 4,
    image: Card3,
    onPress: () => {},
  },
];

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

export default function SlotsSection() {
  const [active, setActive] = useState<SelectValue>(selects.TOP);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, rowGap: 30 }}>
      <SlotsList
        slots={slots}
        isLoading={false}
        listHeader={
          <View style={{ rowGap: 30, paddingBottom: 30 }}>
            <FlatList
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
            />
            <SlotsSectionHeader active={active} setActive={setActive} />
          </View>
        }
      />
    </View>
  );
}
