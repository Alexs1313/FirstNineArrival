export type ChatMessage = {
  id: string;
  role: 'assistant' | 'user';
  text: string;
};

export const INITIAL_CHAT: ChatMessage[] = [
  {
    id: 'welcome',
    role: 'assistant',
    text: "Hello! How can I help with your First Nine Arrival Guest visit today? I'm here to support your opening night experience.",
  },
];

export const QUICK_PROMPTS = [
  'Where do I show my pass?',
  'What time does the opening start?',
] as const;

const HELP_REPLIES: Record<string, string> = {
  'where do i show my pass':
    "Show your Opening Event Pass at the main entrance and to any guest service staff when requested. Tap 'Show Full Pass' in the Pass tab for the full QR screen.",
  'where do i show my opening event pass':
    'You can show your Opening Event Pass at the venue entrance or whenever guest service staff asks for access confirmation.',
  'what time does the opening start':
    'We recommend arriving before the first scheduled welcome moment, so you have enough time for pass confirmation, orientation, and seating requests.',
  'what time should i arrive for the opening event':
    'We recommend arriving before the first scheduled welcome moment, so you have enough time for pass confirmation, orientation, and seating requests.',
  'when will the app features become fully active':
    'Some features are activated only during your real visit to the venue. Once your visit code is confirmed by staff, the main guest functions will become available.',
  'how do i activate my visit code':
    'Your visit code can only be activated at the venue. Please show your pass or code to guest service staff, and they will confirm your access.',
  'can i activate the code before arriving':
    'No. The visit code is designed to work only during an actual venue visit. This helps keep guest access, services, and event requests connected to the opening night experience.',
  'where can i see the opening night schedule':
    'Open the Events tab to view the full opening plan, including welcome moments, live music, show highlights, dining previews, and lounge activities.',
  'how do service requests work':
    'Choose a service, fill in the booking form, and send the request. The venue team will review it and update the status.',
  'what does pending confirmation mean':
    'It means your request has been sent, but the venue team has not confirmed the final details yet.',
};

export function findHelpReply(prompt: string): string {
  const normalized = prompt.trim().toLowerCase().replace(/[?]/g, '');

  if (HELP_REPLIES[normalized]) {
    return HELP_REPLIES[normalized];
  }

  for (const [key, reply] of Object.entries(HELP_REPLIES)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return reply;
    }
  }

  return 'Thanks for your question. Guest service staff can help with pass access, opening timing, service requests, and venue guidance during your visit.';
}
