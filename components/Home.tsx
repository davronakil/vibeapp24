import { useRouter } from 'next/router';
import { Event } from '../lib/firebase';

interface HomeProps {
  events: Event[];
}

export function Home({ events }: HomeProps) {
  const router = useRouter();

  const handleAddEvent = async () => {
    // Logic to add a new event
    // ...

    // Redirect to /home after adding the event
    router.push('/home');
  };

  return (
    <div>
      {/* Render your events here */}
      {events.map(event => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{event.date}</p>
          <p>{event.location}</p>
        </div>
      ))}
      <button onClick={handleAddEvent}>Add Event</button>
    </div>
  );
}
