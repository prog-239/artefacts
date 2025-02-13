import React, { useEffect } from "react";

function TodoCard(props) {
    // componentDidMount
    useEffect(function() {
        console.log('MOUNTED');
    }, [])

    // componentDidUpdate
    useEffect(function() {
        console.log('UPDATED', props.content)
    }, [props.content])

    // componentWillUnmount
    useEffect(function() {
        return function() {
            // Будет вызвана при удалении компоненты
        }
    }, [])

    return (
        <div className="todoCard">
            <p>
                {props.content}
            </p>
            <div className="todoControls">
                <button onClick={props.onRemove}>
                    Удалить
                </button>
            </div>
        </div>
    )
}

export default TodoCard;