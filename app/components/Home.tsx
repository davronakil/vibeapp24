import { FC } from 'react';
import { Card } from './Card'; // Ensure the correct file name and path
import { Event } from '../lib/firebase';

interface HomeProps {
    events: Event[];
}

export const Home: FC<HomeProps> = ({ events }) => {
    return (
        <div className="home">
            {events.map(event => (
                <Card key={event.id} title={event.title} description={event.description} />
            ))}
        </div>
    );
};
