import { HiOutlineHandRaised } from 'react-icons/hi2';

import Section from '@/components/Section';
import { useRouter } from 'next/router';

import styles from './styles/donationmethods.module.css';
import { capitalizeFirstLetter } from '@/utils/helpers';

import { useForm } from 'react-hook-form';

import FormContainer from '@/components/formElements/FormContainer';
import FormBody from '@/components/formElements/FormBody';
import FormInput from '@/components/formElements/FormInput';
import FormMain from '@/components/formElements/FormMain';

function DonationMethods() {
  const router = useRouter();
  const { method } = router.query;
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const formActions = { register, errors };

  let form;

  if (!method) {
    form = <NothingSelected />;
  } else if (method) {
    if (method === 'financial') {
      form = <FinancialDonation formActions={formActions} />;
    } else if (method === 'items') {
      form = <ItemDonation formActions={formActions} />;
    } else if (method === 'partner') {
      form = <Partner formActions={formActions} />;
    }
  }

  function onSubmit(data) {
    console.log(data);
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

  const donationMethods = ['financial', 'items', 'partner'];

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
            {capitalizeFirstLetter(method)}
          </button>
        ))}
      </div>
    </>
  );
}

function NothingSelected() {
  return (
    <div className={styles.empty}>
      <HiOutlineHandRaised />
      <p>Please select a donation method to continue</p>
    </div>
  );
}

function FinancialDonation({ formActions }) {
  return (
    <FormBody title="Make a financial donation">
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
      </>
    </FormBody>
  );
}

function ItemDonation({ formActions }) {
  return (
    <FormBody title="Make am item donation">
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

function Partner({ formActions }) {
  return (
    <FormBody title="Partner with us on events">
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
          <option value="">Please select...</option>
        </FormInput>
      </>
    </FormBody>
  );
}

export default DonationMethods;
