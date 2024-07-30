import Section from '@/components/Section';
import FormBody from '@/components/formElements/FormBody';
import FormContainer from '@/components/formElements/FormContainer';
import FormInput from '@/components/formElements/FormInput';
import FormMain from '@/components/formElements/FormMain';
import { donate } from '@/services/apiDonate';
import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

function RaffleForm() {
  const [currency, setCurrency] = useState('NGN');
  const [amount, setAmount] = useState('');

  const { register, formState, handleSubmit, setValue } = useForm();
  const { errors } = formState;

  const formActions = { register, errors };

  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    switch (currency) {
      case 'USD':
        setAmount(500);
        break;
      case 'NGN':
        setAmount(500 * 1000);
        break;
      default:
        setAmount(0);
    }
  }, [currency, setValue]);

  async function onSubmit(data) {
    setIsNavigating(true);
    const newData = {
      ...data,
      currency: currency,
      amount: currency === 'NGN' ? 500000 : 500,
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
        <FormContainer
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          padding={false}
        >
          <FormBody title="Purchase your raffle ticket" disabled={isNavigating}>
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
              placeholder="08012345678"
              formActions={formActions}
              required={false}
            />
            <FormInput
              type="select"
              id="currency"
              label="Currency"
              onChange={(e) => setCurrency(e.target.value)}
              formActions={formActions}
            >
              {/* <option value="USD">US Dollars</option> */}
              <option value="NGN">Nigerian Naira</option>
            </FormInput>
            <FormInput
              type="number"
              id="amount"
              label="Amount"
              placeholder=""
              formActions={formActions}
              disabled={true}
              defaultValue={amount}
              required={false}
            />
          </FormBody>
        </FormContainer>
      </FormMain>
    </Section>
  );
}

export default RaffleForm;
