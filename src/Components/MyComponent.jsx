import { useState, useEffect } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        console.log('clock ticking');
        setDate(new Date());
    }

    useEffect(() => {
        // console.log('updating document title')
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        console.log('starting timer');
        const interval = setInterval(tick, 1000);

        //do the cleanup - Stop the timer
        return () => {
            console.log('component unmounted');
            clearInterval(interval);
        };

    }, []);

    const addCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div>
            <p>{date.toLocaleTimeString()}</p>  
            <button type="button" onClick={addCount}>Click Me</button>
        </div>
    )
}

export default MyComponent;