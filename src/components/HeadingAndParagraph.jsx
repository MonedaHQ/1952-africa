import Section from './Section';

import styles from './styles/headingandparagraph.module.css';

function HeadingAndParagraph({ content }) {
  return (
    <>
      {content.map((item) => (
        <Section key={item.paragraph}>
          {item.heading && <h3 className={styles.heading}>{item.heading}</h3>}
          <div dangerouslySetInnerHTML={{ __html: item.paragraph }} />
        </Section>
      ))}
    </>
  );
}

export default HeadingAndParagraph;
