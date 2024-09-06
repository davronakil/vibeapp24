import { FC } from 'react';

interface CardProps {
    title: string;
    description: string;
}

export const Card: FC<CardProps> = ({ title, description }) => (
    <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
);
