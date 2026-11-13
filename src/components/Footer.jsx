import Image from 'next/image';
import Link from 'next/link';
import { PiArrowUpRight } from 'react-icons/pi';

import { contactInfo, footerLinks, homeLinks } from '@/data/footerLinks';
import { useSmoothScroll } from '@/context/SmoothScrollContext';

import styles from './styles/footer.module.css';

const socialNames = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  youtube: 'YouTube',
  twitter: 'X',
  linkedin: 'LinkedIn',
};

const socialName = (url) =>
  Object.entries(socialNames).find(([key]) => url.includes(key))?.[1] || 'Social';

function Footer({ quickLinks = homeLinks, data = footerLinks }) {
  const year = new Date().getFullYear();
  const { email, phoneNumber, whatsapp, socials } = contactInfo.data;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image
              src="/assets/1952-main-logo-white.png"
              width={943}
              height={1127}
              alt="1952 Africa — Art, Culture, History"
              draggable={false}
              className={styles.logo}
            />
            <p className={styles.statement}>
              An art foundation dedicated to the growth and global recognition
              of African art.
            </p>
            <Link href="/donate" className={styles.cta}>
              Support the foundation <PiArrowUpRight aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.columns}>
            {[...quickLinks, ...data].map((group) => (
              <FooterLinks link={group} key={group.heading} />
            ))}

            <div className={styles.linkBlock}>
              <h4>{contactInfo.heading}</h4>
              <ul className={styles.linkList}>
                <li>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
                {phoneNumber && (
                  <li>
                    <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>{phoneNumber}</a>
                  </li>
                )}
                {whatsapp && (
                  <li>
                    <a href={whatsapp} target="_blank" rel="noopener noreferrer">
                      Message us on WhatsApp
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {year} 1952 Africa&reg; · All rights reserved
          </p>
          <ul className={styles.socialIcons} aria-label="Follow us on social media">
            {socials.map((social) => (
              <li key={social.link}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={socialName(social.link)}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* the 52 band, oversized, as the foundation's signature */}
      <div className={styles.watermark} aria-hidden="true" />
    </footer>
  );
}

function FooterLinks({ link }) {
  const { heading, links } = link;
  const { handleScrollTo } = useSmoothScroll();

  return (
    <div className={styles.linkBlock}>
      <h4>{heading}</h4>
      <ul className={styles.linkList}>
        {links.map((item) => (
          <li key={item.label}>
            {item.link.includes('/') ? (
              <Link href={item.link}>{item.label}</Link>
            ) : (
              <button type="button" onClick={() => handleScrollTo(item.link, 100)}>
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
