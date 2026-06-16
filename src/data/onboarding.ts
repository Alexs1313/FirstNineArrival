import type {ImageSourcePropType} from 'react-native';

import {onboardingBackgrounds, onboardingOverlays} from './assets';

export type OnboardingStep = {
  background: ImageSourcePropType;
  overlay: ImageSourcePropType;
  title: string;
  description: string;
  buttonLabel: string;
  tags?: string[];
  overlayWidthRatio?: number;
};

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    background: onboardingBackgrounds.step1,
    overlay: onboardingOverlays.step1,
    title: 'Your Arrival Starts Here',
    description:
      'Open your digital Opening Event Pass and keep your guest access ready for the Nine Casino launch night.',
    buttonLabel: 'Next',
    tags: ['Guest Access', 'Opening Night', 'VIP Entry'],
    overlayWidthRatio: 0.71,
  },
  {
    background: onboardingBackgrounds.step2,
    overlay: onboardingOverlays.step2,
    title: 'Follow the Opening Night Plan',
    description:
      'View the full event schedule, discover show moments, lounge activities, welcome highlights, and special opening experiences.',
    buttonLabel: 'Next',
    overlayWidthRatio: 0.88,
  },
  {
    background: onboardingBackgrounds.step3,
    overlay: onboardingOverlays.step3,
    title: 'Book Services for a Smooth Visit',
    description:
      'Request venue services, reserve guest support, or book a taxi directly from the Services screen.',
    buttonLabel: 'Next',
    overlayWidthRatio: 0.88,
  },
  {
    background: onboardingBackgrounds.step4,
    overlay: onboardingOverlays.step4,
    title: 'Browse and Order with Ease',
    description:
      'Explore food and drink items, add them to your order, check the total, and send your request for confirmation.',
    buttonLabel: 'Next',
    overlayWidthRatio: 0.88,
  },
  {
    background: onboardingBackgrounds.step5,
    overlay: onboardingOverlays.step5,
    title: 'Return for More Moments',
    description:
      'Discover After Opening Offers, future lounge evenings, dining nights, and special guest invitations.',
    buttonLabel: 'Get Started',
    overlayWidthRatio: 0.88,
  },
];
