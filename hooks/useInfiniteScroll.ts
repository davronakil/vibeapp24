import { useState, useEffect, useCallback } from 'react';

export function useInfiniteScroll(fetchData: (lastVisible: any) => Promise<any>) {
    const [items, setItems] = useState<any[]>([]);
    const [lastVisible, setLastVisible] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const loadMore = useCallback(async () => {
        setLoading(true);
        const { events, lastDoc } = await fetchData(lastVisible);
        setItems(prev => [...prev, ...events]);
        setLastVisible(lastDoc);
        setLoading(false);
    }, [fetchData, lastVisible]);

    useEffect(() => {
        loadMore();
    }, [loadMore]);

    return { items, loadMore, loading };
}
