import { useEffect, useState } from "react";


const HooksPage = () => {
    const [counter, setcounter] = useState(0);
    useEffect(() => {
        console.log("from useEffect Hook <3");
    } ,[])
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={() => setcounter(prev => prev + 1)}>Icrease Count</button>
        </div>
    );
}

export default HooksPage;