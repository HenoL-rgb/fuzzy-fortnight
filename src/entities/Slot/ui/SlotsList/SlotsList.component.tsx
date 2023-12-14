import { View, Text, Dimensions, FlatList } from 'react-native';
import React, { useMemo } from 'react';
import { SlotsListProps } from './SlotsList.types';
import Slot from '../Slot.component';
import { useNavigation } from '@react-navigation/native';

export default function SlotsList({ slots, listHeader }: SlotsListProps) {
  const width = Dimensions.get('window').width;

  const numOfColumns = useMemo(() => {
    return Math.floor(width / 155);
  }, [width]);
  return (
    <FlatList
      data={slots}
      horizontal
      renderItem={({ item }) => <Slot {...item} />}
      contentContainerStyle={{ paddingHorizontal: 20, columnGap: 15 }}
      keyExtractor={(item) => `${item.id}`}
      snapToInterval={170}
      decelerationRate="fast"
    />
  );
}
