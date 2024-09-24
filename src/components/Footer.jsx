import Image from 'next/image';
import styles from './styles/footer.module.css';
import { contactInfo, footerLinks, homeLinks } from '@/data/footerLinks';
import Button from './Button';
import { useRouter } from 'next/router';
import { useSmoothScroll } from '@/context/SmoothScrollContext';

function Footer({ quickLinks = homeLinks, data = footerLinks }) {
  const year = new Date().getFullYear();

  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image
            src="/assets/1952-main-logo-white.png"
            width={145}
            height={173}
            alt="1952 Logo"
            draggable="false"
          />
        </div>
        <div className={styles.footLinks}>
          {quickLinks.map((link) => (
            <FooterLinks link={link} key={link.heading} />
          ))}
          {data.map((link) => (
            <FooterLinks link={link} key={link.heading} />
          ))}
          <div className={styles.contactBox}>
            <h4>{contactInfo.heading}</h4>
            <ul className={styles.contactLinks}>
              <li className={styles.contactLink}>
                Email us at
                <Button
                  variant="link-light"
                  href={`mailto:${contactInfo.data.email}`}
                >
                  {' '}
                  {contactInfo.data.email}
                </Button>
              </li>
              {contactInfo.data.phoneNumber && (
                <li className={styles.contactLink}>
                  Call us on
                  <Button
                    variant="link-light"
                    href={`tel:${contactInfo.data.phoneNumber}`}
                  >
                    {contactInfo.data.phoneNumber}
                  </Button>
                </li>
              )}
              {contactInfo.data.whatsapp && (
                <li className={styles.contactLink}>
                  Send us a message on
                  <Button variant="link-light" href={contactInfo.data.whatsapp}>
                    Whatsapp
                  </Button>
                </li>
              )}
              <div>
                <h4>Follow us on Social Media</h4>
                <div className={styles.socialIcons}>
                  {contactInfo.data.socials.map((link) => (
                    <Button
                      variant="link-light"
                      key={link.link}
                      onClick={() => router.push(link.link)}
                    >
                      <p className={styles.icon}>{link.icon}</p>
                    </Button>
                  ))}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.allRightsReserved}>
        <p>
          &copy; {year} | <strong>1952 Africa&reg;</strong> | All Rights
          Reserved.{' '}
        </p>
      </div>
    </footer>
  );
}

function FooterLinks({ link }) {
  const { heading, links } = link;
  const router = useRouter();
  const { handleScrollTo } = useSmoothScroll();
  return (
    <div className={styles.linkBlock}>
      <h4>{heading}</h4>
      <ul className={styles.linkList}>
        {links.map((link, index) => (
          <li key={heading + index} className={styles.link}>
            <Button
              variant="link-light"
              onClick={() => {
                link.link.includes('/')
                  ? router.push(link.link)
                  : handleScrollTo(link.link, 200);
              }}
            >
              {link.label}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
