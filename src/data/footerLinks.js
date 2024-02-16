import {
  PiFacebookLogo,
  PiInstagramLogoLight,
  PiLinkedinLogo,
  PiTiktokLogoLight,
  PiYoutubeLogoThin,
} from 'react-icons/pi';

import { RiTwitterXLine } from 'react-icons/ri';

export const footerLinks = [
  {
    heading: 'Make a donation',
    links: [
      { label: 'Financial Donation', link: '/donate?method=financial' },
      { label: 'Donate items', link: '/donate?method=items' },
      { label: 'Partner with us', link: '/donate?method=partner' },
    ],
  },
];

export const contactInfo = {
  heading: 'Contact us',
  data: {
    email: 'info@1952Africa.art',
    phoneNumber: '+234 818 500 0400',
    whatsapp: 'https://wa.link/ihxcl6',
    socials: [
      {
        link: 'https://www.instagram.com/1952.africa/',
        icon: <PiInstagramLogoLight />,
      },
      {
        link: 'https://www.facebook.com/1952.AFRICA/',
        icon: <PiFacebookLogo />,
      },
      {
        link: 'https://www.youtube.com/@AFRICA-bt5sm',
        icon: <PiYoutubeLogoThin />,
      },
      { link: 'https://twitter.com/1952Africa', icon: <RiTwitterXLine /> },
      {
        link: 'https://www.linkedin.com/company/1952-africa/',
        icon: <PiLinkedinLogo />,
      },
      // { link: 'https://www.tiktok.com', icon: <PiTiktokLogoLight /> },
    ],
  },
};

export const homeLinks = [
  {
    heading: 'Quick Links',
    links: [
      { label: 'Programs', link: '/programs' },
      { label: 'Artists', link: '/artists' },
      { label: 'Gallery', link: '/gallery' },
      { label: 'Events', link: '/events' },
      //   { label: 'Join the raffle!', link: 'raffle' },
    ],
  },
];
