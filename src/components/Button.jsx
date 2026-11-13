import Link from 'next/link';
import styles from './styles/button.module.css';

function Button({
  children,
  onClick,
  href = null,
  variant,
  onMouseEnter = null,
  onMouseLeave = null,
  type = 'button',
  disabled,
  external = false,
  ariaLabel,
}) {
  const commonProps = {
    className: `${styles.button} ${styles[variant] || ''}`,
    onClick,
    onMouseEnter,
    onMouseLeave,
    'aria-label': ariaLabel,
  };

  if (href) {
    const isExternal = external || /^(https?:|mailto:|tel:)/.test(href);
    if (isExternal) {
      const newTab = /^https?:/.test(href);
      return (
        <a
          {...commonProps}
          href={href}
          target={newTab ? '_blank' : undefined}
          rel={newTab ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link {...commonProps} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button {...commonProps} type={type} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
