import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

import Bands from '@/components/Bands';
import Button from '@/components/Button';
import FormBody from '@/components/formElements/FormBody';
import FormContainer from '@/components/formElements/FormContainer';
import FormInput from '@/components/formElements/FormInput';
import FormMain from '@/components/formElements/FormMain';
import Section from '@/components/Section';
import { useSmoothScroll } from '@/context/SmoothScrollContext';
import { donate } from '@/services/apiDonate';

import styles from './styles/adebola.module.css';

const memorial = {
  name: 'Adebola Ewaoluwa Adesanya',
  sourceUrl: 'https://www.forevermissed.com/adebola-ewaoluwa-adesanya/about', // Original memorial URL on ForeverMissed
  years: '1985 - 2026',
  age: '40 years old',
  born: 'Born on July 30, 1985',
  passed: 'Passed away on May 1, 2026',
  quote: 'Let the memory of Adebola be with us forever.',
  intro:
    'This memorial page honours the life and memory of Adebola Ewaoluwa Adesanya.',
  about: [
    'This memorial website was created in memory of our loved one, Adebola Adesanya, 40 years old, born on July 30, 1985, and passed away on Friday, May 1. We will remember him forever.',
    'Adebola Ewaoluwa Adesanya is remembered with love, gratitude, and deep respect by family, friends, and everyone whose life was touched by him.',
  ],
  image: {
    src: '/assets/memorial/adebola-ewaoluwa.png',
    alt: 'Adebola Ewaoluwa Adesanya',
  },
  photos: [],
};

function AdebolaMemorial() {
  const { handleScrollTo } = useSmoothScroll();

  return (
    <div className={styles.page}>
      <Section>
        <main className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>In loving memory</p>
            <h1>{memorial.name}</h1>
            <p className={styles.years}>{memorial.years}</p>
            <p>{memorial.intro}</p>
            <div className={styles.actions}>
              <Button
                variant="primary"
                onClick={() => handleScrollTo('memorial-donation-form', 80)}
              >
                Donate in memory
              </Button>
              {/* <a
                href={memorial.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.sourceLink}
              >
                Original memorial <HiOutlineArrowTopRightOnSquare />
              </a> */}
            </div>
          </div>
          <MemorialImage />
        </main>
      </Section>

      <Bands />

      <Section>
        <div className={styles.contentGrid}>
          <article className={styles.story}>
            <p className={styles.eyebrow}>About</p>
            <h2>Remembering Adebola</h2>
            <blockquote>{memorial.quote}</blockquote>
            <ul className={styles.memorialFacts}>
              <li>{memorial.age}</li>
              <li>{memorial.born}</li>
              <li>{memorial.passed}</li>
            </ul>
            {memorial.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <aside className={styles.sidePanel}>
            <h3>Memorial source</h3>
            <p>
              Additional photos and family memories are available on the
              original ForeverMissed memorial.
            </p>
            <a href={memorial.sourceUrl} target="_blank" rel="noreferrer">
              Visit memorial
            </a>
          </aside>
        </div>
      </Section>

      {memorial.photos.length > 0 && (
        <Section>
          <div className={styles.gallery}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Gallery</p>
              <h2>Photos</h2>
            </div>
            <div className={styles.photoGrid}>
              {memorial.photos.map((photo) => (
                <figure key={photo.src} className={styles.photoCard}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={600}
                    className={styles.photoImage}
                  />
                  {photo.caption && <figcaption>{photo.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Section variant="dark">
        <div className={styles.donationIntro} id="donate-in-memory">
          <p className={styles.eyebrow}>Support</p>
          <h2>Donate in memory of Adebola</h2>
          <p>
            Use the form below to make a memorial donation through the same
            payment system used across 1952 Africa.
          </p>
        </div>
      </Section>

      <MemorialDonationForm />
    </div>
  );
}

function MemorialImage() {
  return (
    <figure className={styles.imageFrame}>
      <Image
        src={memorial.image.src}
        alt={memorial.image.alt}
        width={900}
        height={1125}
        className={styles.image}
        priority
      />
      {memorial.caption && <figcaption>{memorial.caption}</figcaption>}
    </figure>
  );
}

function MemorialDonationForm() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const [isNavigating, setIsNavigating] = useState(false);
  const [formError, setFormError] = useState('');
  const formActions = { register, errors };

  async function onSubmit(data) {
    setIsNavigating(true);
    setFormError('');

    try {
      const resData = await donate({
        ...data,
        amount: +data.amount,
        currency: data.currency || 'NGN',
        pledge_type: 'coperate',
        for_raffle: false,
        support_type: 'event',
      });

      const { authorization_url } = resData.data;
      window.localStorage.setItem(
        'donationReturnContext',
        JSON.stringify({
          type: 'memorial',
        }),
      );
      window.location.href = authorization_url;
    } catch (error) {
      setIsNavigating(false);
      setFormError(
        error.message || 'Unable to start payment. Please try again.',
      );
    }
  }

  return (
    <Section>
      <div id="memorial-donation-form">
        <FormMain>
          <FormContainer handleSubmit={handleSubmit} onSubmit={onSubmit}>
            <FormBody title="Make a memorial donation" disabled={isNavigating}>
              <>
                {/* <FormInput
                type="text"
                id="company"
                label="Organization"
                placeholder=""
                formActions={formActions}
                required={false}
              /> */}

                <FormInput
                  type="text"
                  id="first_name"
                  label="First name"
                  placeholder=""
                  formActions={formActions}
                />
                <FormInput
                  type="text"
                  id="last_name"
                  label="Last name"
                  placeholder=""
                  formActions={formActions}
                />
                <FormInput
                  type="email"
                  id="email"
                  label="Email"
                  placeholder=""
                  formActions={formActions}
                />
                <FormInput
                  type="number"
                  id="phone_number"
                  label="Phone number (optional)"
                  placeholder="08012345678"
                  formActions={formActions}
                  required={false}
                />
                <FormInput
                  type="select"
                  id="currency"
                  label="Currency"
                  formActions={formActions}
                >
                  <option value="">Please select...</option>
                  <option value="USD">US Dollars</option>
                  <option value="NGN">Nigerian Naira</option>
                </FormInput>
                <FormInput
                  type="number"
                  id="amount"
                  label="Amount"
                  placeholder=""
                  formActions={formActions}
                />
                {formError && <p className={styles.formError}>{formError}</p>}
              </>
            </FormBody>
          </FormContainer>
        </FormMain>
      </div>
    </Section>
  );
}

export default AdebolaMemorial;
