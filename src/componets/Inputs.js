import React from "react";

function Inputs({ value, setName }) {

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={e => setName(e.target.value)}
            />
            
        </div>
    )
}

export default Inputs;