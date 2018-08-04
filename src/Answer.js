import React from 'react';

const Answer = ({ clicked, target, index, name, toggleable }) =>
    <div 
        className={target ? "target" : "nonTarget"}
        onClick={toggleable ? () => clicked(index) : undefined}
    >
        <p>{name}</p>
    </div>

export default Answer;