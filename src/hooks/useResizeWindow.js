import { useEffect, useState } from "react";

export default function useResizeWindow() {
    const [widthScreen, setWidthScreen] = useState()

    function handleResize() {
        setWidthScreen(window.innerWidth)
    }

    useEffect(() => {
        if (typeof window !== undefined) {
            handleResize()
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return widthScreen
}