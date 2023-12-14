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
import GamesList from '@entities/Game/ui/GamesList/GamesList.component';
import { SmallCard } from '@shared/ui/Card/Card.types';

const { width: screenWidth } = Dimensions.get('screen');
const width = screenWidth * 1.5;
const SPACING = 16;
const CARD_SIZE = 312 + SPACING;

export default function SlotsSection() {
  const [active, setActive] = useState<SelectValue>(selects.TOP);
  const navigation = useNavigation();

  const slots: ({ id: number } & SmallCard)[] = [
    {
      id: 1,
      image: Card4,
      onPress: () => navigation.navigate(AppRoutes.SLOT_MACHINE as never),
      type: CardTypes.SMALL,
    },
    {
      id: 2,
      image: Card1,
      onPress: () => {},
      type: CardTypes.SMALL,
    },
    {
      id: 3,
      image: Card2,
      onPress: () => {},
      type: CardTypes.SMALL,
    },
    {
      id: 4,
      image: Card3,
      onPress: () => {},
      type: CardTypes.SMALL,
    },
  ];

  return (
    <View style={{ flex: 1, rowGap: 30 }}>
      <SlotsSectionHeader active={active} setActive={setActive} />
      <GamesList slots={slots} cardsType={CardTypes.SMALL} isLoading={false} />
    </View>
  );
}
