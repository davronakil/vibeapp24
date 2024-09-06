export async function fetchEvents(): Promise<Event[]> {
    // Fetch events from your data source
    const response = await fetch('/api/events');
    const data = await response.json();
    return data.events; // Ensure this returns an array of events
}

export async function fetchEats(): Promise<Eat[]> {
    // Fetch eats from your data source
    const response = await fetch('/api/eatEvents');
    const data = await response.json();
    return data.eatEvents; // Ensure this returns an array of eats
}

// Define the types for Event and Eat
export interface Event {
    id: string;
    title: string;
    description: string;
}

export interface Eat {
    id: string;
    title: string;
    description: string;
}
