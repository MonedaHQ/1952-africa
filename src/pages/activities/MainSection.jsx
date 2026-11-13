import Image from 'next/image';
import { PiClipboardTextLight, PiUserPlus } from 'react-icons/pi';

import Button from '@/components/Button';
import Loader from '@/components/Loader';
import Section from '@/components/Section';

import styles from './styles/mainsection.module.css';

function MainSection({ activity, program, artists }) {
  if (!activity || !program || !artists) return <Loader />;

  return (
    <Section>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className="eyebrow">Activity</span>
            <h1>{activity.title}</h1>
            <ul className={styles.activityMetrics}>
              <li>
                <PiClipboardTextLight />
                <Button variant="link-light" href={`/programs/${program.id}`}>
                  {program.title}
                </Button>
              </li>
              <li>
                <PiUserPlus /> {artists.meta.totalItems} Artists
              </li>
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={activity.image_url}
              width={960}
              height={720}
              alt={activity.title}
              sizes="(max-width: 900px) 100vw, 520px"
              draggable={false}
              priority
            />
          </div>
        </div>

      </div>
    </Section>
  );
}

export default MainSection;
