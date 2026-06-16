import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../../constants/theme';

type PaginationDotsProps = {
  total: number;
  activeIndex: number;
};

export function PaginationDots({total, activeIndex}: PaginationDotsProps) {
  return (
    <View style={styles.PaginationDotsFacetChassis}>
      {Array.from({length: total}).map((_, index) => {
        const isActive = index === activeIndex;

        return (
          <View
            key={index}
            style={[
              styles.PaginationDotsDot,
              isActive && styles.PaginationDotsDotActive,
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  PaginationDotsFacetChassis: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    marginBottom: 4,
  },
  PaginationDotsDot: {
    backgroundColor: colors.progressTrack,
    borderRadius: 4,
    height: 6,
    width: 6,
  },
  PaginationDotsDotActive: {
    backgroundColor: colors.gold,
    borderRadius: 3,
    width: 22,
  },
});
