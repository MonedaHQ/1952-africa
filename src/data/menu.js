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
    ],
  },
  {
    path: null,
    label: 'Blog',
    icon: null,
    icon2: null,
    dropdown: null,
  },
  {
    path: '/about',
    label: 'About',
    icon: null,
    icon2: null,
    dropdown: null,
  },

  {
    path: '/contact',
    label: 'Contact',
    icon: null,
    icon2: null,
    dropdown: null,
  },
];
