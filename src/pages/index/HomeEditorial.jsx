import Image from 'next/image';
import Link from 'next/link';
import { PiArrowRight, PiArrowUpRight } from 'react-icons/pi';

import Bands from '@/components/Bands';
import Button from '@/components/Button';
import Reveal from '@/components/Reveal';
import VideoEmbed from '@/components/VideoEmbed';
import { featuredWorks } from '@/data/slideshowImages';
import { useArtworks } from '@/hooks/useArtworks';

import styles from './styles/homeeditorial.module.css';

const pathways = [
  {
    number: '01',
    title: 'Programmes',
    copy: 'Artist-centred initiatives designed to create room for experimentation, learning and meaningful exchange.',
    href: '/programs',
    image: '/images/workshop-images/bade-fuwa-showcasing-his-work.jpg',
  },
  {
    number: '02',
    title: 'Artists',
    copy: 'Meet the emerging and established voices shaping a bold, expansive picture of African creativity.',
    href: '/artists',
    image:
      '/images/workshop-images/ntiense-tom-putting-her-thoughts-on-canvas.jpg',
  },
  {
    number: '03',
    title: 'Exhibitions',
    copy: 'Discover exhibitions, ideas and artworks that connect contemporary practice to wider cultural conversations.',
    href: '/gallery',
    fromGallery: true,
  },
];

export default function HomeEditorial() {
  const artworks = useArtworks();
  // a different piece from the one opening the hero slideshow
  const featured = artworks?.[1] || artworks?.[0];

  return (
    <main id="main" className={styles.page}>
      <Bands />

      {/* ---------- Who we are ---------- */}
      <section className={styles.intro} aria-labelledby="intro-title">
        <Reveal className={styles.introLabel}>
          <span className="eyebrow">Who we are</span>
        </Reveal>
        <Reveal className={styles.introBody}>
          <h2 id="intro-title">
            Building a living ecosystem for <em>African creativity.</em>
          </h2>
          <div className={styles.introCopy}>
            <p>
              1952 Africa is an art foundation committed to the growth of
              African art — providing artists with the tools, resources and room
              to build flourishing, respected and globally recognised careers.
            </p>
            <Button variant="secondary" href="/about">
              Our story <PiArrowRight />
            </Button>
          </div>
        </Reveal>
      </section>

      {/* ---------- Film ---------- */}
      <section className={styles.filmSection} aria-label="About 1952 Africa">
        <Reveal className={styles.filmFrame}>
          <VideoEmbed
            title="About 1952 Africa"
            linkUrl="https://www.youtube.com/watch?v=rQfIosudgxE"
          />
        </Reveal>
        <div className={styles.filmCaption}>
          <span>Our foundation, in motion</span>
          <span>Film</span>
        </div>
      </section>

      {/* ---------- Explore ---------- */}
      <section
        className={styles.exploreSection}
        aria-labelledby="explore-title"
      >
        <Reveal className={styles.sectionHead}>
          <span className="eyebrow">Explore 1952 Africa</span>
          <h2 id="explore-title">
            Art is not a category. It is a way forward.
          </h2>
        </Reveal>

        <div className={styles.pathwayGrid}>
          {pathways
            .map((item) =>
              item.fromGallery
                ? { ...item, image: featured?.src, credit: featured }
                : item
            )
            .map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <Link className={styles.pathwayCard} href={item.href}>
                  <div className={styles.cardImage}>
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={
                          item.credit
                            ? `${item.credit.title} by ${item.credit.artist}`
                            : ''
                        }
                        fill
                        sizes="(max-width: 800px) 100vw, 33vw"
                      />
                    )}
                    {item.credit && (
                      <span className={styles.imageCredit}>
                        <em>{item.credit.title}</em> — {item.credit.artist}
                      </span>
                    )}
                  </div>
                  <div className={styles.cardBody}>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                    <span className={styles.cardArrow}>
                      <PiArrowUpRight aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
        </div>
      </section>

      {/* ---------- The Chizi Wigwe Prize ---------- */}
      <section className={styles.prizeSection} aria-labelledby="prize-title">
        <div className={styles.prizeInner}>
          <Reveal className={styles.prizeContent}>
            <span className={`eyebrow ${styles.goldText}`}>
              The Chizi Wigwe Prize
            </span>
            <h2 id="prize-title">Looking towards Africa in 2100.</h2>
            <p>
              A $15,000 award for an exceptional artist whose work embodies the
              spirit of African Futurism — created with the HOW Foundation to
              support ambitious, future-facing practice.
            </p>
            <Button variant="primary-reverse" href="/chizi-wigwe-prize">
              Discover the prize <PiArrowRight />
            </Button>
          </Reveal>
          <Reveal className={styles.prizeFigure} as="figure" delay={0.1}>
            <div className={styles.prizeImage}>
              <Image
                src="/images/father-nature.jpg"
                alt="Father Nature by Jane Ugah"
                fill
                sizes="(max-width: 900px) 100vw, 520px"
              />
            </div>
            <figcaption>
              <Link href={`/works/${featuredWorks.fatherNature.workId}`}>
                <em>{featuredWorks.fatherNature.title}</em> —{' '}
                {featuredWorks.fatherNature.artist}
              </Link>
              <span>African Futurism</span>
            </figcaption>
          </Reveal>
        </div>
        <Bands tone="gold" size="sm" />
      </section>

      {/* ---------- Legacy ---------- */}
      <section className={styles.legacySection} aria-labelledby="legacy-title">
        <Reveal className={styles.legacyFigure} as="figure">
          <Image
            src="/images/ezim.jpg"
            alt="Ezim Julia Egbuagu-Ugwu"
            width={729}
            height={537}
            sizes="(max-width: 800px) 100vw, 440px"
          />
          <figcaption>Ezim Julia Egbuagu-Ugwu · b. 1952</figcaption>
        </Reveal>
        <Reveal className={styles.legacyContent} delay={0.1}>
          <span className="eyebrow">The spirit behind 1952</span>
          <h2 id="legacy-title">A space for art, culture and the people.</h2>
          <p>
            This foundation is dedicated to the loving memory of Ezim Julia
            Egbuagu-Ugwu, born July 1, 1952 in Ngwo, Enugu State, Nigeria. A
            lover of the people.
          </p>
          <span className={styles.hashtag}>#ezimliveson</span>
        </Reveal>
      </section>

      {/* ---------- Support ---------- */}
      <section
        className={styles.supportSection}
        aria-labelledby="support-title"
      >
        <Reveal className={styles.supportInner}>
          <span className="eyebrow">Make the work possible</span>
          <h2 id="support-title">
            Help the next generation of African artists thrive.
          </h2>
          <Button variant="primary" href="/donate">
            Support 1952 Africa <PiArrowRight />
          </Button>
        </Reveal>
      </section>
    </main>
  );
}
