import { FC, ReactNode } from 'react';

interface TabsContentProps {
    value: string;
    children: ReactNode;
}

export const TabsContent: FC<TabsContentProps> = ({ value, children }) => {
    return (
        <div data-value={value}>
            {children}
        </div>
    );
};

interface EventEatTabsProps {
    children: ReactNode;
}

export const EventEatTabs: FC<EventEatTabsProps> = ({ children }) => {
    return (
        <div className="tabs">
            {children}
        </div>
    );
};
