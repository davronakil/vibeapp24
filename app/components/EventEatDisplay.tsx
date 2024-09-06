import { useEffect, useState } from 'react';
import { fetchEvents, fetchEats, Event } from '../../lib/firebase';
import { EventEatTabs, TabsContent } from './tabs'; // Ensure the correct file name
import { Card } from './card'; // Ensure the correct file name

export function EventEatDisplay() {
    const [events, setEvents] = useState<Event[]>([]);
    const [eats, setEats] = useState<Event[]>([]);
    const [loadingEvents, setLoadingEvents] = useState(true);
    const [loadingEats, setLoadingEats] = useState(true);

    useEffect(() => {
        const loadEvents = async () => {
            const events = await fetchEvents();
            setEvents(events);
            setLoadingEvents(false);
        };

        const loadEats = async () => {
            const eats = await fetchEats();
            setEats(eats);
            setLoadingEats(false);
        };

        loadEvents();
        loadEats();
    }, []);

    return (
        <EventEatTabs>
            <TabsContent value="events">
                {events.map(event => (
                    <Card key={event.id} title={event.title} description={event.description} />
                ))}
                {loadingEvents && <p>Loading...</p>}
            </TabsContent>
            <TabsContent value="eats">
                {eats.map(eat => (
                    <Card key={eat.id} title={eat.title} description={eat.description} />
                ))}
                {loadingEats && <p>Loading...</p>}
            </TabsContent>
        </EventEatTabs>
    );
}
