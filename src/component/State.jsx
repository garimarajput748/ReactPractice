import { useState,useEffect } from "react";
const State = () => {
    const [count, setCount] = useState(0);
    
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setCalculation(() => count * 2);
      },[count]);

    return (
        <>
        <button onClick={() => setCount((c) => c + 1 )}>{count}</button>
        <p>Calculation: {calculation}</p>
        </>
    );
}

export default State;