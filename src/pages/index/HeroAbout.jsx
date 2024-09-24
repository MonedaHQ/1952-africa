import Section from '@/components/Section';
import styles from './styles/heroabout.module.css';
import VideoEmbed from '@/components/VideoEmbed';

function HeroAbout() {
  return (
    <Section>
      <main className={styles.main} id="main">
        <VideoEmbed
          title="About 1952 Africa"
          linkUrl="https://www.youtube.com/watch?v=rQfIosudgxE"
        />
        <Content />
      </main>
    </Section>
  );
}

function Content() {
  const content = {
    heading: 'About our Foundation',
    paragraph:
      '1952 Africa is an art foundation that is committed to the growth of African art and seeks to provide the tools and resources for African artists to develop a flourishing, respected and globally recognized career. <br/> <br/>We are dedicated to African art, culture and history, supporting different forms of artistic expression out of Africa. We believe in the brilliance of African creative talent and it is our goal to build an ecosystem in which artists have the opportunity to grow and thrive.<br/><br/>This space is dedicated to the loving memory of Ezim Julia Egbuagu-Ugwu, Born July 1, 1952 in Ngwo, Enugu State, Nigeria. A lover of the people.',
    hashtag: '#ezimliveson',
  };

  return (
    <div className={styles.content}>
      <h3 className={styles.heading}>{content.heading}</h3>
      <div className={styles.paragraphs}>
        <p dangerouslySetInnerHTML={{ __html: content.paragraph }} />
      </div>
      <h4 className={styles.hashtag}>{content.hashtag}</h4>
    </div>
  );
}

export default HeroAbout;
