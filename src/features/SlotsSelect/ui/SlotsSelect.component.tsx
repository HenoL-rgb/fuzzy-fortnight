import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Select } from '@shared/ui/Select';
import { SlotsSelectProps } from './SlotsSelect.types';
import { createStyles } from './SlotsSelect.styles';

const selects = {
  TOP: 'Top',
  NEW: 'New',
} as const;

export default function SlotsSelect({ active, setActive }: SlotsSelectProps) {
  const styles = createStyles();
  return (
    <View style={styles.wrapper}>
      <Select
        title={selects.TOP}
        active={active === selects.TOP}
        setActive={() => setActive(selects.TOP)}
      />
      <Select
        title={selects.NEW}
        active={active === selects.NEW}
        setActive={() => setActive(selects.NEW)}
      />
    </View>
  );
}
