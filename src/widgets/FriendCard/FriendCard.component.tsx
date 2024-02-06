import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { FriendCardProps } from './FriendCard.types';
import UserStatus from '@shared/ui/UserStatus/UserStatus.component';
import { Avatar } from '@shared/ui/Avatar';
import { createStyles } from './FriendCard.styles';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from '@shared/config/router.config';

export default function FriendCard({ name, avatar, online, id }: FriendCardProps) {
  const styles = createStyles();
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.wrapper,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: pressed ? '#ffffff22' : 'transparent',
        },
      ]}
      onPress={() =>
        navigation.navigate(AppRoutes.USER, {
          id,
        })
      }
    >
      <View style={styles.info}>
        <Avatar url={avatar} />
        <Text style={styles.text}>{name}</Text>
      </View>
      <UserStatus online={online} />
    </Pressable>
  );
}
