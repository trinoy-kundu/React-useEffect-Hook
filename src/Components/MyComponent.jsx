import { useState, useEffect } from "react";

function MyComponent() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    // const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log('updating document title')
        document.title = `Clicked ${count} times`;
    }, [count])

    const addCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    // const tick = () => {
    //     setDate(new Date());
    // }

    return (
        <div>
            <p>
                <input type="text" value={text} onChange={(e) => {setText(e.target.value)}}/>
            </p>
            {/* <p>{date.toLocaleTimeString()}</p>   */}
            <button type="button" onClick={addCount}>Click Me</button>
        </div>
    )
}

export default MyComponent;