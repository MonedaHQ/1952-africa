import Section from './Section';

import styles from './styles/headingandparagraph.module.css';

/** All blocks share one section, so spacing between them stays tight. */
function HeadingAndParagraph({ content }) {
  const blocks = content.filter((item) => item.paragraph);
  if (!blocks.length) return null;

  return (
    <Section>
      <div className={styles.stack}>
        {blocks.map((item, index) => (
          <div
            key={item.heading || index}
            className={`${styles.contentContainer} ${
              item.heading ? '' : styles.withoutHeading
            }`}
          >
            {item.heading && <h2 className={styles.heading}>{item.heading}</h2>}
            <div
              className={styles.paragraph}
              dangerouslySetInnerHTML={{ __html: item.paragraph }}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default HeadingAndParagraph;
