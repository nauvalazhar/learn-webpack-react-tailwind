import React, { useState } from "react";
import { render } from "react-dom";
import "./app.css";

function App() {
        const [state, setState] = useState(0);

        return (
            <div className="flex items-center justify-center min-h-screen bg-purple-50">
                <button 
                    className="bg-purple-500 text-white py-3 px-8 rounded shadow-lg transition-all transform active:scale-105" 
                    onClick={() => setState(state+1)}
                >
                    You clicked: {state}
                </button>
            </div>
        );
}

render(<App />, document.getElementById("root"));
