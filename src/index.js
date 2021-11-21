import React from 'react';
import ReactDOM from 'react-dom';

function Clock() {
    const element = (
        <div>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </div>
    );
    ReactDOM.render(element, document.getElementById("root"))
}

setInterval(Clock, 1000);
