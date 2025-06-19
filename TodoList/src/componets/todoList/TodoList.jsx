import { useSelector, useDispatch } from 'react-redux';
import { List, Input, Button, Checkbox } from 'antd';
import { useState } from 'react';
import {addTodo, deleteTodo, toggleTodo} from "../../redux/slice/todoSlice.js";

const TodoList = () => {
    const [text, setText] = useState('');
    const todos = useSelector((state) => state.todos.list);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
            <Input.Search
                placeholder="Add a todo"
                enterButton="Add"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onSearch={handleAdd}
            />
            <List
                style={{ marginTop: 20 }}
                bordered
                dataSource={todos}
                renderItem={(item) => (
                    <List.Item
                        actions={[
                            <Button danger onClick={() => dispatch(deleteTodo(item.id))}>
                                Delete
                            </Button>,
                        ]}
                    >
                        <Checkbox
                            checked={item.completed}
                            onChange={() => dispatch(toggleTodo(item.id))}
                        >
              <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                {item.text}
              </span>
                        </Checkbox>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default TodoList;
