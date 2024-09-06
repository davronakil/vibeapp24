import { firebaseApp, db } from './firebaseConfig';
import { Event, Eat } from './firebaseConfig';
import { collection, query, orderBy, limit, startAfter, getDocs } from 'firebase/firestore';

export async function fetchEvents(lastVisible: any = null): Promise<Event[]> {
    console.log("Fetching events...");
    const eventsQuery = query(
        collection(db, "events"),
        orderBy("timestamp", "desc"),
        limit(10),
        ...(lastVisible ? [startAfter(lastVisible)] : [])
    );
    const snapshot = await getDocs(eventsQuery);
    const events = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            title: data.title,
            description: data.description,
            date: data.date,
            location: data.location,
            imageUrl: data.imageUrl ?? null,
        } as Event;
    });
    console.log("Fetched events:", events);
    return events;
}

export async function fetchEats(lastVisible: any = null): Promise<Event[]> {
    const eatsQuery = query(
        collection(db, "eats"),
        orderBy("timestamp", "desc"),
        limit(10),
        ...(lastVisible ? [startAfter(lastVisible)] : [])
    );
    const snapshot = await getDocs(eatsQuery);
    const eats = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            title: data.title,
            description: data.description,
            date: data.date,
            location: data.location,
            imageUrl: data.imageUrl ?? null,
        } as Event;
    });
    return eats;
}

export async function getEvents(): Promise<Event[]> {
    const eventsCol = collection(db, 'events');
    const eventSnapshot = await getDocs(eventsCol);
    return eventSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
            id: doc.id,
            title: data.title,
            description: data.description,
            date: data.date,
            location: data.location,
            imageUrl: data.imageUrl ?? null,
        } as Event;
    });
}

export { db };
export type { Event, Eat };
