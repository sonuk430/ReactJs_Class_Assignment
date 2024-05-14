import { useState } from 'react';
import useOnline from '../hooks/useOnline';

export const ShowLive = () => {
    const [show, setShow] = useState(useOnline());
    useOnline();
    // console.log(useOnline());

    function handleClick() {
        setShow(!show);
        // console.log(show);

    }

    return (
        <div>ShowLive {show ? "💚" : "🔴"}
            <button onClick={handleClick}>{show ? "Online" : "Offline"}</button>
        </div>
    )
}
