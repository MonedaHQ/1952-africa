import { HiOutlineHandRaised, HiOutlineMinusCircle } from 'react-icons/hi2';

import Section from '@/components/Section';
import { useRouter } from 'next/router';

import styles from './styles/donationmethods.module.css';
import { capitalizeFirstLetter, getCurrentDateString } from '@/utils/helpers';

import { useForm } from 'react-hook-form';

import FormContainer from '@/components/formElements/FormContainer';
import FormBody from '@/components/formElements/FormBody';
import FormInput from '@/components/formElements/FormInput';
import FormMain from '@/components/formElements/FormMain';
import { useEffect, useState } from 'react';
import { donate } from '@/services/apiDonate';
import { useSubmitForm } from '@/hooks/useSubmitForm';
import Loader from '@/components/Loader';
import { getEvents } from '@/services/apiEvents';

function DonationMethods() {
  const router = useRouter();
  const { method } = router.query;
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const formActions = { register, errors };

  const { submitForm, isSubmitting } = useSubmitForm();

  const [isNavigating, setIsNavigating] = useState(false);

  const date = getCurrentDateString();
  const [isRendered, setIsRendered] = useState(false);
  const [upcomingEvents, setUpcomingEvents] = useState(null);

  useEffect(
    function () {
      async function fetchEvents() {
        const upcomingEvents = await getEvents({
          start_date: date,
          sponsored: true,
        });
        setUpcomingEvents(upcomingEvents.data);
      }

      fetchEvents(date);
      setIsRendered(true);
    },
    [date]
  );

  if (!isRendered || !upcomingEvents) return <Loader />;

  let form;

  if (!method) {
    // form = (
    //   <NothingSelected
    //     icon={<HiOutlineHandRaised />}
    //     paragraph="Please select a donation method to continue"
    //   />
    // );
    router.push(
      { pathname: router.pathname, query: { method: 'corporate' } },
      undefined,
      { scroll: false }
    );
  } else if (method) {
    if (method === 'corporate') {
      form = (
        <FinancialDonation
          formActions={formActions}
          isNavigating={isNavigating}
        />
      );
    }
    // else if (method === 'individual') {
    //   form = (
    //     <ItemDonation formActions={formActions} isNavigating={isNavigating} />
    //   );
    // }
  }

  async function onSubmit(data) {
    setIsNavigating(true);
    await financialDonation(data);
    // if (method === 'corporate') {
    //   await financialDonation(data);
    // } else if (method === 'items') {
    //   submitForm(
    //     { data, subject: 'Item Donation Request' },
    //     { onSuccess: () => router.push('/') }
    //   );
    // } else if (method === 'partner') {
    //   submitForm(
    //     { data, subject: 'Partnership Request' },
    //     { onSuccess: () => router.push('/') }
    //   );
    // }
  }

  async function financialDonation(data) {
    const newData = {
      ...data,
      amount: +data.amount,
      currency: data.currency === undefined ? 'NGN' : data.currency,
      // pledge_to: data.pledge_to === '' ? 'event' : data.pledge_to,
      for_raffle: false,
    };

    console.log(newData);
    const resData = await donate(newData);

    const { data: response } = resData;

    const { authorization_url } = response;
    window.location.href = authorization_url;
  }

  return (
    <Section>
      <FormMain>
        <ChooseMethod reset={reset} />
        <FormContainer
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          padding={method ? false : true}
        >
          {form}
        </FormContainer>
      </FormMain>
    </Section>
  );
}

function ChooseMethod({ reset }) {
  const router = useRouter();

  const donationMethods = ['corporate'];

  function handleQueryParams(value) {
    reset();
    router.push(
      { pathname: router.pathname, query: { method: value } },
      undefined,
      { scroll: false }
    );
  }
  return (
    <>
      <h3>Choose a donation method.</h3>
      <div className={styles.btnContainer}>
        {donationMethods.map((method) => (
          <button
            onClick={() => handleQueryParams(method)}
            key={method}
            className={`${styles.btn} ${
              router.query.method === method ? styles.active : ''
            }`}
          >
            {capitalizeFirstLetter(method)} Pledge
          </button>
        ))}
      </div>
    </>
  );
}

function NothingSelected({ icon, paragraph }) {
  return (
    <div className={styles.empty}>
      {icon}
      <p>{paragraph}</p>
    </div>
  );
}

function FinancialDonation({ formActions, isNavigating }) {
  return (
    <FormBody
      title="Support the Future of African Artists"
      disabled={isNavigating}
    >
      <>
        <FormInput
          type="text"
          id="organization"
          label="Organization"
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
        <FormInput
          type="select"
          id="pledge_to"
          label="Donate towards.."
          formActions={formActions}
        >
          <option value="">Please select...</option>
          <option value="event">Event</option>
          <option value="prize">Prize</option>
        </FormInput>
      </>
    </FormBody>
  );
}

function ItemDonation({ formActions, isNavigating }) {
  return (
    <FormBody title="Make am item donation" disabled={isNavigating}>
      <>
        <FormInput
          type="text"
          id="first_name"
          label="First name"
          placeholder="John"
          formActions={formActions}
        />
        <FormInput
          type="text"
          id="last_name"
          label="Last name"
          placeholder="Doe"
          formActions={formActions}
        />
        <FormInput
          type="email"
          id="email"
          label="Email"
          placeholder="j.doe@example.com"
          formActions={formActions}
        />
        <FormInput
          type="number"
          id="phone_number"
          label="Phone number (optional)"
          placeholder="080123456789"
          formActions={formActions}
          required={false}
        />
        <div className={styles.textarea}>
          <FormInput
            type="textarea"
            id="description"
            label="Brief description of the item"
            placeholder="The item in question is a lovely piece of art"
            formActions={formActions}
          />
        </div>
      </>
    </FormBody>
  );
}

function Partner({ formActions, isNavigating, upcomingEvents }) {
  return (
    <FormBody title="Partner with us on events" disabled={isNavigating}>
      <>
        <FormInput
          type="text"
          id="first_name"
          label="First name"
          placeholder="John"
          formActions={formActions}
        />
        <FormInput
          type="text"
          id="last_name"
          label="Last name"
          placeholder="Doe"
          formActions={formActions}
        />

        <FormInput
          type="email"
          id="email"
          label="Email"
          placeholder="j.doe@example.com"
          formActions={formActions}
        />
        <FormInput
          type="text"
          id="organization"
          label="Name of Organization"
          placeholder="ABC Ltd"
          formActions={formActions}
        />
        <FormInput
          type="number"
          id="phone_number"
          label="Phone number (optional)"
          placeholder="080123456789"
          formActions={formActions}
          required={false}
        />
        <FormInput
          type="select"
          id="event"
          label="Select event"
          formActions={formActions}
        >
          {upcomingEvents.map((event) => (
            <option value={event.title} key={event.id}>
              {event.title}
            </option>
          ))}
        </FormInput>
      </>
    </FormBody>
  );
}

export default DonationMethods;
