import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppNavigation} from '../../navigation/NavigationContext';
import {colors, fonts} from '../../constants/theme';
import {SavedChipButton} from './SavedChipButton';

type EventScreenHeaderProps = {
  showSaved?: boolean;
  savedActive?: boolean;
  onSavedPress?: () => void;
};

export function EventScreenHeader({
  showSaved = false,
  savedActive = false,
  onSavedPress,
}: EventScreenHeaderProps) {
  const {goBack} = useAppNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.EventScreenHeaderFacetChassis,
        {paddingTop: insets.top + 8},
      ]}>
      <View style={styles.EventScreenHeaderRowLintel}>
        <Pressable
          onPress={goBack}
          style={({pressed}) => [
            styles.EventScreenHeaderBackPortico,
            pressed && styles.EventScreenHeaderBackPressedDim,
          ]}>
          <Text style={styles.EventScreenHeaderBackFiligree}>‹ Back</Text>
        </Pressable>
        {showSaved && onSavedPress ? (
          <SavedChipButton onPress={onSavedPress} active={savedActive} />
        ) : (
          <View style={styles.EventScreenHeaderSpacer} />
        )}
      </View>
    </View>
  );
}

type SavedEventsHeaderProps = {
  count: number;
};

export function SavedEventsHeader({count}: SavedEventsHeaderProps) {
  const {goBack} = useAppNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.EventScreenHeaderFacetChassis,
        {paddingTop: insets.top + 8},
      ]}>
      <View style={styles.SavedEventsHeaderRowLintel}>
        <Pressable
          onPress={goBack}
          style={({pressed}) => [
            styles.EventScreenHeaderBackPortico,
            pressed && styles.EventScreenHeaderBackPressedDim,
          ]}>
          <Text style={styles.EventScreenHeaderBackFiligree}>‹ Back</Text>
        </Pressable>
        <View style={styles.SavedEventsHeaderTextEnclave}>
          <Text style={styles.SavedEventsHeaderTitleFiligree}>Saved Events</Text>
          <Text style={styles.SavedEventsHeaderSubtitleFiligree}>
            {count} {count === 1 ? 'event' : 'events'} saved
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  EventScreenHeaderFacetChassis: {
    borderBottomColor: colors.borderMuted,
    borderBottomWidth: 1,
    paddingBottom: 17,
    paddingHorizontal: 20,
  },
  EventScreenHeaderRowLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SavedEventsHeaderRowLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  EventScreenHeaderBackPortico: {
    minWidth: 60,
  },
  EventScreenHeaderBackPressedDim: {
    opacity: 0.7,
  },
  EventScreenHeaderBackFiligree: {
    color: colors.buttonGradientStart,
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
    fontWeight: '500',
  },
  EventScreenHeaderSpacer: {
    width: 60,
  },
  SavedEventsHeaderTextEnclave: {
    flex: 1,
    gap: 2,
  },
  SavedEventsHeaderTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: -0.31,
  },
  SavedEventsHeaderSubtitleFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 11,
    letterSpacing: 0.06,
  },
});
