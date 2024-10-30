import Button from '@/components/Button';
import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';
import Section from '@/components/Section';
import { getEvents } from '@/services/apiEvents';
import { getCurrentDateString, simplifyDateString } from '@/utils/helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from './styles/eventslist.module.css';

function EventsList() {
  const date = getCurrentDateString();
  const [isRendered, setIsRendered] = useState(null);
  const [upcomingEvents, setUpcomingEvents] = useState(null);
  const [runningEvents, setRunningEvents] = useState(null);
  const [allEvents, setAllEvents] = useState(null);

  useEffect(
    function () {
      async function fetchEvents() {
        const allEvents = await getEvents({});
        setAllEvents(allEvents);
        const upcomingEvents = await getEvents({ start_date: date });
        setUpcomingEvents(upcomingEvents);
        const runningEvents = await getEvents({
          start_date_running: date,
          end_date_running: date,
        });
        setRunningEvents(runningEvents);
      }

      fetchEvents(date);
      setIsRendered(true);
    },
    [date]
  );
  if (!isRendered || !runningEvents || !upcomingEvents || !allEvents)
    return <Loader />;

  console.log(upcomingEvents);

  return (
    <Section>
      <main className={styles.main}>
        <Events
          title="Running events"
          eventsdata={runningEvents}
          couldSponsor={false}
        />
        <Events
          title="Upcoming events"
          eventsdata={upcomingEvents}
          couldSponsor={true}
        />
        {/* <Events
          title="All events"
          eventsdata={allEvents}
          couldSponsor={false}
        /> */}
      </main>
    </Section>
  );
}

function Events({ title, eventsdata, couldSponsor }) {
  return (
    <div className={styles.events}>
      <h3>
        {title} ({eventsdata.meta.totalItems})
      </h3>
      <div className={styles.eventsContainer}>
        {eventsdata.data.length < 1 ? (
          <NoData />
        ) : (
          eventsdata.data.map((event) => (
            <Event key={event.id} event={event} couldSponsor={couldSponsor} />
          ))
        )}
      </div>
    </div>
  );
}

function Event({ event, couldSponsor }) {
  const router = useRouter();

  return (
    <div className={styles.event}>
      <div className={styles.imageContainer}>
        <Image
          width={200}
          height={200}
          src={event.image_url}
          alt={event.title}
        />
      </div>
      <div className={styles.details}>
        <h4>{event.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: event.description }} />
        <p>
          Starting {simplifyDateString(event.start_date)} till{' '}
          {simplifyDateString(event.end_date)}
        </p>
        {event.open_to_sponsorship && couldSponsor && (
          <Button variant="primary" onClick={() => router.push('/donate')}>
            Partner
          </Button>
        )}
      </div>
    </div>
  );
}

function NoData() {
  return (
    <div className={styles.noEvents}>
      <p>There are no events to display at this time</p>
    </div>
  );
}

export default EventsList;
