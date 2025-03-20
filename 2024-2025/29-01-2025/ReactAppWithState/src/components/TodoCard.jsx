import React, { useEffect } from "react";
import { Button, Card, Flex } from '@radix-ui/themes';

export const TodoCard = (props) => {
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
        <Card>
            <p>
                {props.content}
            </p>
            <Flex justify="end">
                <Button color="gray" variant="outline" onClick={props.onRemove}>
                    Удалить
                </Button>
            </Flex>
        </Card>
    )
}
