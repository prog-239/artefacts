import React from "react";

function TodoCard(props) {
    return (
        <div className="todoCard">
            <p>
                {props.content}
            </p>
            <div className="todoControls">
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default TodoCard;