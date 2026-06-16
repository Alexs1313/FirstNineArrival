import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {useAdaptive} from '../../hooks/useAdaptive';
import type {GuestTab} from '../../navigation/types';
import {colors, fonts} from '../../constants/theme';

const TAB_LABELS: Record<GuestTab, string> = {
  PassTab: 'Pass',
  EventsTab: 'Events',
  MenuTab: 'Menu',
  ServicesTab: 'Services',
  OffersTab: 'Offers',
};

const TAB_EMOJIS: Record<GuestTab, string> = {
  PassTab: '🪪',
  EventsTab: '📅',
  MenuTab: '🍽️',
  ServicesTab: '🛎️',
  OffersTab: '🎁',
};

const TAB_ORDER: GuestTab[] = [
  'PassTab',
  'EventsTab',
  'MenuTab',
  'ServicesTab',
  'OffersTab',
];

type TabBarProps = {
  activeTab: GuestTab;
  onSelectTab: (tab: GuestTab) => void;
};

export function TabBar({activeTab, onSelectTab}: TabBarProps) {
  const adaptive = useAdaptive();

  return (
    <View
      style={[
        styles.TabBarFacetChassis,
        {
          paddingTop: adaptive.tabPaddingTop,
          paddingBottom: adaptive.tabPaddingBottom,
        },
      ]}>
      {TAB_ORDER.map(tabName => {
        const isFocused = tabName === activeTab;

        return (
          <Pressable
            key={tabName}
            onPress={() => onSelectTab(tabName)}
            style={styles.TabBarTab}>
            {isFocused ? <View style={styles.TabBarActiveIndicator} /> : null}
            <Text
              style={[
                styles.TabBarEmojiSigil,
                {fontSize: adaptive.tabIconSize},
                !isFocused && styles.TabBarEmojiInactive,
              ]}>
              {TAB_EMOJIS[tabName]}
            </Text>
            <Text
              style={[
                styles.TabBarLabelFiligree,
                isFocused && styles.TabBarLabelActiveFiligree,
              ]}>
              {TAB_LABELS[tabName]}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  TabBarFacetChassis: {
    backgroundColor: colors.tabBar,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 4,
  },
  TabBarTab: {
    alignItems: 'center',
    flex: 1,
    gap: 4,
    paddingBottom: 10,
    paddingTop: 8,
  },
  TabBarActiveIndicator: {
    backgroundColor: colors.gold,
    borderRadius: 2,
    height: 2,
    position: 'absolute',
    top: 0,
    width: 28,
  },
  TabBarEmojiSigil: {
    lineHeight: 26,
  },
  TabBarEmojiInactive: {
    opacity: 0.45,
  },
  TabBarLabelFiligree: {
    color: colors.label,
    fontFamily: fonts.sansSemiBold,
    fontSize: 10,
    fontWeight: '600',
  },
  TabBarLabelActiveFiligree: {
    color: colors.gold,
  },
});
