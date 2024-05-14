import { useCount } from "../hooks/useCount"

export const Count = () => {

    const { count, increment, decrement } = useCount(12)

    return (
        <div>count:{count}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}
