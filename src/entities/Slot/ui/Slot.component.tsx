import { View, Text } from 'react-native';
import React from 'react';
import { Card, CardTypes } from '@shared/ui/Card';
import { SlotProps } from './Slot.types';

export default function Slot({ image, onPress }: SlotProps) {
  return <Card type={CardTypes.SMALL} image={image} onPress={onPress} />;
}
