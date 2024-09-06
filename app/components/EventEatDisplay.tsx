import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { fetchEvents, fetchEats } from '../lib/firebase';
import { EventEatTabs, TabsContent } from './Tabs'; // Ensure the correct file name
import { Card } from './Card'; // Ensure the correct file name
import { Home } from './Home';

export function EventEatDisplay() {
    const { items: events, loadMore: loadMoreEvents, loading: loadingEvents } = useInfiniteScroll(fetchEvents);
    const { items: eats, loadMore: loadMoreEats, loading: loadingEats } = useInfiniteScroll(fetchEats);

    return (
        <EventEatTabs>
            <TabsContent value="events">
                {events.map(event => (
                    <Card key={event.id} title={event.title} description={event.description} />
                ))}
                {loadingEvents && <p>Loading...</p>}
                <button onClick={loadMoreEvents} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Load More</button>
            </TabsContent>
            <TabsContent value="eats">
                {eats.map(eat => (
                    <Card key={eat.id} title={eat.title} description={eat.description} />
                ))}
                {loadingEats && <p>Loading...</p>}
                <button onClick={loadMoreEats} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Load More</button>
            </TabsContent>
        </EventEatTabs>
    );
}
