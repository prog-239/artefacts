import React from 'react';

function Card(props) {
    return (
        <div>
            <hr />
            <h6>{props.title}</h6>
            <p>{props.content}</p>
            <div>
                <button>Share {props.shares}</button>
                <button>Like {props.likes}</button>
            </div>
            <hr />
        </div>
    );
}

export default Card;