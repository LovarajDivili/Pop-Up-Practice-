import './App.css'
import {useState} from 'react'



const App = () => {
    const [onclick,setClick] = useState(false);

    const PopupFunction = () => {
      setClick(!onclick)
    }
    return(
        <div className="container">
            <h1 className="heading">Click the Button. To Show the PopUp....!</h1>
        <button className="button"
            onClick={PopupFunction}
            >
            Click
        </button>

        {onclick && (
            <div className="bg_container">
        <div className="popup_container">
            <h1>This is a Skill Progress Page..!</h1>
            <button  onClick={PopupFunction}>X</button>
        </div>
        <p>You Programing Skills tooo good..! and You arn <span>9.6/10 points</span></p>
        <h1 className="con">Congratulations</h1>
        <div className="buttonPage">
        <button className="close" 
        onClick={PopupFunction}
        >
        Close
        </button>
        <button className="continue">Continue</button>
        </div>
        </div>
        )}
    </div>
    )
}

export default App
