import styles from './styles/forminput.module.css';

function FormInput({
  children,
  type,
  id,
  label,
  placeholder,
  defaultValue,
  formActions,
  onChange = null,
  required = true,
  disabled = false,
}) {
  const { register, errors } = formActions;

  if (type === 'textarea')
    return (
      <fieldset className={styles.fieldset}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <textarea
          id={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          {...register(id, {
            required: required ? 'This field is required' : false,
          })}
          disabled={disabled}
          className={styles.textarea}
          required={required}
        />
        {errors[id] && <p className={styles.warning}>{errors[id].message}</p>}
      </fieldset>
    );

  if (type === 'select') {
    if (type === 'select') {
      let selectProps;
      if (onChange) {
        selectProps = {
          defaultValue,
          required,
          onChange,
          disabled,
          className: styles.select,
        };
      } else {
        selectProps = {
          defaultValue,

          disabled,
          className: styles.select,
        };
      }

      return (
        <fieldset className={styles.fieldset}>
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
          {onChange && <select {...selectProps}>{children}</select>}
          {!onChange && (
            <select
              {...selectProps}
              {...register(id, {
                required: required ? 'This field is required' : false,
              })}
            >
              {children}
            </select>
          )}
          {errors[id] && <p className={styles.warning}>{errors[id].message}</p>}
        </fieldset>
      );
    }
  }

  if (type === 'date')
    return (
      <fieldset className={styles.fieldset}>
        <label htmlFor="date" className={styles.label}>
          {label}
        </label>
        <input
          id={id}
          type={type}
          defaultValue={defaultValue}
          onChange={onChange}
          {...register(id, {
            required: required ? 'This field is required' : false,
          })}
          disabled={disabled}
          required={required}
        />
        {errors[id] && <p className={styles.warning}>{errors[id].message}</p>}
      </fieldset>
    );

  if (type === 'email') {
    return (
      <fieldset className={styles.fieldset}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          {...register(id, {
            required: required ? 'This field is required' : false,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please specify a valid email',
            },
          })}
          disabled={disabled}
          className={styles.input}
          required={required}
        />
        {errors[id] && <p className={styles.warning}>{errors[id].message}</p>}
      </fieldset>
    );
  }

  return (
    <fieldset className={styles.fieldset}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        {...register(id, {
          required: required ? 'This field is required' : false,
        })}
        disabled={disabled}
        className={styles.input}
        required={required}
      />
      {errors[id] && <p className={styles.warning}>{errors[id].message}</p>}
    </fieldset>
  );
}

export default FormInput;
