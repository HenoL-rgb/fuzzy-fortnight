import { View, Text } from 'react-native';
import React, { memo, useCallback, useRef, useState } from 'react';
import { ReelSetProps } from './ReelSet.types';
import { REELS, REELS_REPEAT, SYMBOLS } from '@entities/Slot/model/constants/constants';
import Reel from '@entities/Slot/ui/Reel/Reel.component';
import { useTheme } from '@react-navigation/native';
import { createStyles } from './ReelSet.styles';

function ReelSet({ width, onLoad, reelsArr }: ReelSetProps) {
  const [reelWidth, setReelWidth] = useState<number>(0);
  const theme = useTheme();
  const styles = createStyles(theme);

  const onLoadReel = () => {
    onLoad?.();
  };

  const renderReels = useCallback(() => {
    if (reelWidth === 0) return [];

    const reelsList = new Array(REELS).fill(null).map((item, index) => (
      <Reel
        key={item + index}
        width={reelWidth}
        ref={(ref) => {
          ref && reelsArr.current?.push(ref);
        }}
        index={index}
        onLoad={onLoadReel}
      />
    ));
    return reelsList;
  }, [reelWidth]);

  return (
    <View
      onLayout={(e) => setReelWidth(e.nativeEvent.layout.height / SYMBOLS)}
      style={styles.wrapper}
    >
      {renderReels()}
    </View>
  );
}

export default memo(ReelSet);
