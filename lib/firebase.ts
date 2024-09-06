import { getFirestore, collection, query, orderBy, limit, startAfter, getDocs } from "firebase/firestore";
import { firebaseApp } from "./firebaseConfig"; // Ensure you have firebaseConfig setup
import { Event } from './firebaseConfig';

const db = getFirestore(firebaseApp);

export async function fetchEvents(lastVisible: any = null) {
    console.log("Fetching events...");
    const eventsQuery = query(
        collection(db, "events"),
        orderBy("timestamp", "desc"),
        limit(10),
        ...(lastVisible ? [startAfter(lastVisible)] : [])
    );
    const snapshot = await getDocs(eventsQuery);
    const events = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const lastDoc = snapshot.docs[snapshot.docs.length - 1];
    console.log("Fetched events:", events);
    return { events, lastDoc };
}

export async function fetchEats(lastVisible: any = null) {
    const eatsQuery = query(
        collection(db, "eats"),
        orderBy("timestamp", "desc"),
        limit(10),
        ...(lastVisible ? [startAfter(lastVisible)] : [])
    );
    const snapshot = await getDocs(eatsQuery);
    const eats = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const lastDoc = snapshot.docs[snapshot.docs.length - 1];
    return { eats, lastDoc };
}

export async function getEvents(): Promise<Event[]> {
    const eventsCol = collection(db, 'events');
    const eventSnapshot = await getDocs(eventsCol);
    return eventSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    } as Event));
}
