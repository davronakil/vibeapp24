import { NextApiRequest, NextApiResponse } from 'next';
import { Event } from '../../lib/firebase';

const events: Event[] = [
    {
        id: '1',
        title: 'Event 1',
        description: 'Description for Event 1',
        date: '2023-10-01',
        location: 'Location 1',
        imageUrl: 'https://example.com/image1.jpg'
    },
    {
        id: '2',
        title: 'Event 2',
        description: 'Description for Event 2',
        date: '2023-10-02',
        location: 'Location 2',
        imageUrl: 'https://example.com/image2.jpg'
    },
    // Add more events as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(events);
}
