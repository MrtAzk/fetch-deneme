import { useEffect, useState } from "react";

export const useAsyncState = (initialState, fetcher, config) => {
    const [list, setList] = useState(initialState);
    const [status, setStatus] = useState("idle")

    useEffect(() => {
        setStatus("loading")

        const getData = async () => {
            try {
                const data = await fetcher()
                config?.onSuccess?.(data)
                setList(data)
                setStatus("idle")
            } catch (error) {
                config?.onError?.(error)

            }

        }

        getData()
    }, [fetcher])
    return { list, setList, status }

}
