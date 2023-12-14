import { View, FlatList } from 'react-native';
import { GameListProps } from './GameList.types';
import GameCard from '../GameCard/GameCard.component';
import { CardTypes } from '@shared/ui/Card';

const BIG_SPACING = 16;
const BIG_CARD_SIZE = 312 + BIG_SPACING;
const SMALL_CARD_SIZE = 155 + BIG_SPACING;

export default function GamesList({ slots, cardsType }: GameListProps) {
  return (
    <FlatList
      data={slots}
      horizontal
      decelerationRate={'fast'}
      snapToInterval={cardsType === CardTypes.BIG ? BIG_CARD_SIZE : SMALL_CARD_SIZE}
      ItemSeparatorComponent={() => <View style={{ width: BIG_SPACING }}></View>}
      style={{ flexGrow: 0 }}
      contentContainerStyle={{ paddingHorizontal: 20 }}
      renderItem={({ item }) => {
        return <GameCard {...item} />;
      }}
      keyExtractor={(item) => `${item.id}`}
    />
  );
}
