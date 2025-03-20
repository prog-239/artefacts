import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, Dialog, Flex, Text, TextField} from '@radix-ui/themes';

export const TodoCreateForm = (props) => {
    const [todoContent, setTodoContent] = useState('');

    function handleChangeInput(event) {
        setTodoContent(event.currentTarget.value);
    }

    function handleAddTodo() {
        props.onCreateTodo({ content: todoContent, id: uuid() });
        setTodoContent('');
    }

    function handleCancel() {
        props.onCancel();
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button color="gray" variant="outline">Создать Todo</Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Название
                        </Text>
                        <TextField.Root
                            placeholder="Введите название"
                        />
                    </label>
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button onClick={handleCancel} variant="soft" color="gray">
                            Отменить
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button color="gray" variant="outline" onClick={handleAddTodo}>Добавить</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}
