import Section from '@/components/Section';
import FormBody from '@/components/formElements/FormBody';
import FormContainer from '@/components/formElements/FormContainer';
import FormInput from '@/components/formElements/FormInput';
import FormMain from '@/components/formElements/FormMain';
import { useForm } from 'react-hook-form';

import styles from './styles/contactform.module.css';
import { useSubmitForm } from '@/hooks/useSubmitForm';
import { useState } from 'react';
import { useRouter } from 'next/router';

function ContactForm() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const formActions = { register, errors };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { submitForm } = useSubmitForm();

  function onSubmit(data) {
    setIsSubmitting(true);
    submitForm(
      { data, subject: 'Contact Form Submission' },
      { onSuccess: () => router.push('/') }
    );
  }

  return (
    <Section>
      <FormMain>
        <FormContainer
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          padding={false}
        >
          <FormBody title="We'd love to hear from you!" disabled={isSubmitting}>
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
                label="Message"
                placeholder="Your message goes here"
                formActions={formActions}
              />
            </div>
          </FormBody>
        </FormContainer>
      </FormMain>
    </Section>
  );
}

export default ContactForm;
