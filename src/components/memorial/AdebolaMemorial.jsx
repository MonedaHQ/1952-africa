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
  title: 'A Community of Love',
  subtitle: 'In Memory of Adebola Ewaoluwa Adesanya',
  intro:
    'A collective expression of love and support for his wife, children, and those closest to him.',
  about: [
    'Adebola Ewaoluwa Adesanya was a devoted husband, father, son, brother, and friend; he brought joy into every room he entered, and gave generously of himself in every season of life. To know him was to be better for it.',
    'This page has been created by those who loved him, friends, colleagues, and partners, who wish to honour his memory in a practical and meaningful way.',
    'We stand with his family in the same spirit of care, generosity, and kindness that he extended to others; this is what community looks like when it matters most.',
    'Contributions received through this page will be presented to his wife and children within the month of May 2026; a coordinated expression of love from those whose lives he touched.',
  ],
  contributionIntro:
    'Contributions are coordinated through 1952 Africa Arts Initiative, which Adebola supported; the organisation is acting solely as a collection channel for this effort. All funds will be directed to his wife and children, with full transparency.',
  accounts: [
    {
      heading: 'International Contributions',
      currency: 'USD',
      details: [
        ['Account Name', '1952 Africa Arts Initiative'],
        ['Bank Name', 'Access Bank'],
        ['Account Number', '1650873994'],
        ['Swift Code', 'ABNGNGLA'],
        ['Routing Number', '021000089'],
        ['Intermediary Swift', 'CITIUS33'],
      ],
    },
    {
      heading: 'Nigeria Contributions',
      currency: 'Naira',
      details: [
        ['Account Name', '1952 Africa Arts Initiative'],
        ['Bank Name', 'Access Bank'],
        ['Account Number', '1650628008'],
      ],
    },
  ],
  timeline: [
    'Contributions will be received between the 5th of May and the 19th of May; this allows for a clear and timely update, and for a meaningful presentation to be made to the family within the latter part of the month.',
    'Additional contributions may still be received until the end of May; however, this channel will close at the end of the month, and no further payments will be received beyond that point.',
  ],
  closing: [
    'We hold his family in our thoughts and prayers.',
    'May his memory be a blessing, and may his legacy of love continue to live on through all who knew him.',
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
            <h1>{memorial.title}</h1>
            <p className={styles.subtitle}>{memorial.subtitle}</p>
            <p>{memorial.intro}</p>
            <div className={styles.actions}>
              <Button
                variant="primary"
                onClick={() => handleScrollTo('memorial-donation-form', 80)}
              >
                Contribute online
              </Button>
              <a
                href={memorial.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.sourceLink}
              >
                Leave a tribute
              </a>
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
            <h2>{memorial.intro}</h2>
            {memorial.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              For tributes, memories, and messages, please visit the dedicated
              tribute page linked separately.
            </p>
          </article>

          <aside className={styles.sidePanel}>
            <h3>In loving memory</h3>
            <p>
              Contributions will be presented to Adebola&apos;s wife and
              children within May 2026.
            </p>
            <a href={memorial.sourceUrl} target="_blank" rel="noreferrer">
              Leave a tribute
            </a>
          </aside>
        </div>
      </Section>

      <Section>
        <div className={styles.contributionSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Contribution details</p>
            <h2>Coordinated through 1952 Africa Arts Initiative</h2>
            <p>{memorial.contributionIntro}</p>
          </div>

          <div className={styles.accountGrid}>
            {memorial.accounts.map((account) => (
              <article className={styles.accountCard} key={account.heading}>
                <div>
                  <p className={styles.accountCurrency}>{account.currency}</p>
                  <h3>{account.heading}</h3>
                </div>
                <dl>
                  {account.details.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>

          <p className={styles.referenceNote}>
            Please include your full name as the payment reference where
            possible; this allows contributions to be properly recorded.
            Anonymous contributions are welcome and will be respected.
          </p>
        </div>
      </Section>

      <Section>
        <div className={styles.timeline}>
          <p className={styles.eyebrow}>Contribution timeline</p>
          <div className={styles.timelineGrid}>
            {memorial.timeline.map((item, index) => (
              <article className={styles.timelineItem} key={item}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="dark">
        <div className={styles.closing}>
          <p className={styles.eyebrow}>Closing</p>
          {memorial.closing.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h2>In loving memory of {memorial.name}</h2>
        </div>
      </Section>

      <Section variant="dark">
        <div className={styles.donationIntro} id="donate-in-memory">
          <p className={styles.eyebrow}>Online contribution</p>
          <h2>Contribute in support of Adebola&apos;s family</h2>
          <p>
            Use the form below to make a contribution through the secure 1952
            Africa payment channel.
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
            <FormBody
              title="Make an online contribution"
              disabled={isNavigating}
            >
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
