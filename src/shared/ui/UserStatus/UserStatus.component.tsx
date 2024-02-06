import { View, Text } from 'react-native';
import React from 'react';
import { createStyles } from './UserStatus.styles';
import { UserStatusProps } from './UserStatus.types';

export default function UserStatus({ online }: UserStatusProps) {
  const styles = createStyles(online);
  return <View style={styles.wrapper}></View>;
}
