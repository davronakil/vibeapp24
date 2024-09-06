import { GetServerSideProps } from 'next';
import { fetchEvents, Event } from '../lib/firebase';
import { Home } from '../components/Home'; // Ensure this matches the actual file name

interface HomePageProps {
    events: Event[];
}

export default function HomePage({ events }: HomePageProps) {
    return <Home events={events} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
    const events = await fetchEvents();
    return {
        props: {
            events,
        },
    };
};
