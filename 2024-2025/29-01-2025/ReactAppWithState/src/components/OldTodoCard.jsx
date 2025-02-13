
// Этот файл никак не участвует в работе данного проекта
// Тут приведен пример работы с компонентой 2015-2017 года
// Сейчас уже редко можно встретить такую реализацию
// Только если это легаси код

import { Component } from "react";

class OldTodoCard extends Component {
    constructor() {
        super();

        this.state = {};
    }

    removeTodo() {
        this.setState();
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <p>{this.props.content}</p>
            </div>
        )
    }
}