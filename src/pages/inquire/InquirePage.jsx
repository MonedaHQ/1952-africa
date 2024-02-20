import Section from '@/components/Section';
import styles from './styles/inquirepage.module.css';
import FormMain from '@/components/formElements/FormMain';
import { useForm } from 'react-hook-form';
import FormContainer from '@/components/formElements/FormContainer';
import FormBody from '@/components/formElements/FormBody';
import FormInput from '@/components/formElements/FormInput';

function InquirePage({ work, artist }) {
  const { register, formState, handleSubmit, setValue } = useForm();
  const { errors } = formState;

  const formActions = { register, errors };

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <main className={styles.main}>
      <Section>
        <FormMain>
          <FormContainer
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            padding={false}
          >
            <FormBody title={`Inquire about ${work.title}`}>
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
                  defaultValue={`I am interested in ${work.title} by ${artist.first_name} ${artist.last_name}. Can I find out more about this work?`}
                />
              </div>
            </FormBody>
          </FormContainer>
        </FormMain>
      </Section>
    </main>
  );
}

export default InquirePage;
