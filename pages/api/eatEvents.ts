import { NextApiRequest, NextApiResponse } from 'next';
import { Eat } from '../../lib/firebase';

const eatEvents: Eat[] = [
    { id: '1', title: 'Eat Event 1', description: 'Description for Eat Event 1' },
    { id: '2', title: 'Eat Event 2', description: 'Description for Eat Event 2' },
    // Add more eat events as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ eatEvents });
}
