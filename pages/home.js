import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig'; // Ensure the correct import path
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore'; // Ensure you import this
import Link from 'next/link';

export default function Home() {
  const [user] = useAuthState(auth);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const firestore = getFirestore(); // Initialize Firestore

  useEffect(() => {
    async function fetchEvents() {
      const eventsCollection = collection(firestore, 'events');
      const eventsQuery = query(eventsCollection, orderBy('date', 'desc'));
      const querySnapshot = await getDocs(eventsQuery);
      const eventsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEvents(eventsList);
      setIsLoading(false);
    }

    fetchEvents();
  }, [firestore]); // Added firestore to the dependency array

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Home</h1>
        {user && (
          <Link href="/new-event">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              New Event
            </button>
          </Link>
        )}
      </div>

      {user ? (
        isLoading ? (
          <p className="text-center text-gray-600">Loading events...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <p className="text-gray-700">Please log in to access your home page.</p>
      )}
    </div>
  );
}
