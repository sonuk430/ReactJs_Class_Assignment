import { useEffect, useState } from "react"
import "./ProgressBar.css"
export const ProgressBar = () => {

    const [value, setValue] = useState(0);
    const [percent, setPercent] = useState(value)

    useEffect(() => {
        setInterval(() => {
            setValue((prev) => prev + 1)

        }, 100)

    }, [])


    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)))
    }, [value])



    return (
        <>
            <h3>progress Bar</h3>
            <div className="progress">
                <span>{percent.toFixed()}%</span>

                <div style={{ width: `${percent}%` }}></div>
            </div>

        </>
    )
}
