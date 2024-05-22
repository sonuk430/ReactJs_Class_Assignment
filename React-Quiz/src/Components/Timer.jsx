import { useEffect } from "react"

export const Timer = ({ dispatch, secoundRemaining }) => {

    const mins = Math.floor(secoundRemaining / 60);

    const seconds = secoundRemaining % 60;

    useEffect(function () {
        const id = setInterval(function () {
            dispatch({ type: "tick" })
        }, 1000);
        return () => clearInterval(id);
    }, [dispatch])

    return (
        <div className="timer">
            {mins < 10 && "0"}
            {mins}:
            {seconds < 10 && "0"}
            {seconds}</div>
    )
}
