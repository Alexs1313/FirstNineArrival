import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import type {ChatMessage} from '../../data/helpChat';
import {colors, fonts} from '../../constants/theme';

type ChatBubbleProps = {
  message: ChatMessage;
};

export function ChatBubble({message}: ChatBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <View
      style={[
        styles.ChatBubbleFacetChassis,
        isUser && styles.ChatBubbleFacetChassisUser,
      ]}>
      {!isUser ? (
        <View style={styles.ChatBubbleAvatarEnclave}>
          <Text style={styles.ChatBubbleAvatarSigil}>💬</Text>
        </View>
      ) : null}
      <View
        style={[
          styles.ChatBubbleBody,
          isUser ? styles.ChatBubbleBodyUser : styles.ChatBubbleBodyAssistant,
        ]}>
        <Text
          style={[
            styles.ChatBubbleFiligree,
            isUser && styles.ChatBubbleFiligreeUser,
          ]}>
          {message.text}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ChatBubbleFacetChassis: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  ChatBubbleFacetChassisUser: {
    justifyContent: 'flex-end',
  },
  ChatBubbleAvatarEnclave: {
    alignItems: 'center',
    backgroundColor: 'rgba(221, 184, 74, 0.12)',
    borderColor: colors.goldBorder,
    borderRadius: 16,
    borderWidth: 1,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  ChatBubbleAvatarSigil: {
    fontSize: 14,
  },
  ChatBubbleBody: {
    borderRadius: 14,
    maxWidth: '78%',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  ChatBubbleBodyAssistant: {
    backgroundColor: colors.assistantBubble,
    borderColor: colors.border,
    borderWidth: 1,
  },
  ChatBubbleBodyUser: {
    backgroundColor: colors.userBubble,
  },
  ChatBubbleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    lineHeight: 20,
  },
  ChatBubbleFiligreeUser: {
    color: colors.buttonText,
    fontWeight: '600',
  },
});
