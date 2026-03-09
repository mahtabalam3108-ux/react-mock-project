import { useState, useEffect, useCallback } from "react";

type FetchState<T> = {
    data: T | null,
    loading: boolean,
    error: string | null
}

export const useFetch = <T = unknown>(url: string, options?: RequestInit) => {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null
    });

    const fetchData = useCallback(async () => {
        setState((prev) => ({...prev, loading: true, error: null}));
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Http Error! status: ${response.status}`);
            }
            const result = (await response.json()) as T;
            setState((prev) => ({...prev, data: result, loading: false, error: null}));
        } catch(err) {
            setState((prev) => ({
                ...prev,
                data: null,
                loading: false,
                error: (err as Error).message
            }));
        } 
    }, [url, options]);

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return {...state, refetch: fetchData};
}
