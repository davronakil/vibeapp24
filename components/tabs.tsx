import * as Tabs from '@radix-ui/react-tabs';

export function EventEatTabs({ children }: { children: React.ReactNode }) {
    return (
        <Tabs.Root defaultValue="home">
            <Tabs.List className="flex border-b">
                <Tabs.Trigger value="home" className="px-4 py-2">Home</Tabs.Trigger>
                <Tabs.Trigger value="events" className="px-4 py-2">Events</Tabs.Trigger>
                <Tabs.Trigger value="eats" className="px-4 py-2">Eats</Tabs.Trigger>
            </Tabs.List>
            {children}
        </Tabs.Root>
    );
}
