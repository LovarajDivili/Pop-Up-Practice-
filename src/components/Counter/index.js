import './index.css'
import {useState} from 'react'


const Counter = () => {
    const [counter, setCounter] = useState(0);
    return(
        <div className="container">
            <h1>Hello...! CodeSandBox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <p>{counter}</p>
            <button
            onClick={() => { setCounter (counter) }}
            >
            Increase Counter</button>
        </div>
    )
}

export default Counter
