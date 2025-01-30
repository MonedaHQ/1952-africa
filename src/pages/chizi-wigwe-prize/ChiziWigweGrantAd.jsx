import Section from '@/components/Section';

import styles from './styles/chiziwigwegrantad.module.css';
import { useRouter } from 'next/router';
import Button from '@/components/Button';
import Image from 'next/image';

function ChiziWigweGrantAd() {
  return (
    <Section>
      <mmain className={styles.main} id="chizi-wigwe">
        <Description />
      </mmain>
    </Section>
  );
}

function Description() {
  const router = useRouter();
  return (
    <div className={styles.descriptionBox}>
      <h3 className={styles.heading}>The Chizi Wigwe Prize</h3>
      <div className={styles.mainContentContainer}>
        <div className={styles.content}>
          <div className={styles.paragraphs}>
            <p>
              The 1952 Africa Foundation, in partnership with the HOW
              Foundation, is pleased to announce the inaugural Chizi Wigwe Prize
              for African Futurism.
              <br />
              <br />
              The Chizi Wigwe Prize is a $15,000 award granted to an exceptional
              artist whose work embodies the spirit of African Futurism and
              aligns with the theme "Africa in 2100." This initiative reflects
              the Foundation's commitment to fostering a dynamic and inclusive
              creative landscape where African artists can thrive and contribute
              to global conversations.
            </p>
          </div>
          <div className={styles.cta}>
            <Button
              variant="primary"
              onClick={() => router.push('/chizi-wigwe-prize')}
            >
              Learn more
            </Button>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/images/father-nature.jpg"
            width={550}
            height={550}
            alt="Chizi Wigwe Prize Launch"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default ChiziWigweGrantAd;
