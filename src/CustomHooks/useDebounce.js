import { useCallback, useEffect, useRef } from "react";

const useDebounce = (cb,delay) => {
    const timer = useRef(null);

    const newFN = useCallback((...ctx) => {
        if (timer.current) clearTimeout(timer.current)
        timer.current = setTimeout(() => {
            cb(...ctx)
        }, delay)
    }, [delay, cb])

    useEffect(() => {

        return () => {
            if (timer.current) clearTimeout(timer.current)
        }
    }, [])

    return newFN;
}

export default useDebounce;