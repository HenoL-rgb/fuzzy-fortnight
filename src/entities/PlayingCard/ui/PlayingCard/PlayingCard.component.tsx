import { cards } from '@shared/assets/icons';
import { Back } from '@shared/assets/icons';
import { PlayingCardProps } from './PlayingCard.types';
import Animated, {
  FadeIn, FadeOut,
  Layout,
  SlideInDown,
  SlideInUp
} from 'react-native-reanimated';
import { useTheme } from '@react-navigation/native';
import { createStyles } from './PlayingCard.styles';
import { useAppSelector } from '@app/providers/storeProvider/lib/hooks/useAppSelector.hook';
import { getBlackJackWinner } from '@screens/BlackJack/model/selectors/blackJackSelectors';

export default function PlayingCard({ index, show, suit, value, style, turn }: PlayingCardProps) {
  const Icon = cards[suit];

  const theme = useTheme();
  const styles = createStyles(theme, index);
  const winner = useAppSelector(getBlackJackWinner);

  if (!show) {
    return (
      <Animated.View
        style={[styles.wrapper, style]}
        layout={Layout}
        entering={SlideInUp.delay(index && index < 2 ? index * 100 : 0)}
      >
        {turn && index === 1 && !Boolean(winner) ? (
          <Animated.View exiting={FadeOut} key="back">
            <Back width={120} height={168} />
          </Animated.View>
        ) : (
          <Animated.View entering={FadeIn} key="front">
            <Icon width={120} height={168} />
          </Animated.View>
        )}
      </Animated.View>
    );
  }

  return (
    <Animated.View
      style={[styles.wrapper, style]}
      layout={Layout}
      entering={SlideInDown.delay(index && index < 2 ? index * 100 : 0)}
    >
      <Icon width={120} height={168} />
    </Animated.View>
  );
}
