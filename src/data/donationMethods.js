import { PiCalendarBlankThin, PiGiftThin, PiMoneyThin } from 'react-icons/pi';

export const donationMethods = [
  {
    icon: <PiMoneyThin />,
    heading: 'Make a financial donation',
    content:
      'Your donation will help us to provide African artists with grants, scholarships, and access to resources and training',
    buttonLabel: 'Donate',
    mainLink: '/donate?method=financial',
    learnLink: '',
  },
  {
    icon: <PiGiftThin />,
    heading: 'Donate items',
    content:
      'We accept donations of art supplies, art pieces, and other items that can be used to support our artists and our programs.',
    buttonLabel: 'Donate',
    mainLink: '/donate?method=items',
    learnLink: '',
  },
  {
    icon: <PiCalendarBlankThin />,
    heading: 'Partner with us on events',
    content:
      'We work with businesses and individuals to host events that promote African art and artists.',
    buttonLabel: 'Partner',
    mainLink: '/donate?method=partner',
    learnLink: '',
  },
];
