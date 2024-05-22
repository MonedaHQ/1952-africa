import Section from './Section';
import styles from './styles/sponsorshipbenefits.module.css';

function SponsorshipBenefitList({ icon, title, listArray }) {
  return (
    <div className={styles.listBox}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.heading}>{title}</h3>
      <ul className={styles.list}>
        {listArray.map((listItem) => (
          <li key={listItem}>{listItem}</li>
        ))}
      </ul>
    </div>
  );
}

export default SponsorshipBenefitList;
