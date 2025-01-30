import { HiMiniChevronDown, HiMiniChevronUp } from 'react-icons/hi2';

export const homeMenuLinks = [
  {
    path: null,
    label: 'Explore',
    action: 'onMouseEnter',
    icon: <HiMiniChevronDown />,
    icon2: <HiMiniChevronUp />,
    dropdown: [
      { path: '/programs', label: 'Programs' },
      { path: '/artists', label: 'Artists' },
      { path: '/gallery', label: 'Gallery' },
      { path: '/events', label: 'Events' },
      { path: '/chizi-wigwe-prize', label: 'The Chizi Wigwe Prize' },
    ],
  },
  {
    path: null,
    label: 'About',
    action: 'onMouseEnter',
    icon: <HiMiniChevronDown />,
    icon2: <HiMiniChevronUp />,
    dropdown: [
      { path: '/about', label: 'About us' },
      { path: '/team', label: 'Our People' },
      { path: '/1952-house', label: '1952 House' },
    ],
  },

  {
    path: '/contact',
    label: 'Contact',
    icon: null,
    icon2: null,
    dropdown: null,
  },
];
