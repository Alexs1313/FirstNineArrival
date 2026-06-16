import React, {useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ChatBubble} from '../components/help/ChatBubble';
import {SubScreenHeader} from '../components/nav/SubScreenHeader';
import {
  findHelpReply,
  INITIAL_CHAT,
  QUICK_PROMPTS,
  type ChatMessage,
} from '../data/helpChat';
import {colors, fonts} from '../constants/theme';

export function GuestHelpScreen() {
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<ScrollView>(null);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_CHAT);
  const [draft, setDraft] = useState('');

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `${Date.now()}-user`,
      role: 'user',
      text: trimmed,
    };
    const assistantMessage: ChatMessage = {
      id: `${Date.now()}-assistant`,
      role: 'assistant',
      text: findHelpReply(trimmed),
    };

    setMessages(current => [...current, userMessage, assistantMessage]);
    setDraft('');

    requestAnimationFrame(() => {
      scrollRef.current?.scrollToEnd({animated: true});
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.GuestHelpScreenFacetChassis}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <SubScreenHeader
        title="Guest Help"
        subtitle="Ask for opening night support and visit guidance."
      />

      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.GuestHelpScreenMessagesContent}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() =>
          scrollRef.current?.scrollToEnd({animated: true})
        }>
        {messages.map(message => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </ScrollView>

      <View
        style={[
          styles.GuestHelpScreenComposer,
          {paddingBottom: insets.bottom + 12},
        ]}>
        <View style={styles.GuestHelpScreenQuickRow}>
          {QUICK_PROMPTS.map(prompt => (
            <Pressable
              key={prompt}
              onPress={() => sendMessage(prompt)}
              style={({pressed}) => [
                styles.GuestHelpScreenQuickChip,
                pressed && styles.GuestHelpScreenQuickChipPressedDim,
              ]}>
              <Text style={styles.GuestHelpScreenQuickFiligree}>{prompt}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.GuestHelpScreenInputLintel}>
          <TextInput
            value={draft}
            onChangeText={setDraft}
            placeholder="Type your question..."
            placeholderTextColor={colors.label}
            style={styles.GuestHelpScreenInput}
            onSubmitEditing={() => sendMessage(draft)}
            returnKeyType="send"
          />
          <Pressable onPress={() => sendMessage(draft)}>
            {({pressed}) => (
              <LinearGradient
                colors={[colors.buttonGradientStart, colors.buttonGradientEnd]}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={[
                  styles.GuestHelpScreenSendPortico,
                  pressed && styles.GuestHelpScreenSendPressedDim,
                ]}>
                <Text style={styles.GuestHelpScreenSendSigil}>➤</Text>
              </LinearGradient>
            )}
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  GuestHelpScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  GuestHelpScreenMessagesContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  GuestHelpScreenComposer: {
    borderTopColor: colors.border,
    borderTopWidth: 1,
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  GuestHelpScreenQuickRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  GuestHelpScreenQuickChip: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 100,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  GuestHelpScreenQuickChipPressedDim: {
    opacity: 0.8,
  },
  GuestHelpScreenQuickFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
  },
  GuestHelpScreenInputLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },

  GuestHelpScreenInput: {
    backgroundColor: colors.inputBg,
    borderColor: colors.border,
    borderRadius: 12,
    borderWidth: 1,
    color: colors.cream,
    flex: 1,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },

  GuestHelpScreenSendPortico: {
    alignItems: 'center',
    borderRadius: 12,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  GuestHelpScreenSendPressedDim: {
    opacity: 0.85,
  },
  GuestHelpScreenSendSigil: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: '700',
  },
});
