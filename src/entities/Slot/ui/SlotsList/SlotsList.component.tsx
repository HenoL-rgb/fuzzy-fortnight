import { View, Text, Dimensions, FlatList } from 'react-native';
import React, { useMemo } from 'react';
import { SlotsListProps } from './SlotsList.types';
import Slot from '../Slot.component';

export default function SlotsList({ slots, listHeader }: SlotsListProps) {
  const width = Dimensions.get('window').width;

  const numOfColumns = useMemo(() => {
    return Math.floor(width / 155);
  }, [width]);
  return (
    <FlatList
      data={slots}
      renderItem={({ item }) => <Slot {...item} />}
      numColumns={numOfColumns}
      columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 20 }}
      contentContainerStyle={{ rowGap: 16, paddingBottom: 20 }}
      keyExtractor={(item) => `${item.id}`}
      ListHeaderComponent={listHeader}
      showsVerticalScrollIndicator={false}
    />
  );
}
