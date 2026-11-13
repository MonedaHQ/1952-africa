import Image from 'next/image';
import { PiArrowRight } from 'react-icons/pi';

import Button from '@/components/Button';
import Section from '@/components/Section';
import { chizigrantdata } from '@/data/chizigrantdata';

import styles from './styles/chiziwigwe.module.css';

function ChiziHero() {
  return (
    <Section>
      <main className={styles.main}>
        <span className="eyebrow">The Chizi Wigwe Prize · African Futurism</span>
        <div className={styles.layout}>
          <article
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: chizigrantdata }}
          />
          <aside className={styles.aside}>
            <figure className={styles.imageContainer}>
              <Image
                src="/images/chizi-wigwe-launch.jpg"
                width={1200}
                height={800}
                alt="Chizi Wigwe Prize Launch"
                sizes="(max-width: 900px) 100vw, 480px"
                className={styles.image}
                priority
              />
              <figcaption>Image from the Chizi Wigwe Prize launch</figcaption>
            </figure>
            <div className={styles.facts}>
              <div>
                <span>Award</span>
                <strong>$15,000</strong>
              </div>
              <div>
                <span>Theme</span>
                <strong>Africa in 2100</strong>
              </div>
              <div>
                <span>In partnership with</span>
                <strong>The HOW Foundation</strong>
              </div>
              <div>
                <span>Status</span>
                <strong>Applications closed</strong>
              </div>
            </div>
            <Button variant="primary" href="/contact">
              Ask about the prize <PiArrowRight />
            </Button>
          </aside>
        </div>
      </main>
    </Section>
  );
}

export default ChiziHero;
