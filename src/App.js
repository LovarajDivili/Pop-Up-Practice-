import './App.css'
// import Counter from './components/Counter'
import {useState} from 'react'


const App = () => {
    const [counter, setCounter] = useState(0);
    return(
        <div className="container">
            <h1>Hello...! EveryOne</h1>
            <p>Click the below buttons.                 
            <br/> And <br/> Increasing the Counter value.                
            <br/>Decreasing the counter value. <br/> HURRYUP.....!</p>
            <h2>{counter}</h2>
            <div className="b_container">
                <button
            onClick={() => { setCounter (counter + 1) }}
            >
            Increase Counter</button>
            <button className="setCounter"
            onClick={() => { setCounter (counter - 1) }}
            >
            Decrease Counter</button>
            </div>
        </div>
    )
}

export default App
