import { View, Text, Dimensions, FlatList } from 'react-native';
import React, { useState } from 'react';
import BlackJackSectionHeader from '../BlackJackSectionHeader/BlackJackSectionHeader.component';
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



const { width: screenWidth } = Dimensions.get('screen');
const width = screenWidth * 1.5;
const SPACING = 16;
const CARD_SIZE = 312 + SPACING;

export default function BlackJackSection() {
  const navigation = useNavigation();

  const slots = [
    {
      id: 1,
      image: Card4,
      onPress: () => navigation.navigate(AppRoutes.BLACK_JACK),
    },
  ];

  return (
    <View style={{ flex: 1, rowGap: 30 }}>
      <BlackJackSectionHeader />
      <SlotsList slots={slots} isLoading={false} />
    </View>
  );
}
