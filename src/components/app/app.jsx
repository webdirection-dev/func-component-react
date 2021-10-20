import React, {useState} from "react";
import Clicker from "../clicker";
import Ref from "../ref";
import Timer from "../timer";
import './app.css';
import './content.css';

const App = () => {
    const [isClicker, setClicker] = useState(false);
    const [isTimer, setTimer] = useState(false);

    const onToggleClicker = () => {
        setClicker(!isClicker);
    }

    const onToggleTimer = () => {
        setTimer(!isTimer);
    }

    return (
        <div className='app'>
            <h2>React App</h2>
            <div className="content">
                <div>
                    <button
                        onClick={onToggleClicker}
                    >
                        Toggle Clicker
                    </button>
                    {isClicker && <Clicker />}
                </div>

                <div className="ref">
                    <Ref />
                </div>

                <div>
                    <button
                        onClick={onToggleTimer}
                    >
                        Toggle Timer
                    </button>
                    {isTimer && <Timer />}
                </div>
            </div>
        </div>
    );
}

export default App;
