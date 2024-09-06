import { FC } from 'react';

interface CardProps {
    title: string;
    description: string;
}

export const Card: FC<CardProps> = ({ title, description }) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
        </div>
    );
};
