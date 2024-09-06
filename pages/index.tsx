import { GetServerSideProps } from 'next';
import { fetchEvents, Event } from '../lib/firebase';
import { Home } from '../components/home'; // Corrected import path

interface HomePageProps {
    events: Event[];
}

export default function HomePage({ events }: HomePageProps) {
    return <Home events={events} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
    const events = await fetchEvents();

    // Ensure events is an array
    const sanitizedEvents = Array.isArray(events) ? events.map(event => ({
        ...event,
        lastDoc: event.lastDoc ?? null,
    })) : [];

    return {
        props: {
            events: sanitizedEvents,
        },
    };
};
