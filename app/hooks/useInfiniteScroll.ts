import { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface InfiniteScrollResult<T> {
    items: T[];
    loadMore: () => void;
    loading: boolean;
}

export function useInfiniteScroll<T>(fetchItems: () => Promise<T[]>): InfiniteScrollResult<T> {
    const [items, setItems] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    const loadMore = async () => {
        if (isFetching) return;
        setIsFetching(true);
        setLoading(true);
        const newItems = await fetchItems();
        setItems(prevItems => [...prevItems, ...newItems]);
        setLoading(false);
        setIsFetching(false);
    };

    useEffect(() => {
        loadMore();
    }, []);

    return { items, loadMore, loading };
}
