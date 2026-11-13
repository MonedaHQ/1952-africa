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
import { PiArrowUpRight } from 'react-icons/pi';

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


  return (
    <Section>
      <div className={styles.main}>
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
      </div>
    </Section>
  );
}

function Events({ title, eventsdata, couldSponsor }) {
  return (
    <div className={styles.events}>
      <h2>{title}</h2>
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
    <article className={styles.event}>
      <div className={styles.imageContainer}>
        <Image
          width={640}
          height={480}
          sizes="(max-width: 700px) 100vw, 320px"
          src={event.image_url}
          alt={event.title}
        />
      </div>
      <div className={styles.details}>
        <span className={styles.eventLabel}>
          {simplifyDateString(event.start_date)} — {simplifyDateString(event.end_date)}
        </span>
        <h3>{event.title}</h3>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: event.description }} />
        {event.open_to_sponsorship && couldSponsor && (
          <Button variant="secondary" href="/donate">
            Partner on this event
          </Button>
        )}
      </div>
    </article>
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
