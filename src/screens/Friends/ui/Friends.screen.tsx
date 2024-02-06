import { View, Text, FlatList } from 'react-native';
import React from 'react';
import FriendCard from '@widgets/FriendCard/FriendCard.component';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyles } from './Friends.styles';

export const imaginaryFriends = [
  {
    id: 1,
    avatar:
      'https://avatars.cloudflare.steamstatic.com/b31d777aa44faa90e60ccd2f1eff996bd44b3795_full.jpg',
    name: 'Krestovskiy',
    email: 'krestovskiy@gmail.com',
    online: false,
  },
  {
    id: 2,
    avatar:
      'https://avatars.cloudflare.steamstatic.com/878ef71339ab5fbc6436dff797d807dd7597c839_full.jpg',
    name: 'S1ngle',
    email: 's1ngle@gmail.com',
    online: true,
  },
  {
    id: 3,
    avatar:
      'https://avatars.cloudflare.steamstatic.com/d7ef83d37199d2f27a36217202c83a43cbdba45a_full.jpg',
    name: 'кекскс',
    email: 'keksks@gmail.com',
    online: false,
  },
  {
    id: 4,
    avatar:
      'https://avatars.cloudflare.steamstatic.com/4f9773234655642d38f691d8c6667ffcf09c7458_full.jpg',
    name: 'homka',
    email: 'homka@gmail.com',
    online: true,
  },
  {
    id: 5,
    avatar:
      'https://avatars.cloudflare.steamstatic.com/9bfaa61d8340a84cc32f1baf4944d54962f07c47_full.jpg',
    name: '1337win',
    email: '1337win@gmail.com',
    online: true,
  },
  {
    id: 6,
    avatar:
      'https://avatars.cloudflare.steamstatic.com/f9bf481672481beb55b6c2d7d743b4c22f055f5e_full.jpg',
    name: 'madara',
    email: 'madara@gmail.com',
    online: false,
  },
  {
    id: 7,
    avatar:
      'https://avatars.cloudflare.steamstatic.com/4d8a6379d97ca8a330379a6534391d9d6c5704f3_full.jpg',
    name: 'Romanych',
    email: 'romanych@gmail.com',
    online: false,
  },
  {
    id: 8,
    avatar:
      'https://avatars.cloudflare.steamstatic.com/c9b4289daafa39d497bfc9d558ee1473af7c26df_full.jpg',
    name: 'JustVal02',
    email: 'justval02@gmail.com',
    online: true,
  },
  {
    id: 9,
    avatar:
      'https://avatars.cloudflare.steamstatic.com/72822eceeccf1a139be2296e4dac84926379a7b4_full.jpg',
    name: 'Bo4um',
    email: 'bo4um@gmail.com',
    online: true,
  },
];

export default function Friends() {
  const styles = createStyles();

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.title}>Friends</Text>
      <FlatList
        data={imaginaryFriends}
        renderItem={({ item }) => <FriendCard {...item} />}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}
