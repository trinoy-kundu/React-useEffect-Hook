import { useState, useEffect } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        console.log('updating document title')
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        setInterval(tick, 1000);
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