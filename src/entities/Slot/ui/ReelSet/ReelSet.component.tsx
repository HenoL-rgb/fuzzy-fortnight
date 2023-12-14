import { View, Text } from 'react-native';
import React from 'react';
import { ReelSetProps } from './ReelSet.types';

export default function ReelSet({ width }: ReelSetProps) {
  return (
    <View style={{ flex: 1, width, backgroundColor: 'green' }}>
    </View>
  );
}
