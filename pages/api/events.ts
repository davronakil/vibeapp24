import { NextApiRequest, NextApiResponse } from 'next';
import { Event } from '../../lib/firebase';

const events: Event[] = [
    { id: '1', title: 'Event 1', description: 'Description for Event 1' },
    { id: '2', title: 'Event 2', description: 'Description for Event 2' },
    // Add more events as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ events });
}
