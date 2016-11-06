import React from 'react';

export const TodoItem = (props) => {
    const lineThroughClass = props.done ? "done-text" : "";
    const emptyTextClass = (props.text.length === 0) ? "empty-text" : "";
    return (
        <li>
            <div className="item-content">
                <div className="item-media">
                    <input
                        type="number"
                        defaultValue="0"
                        value={props.count}
                        style={{ width: '30px' }}
                        onChange={(e) => {
                            const text = e.target.value;
                            const newCount = parseInt(text, 10);
                            if (Number.isInteger(newCount)) {
                                if (newCount >= 0) {
                                    props.actions.changeTodoCount(props.id, newCount);
                                }
                            } else if (text.length === 0) {
                                props.actions.changeTodoCount(props.id, 0);
                            }
                        } }
                        />
                    <small>x</small>
                </div>
                <div className="item-inner">
                    <div className="item-title">
                        <input
                            type="text"
                            className={props.text.length === 0 ? emptyTextClass : props.done ? lineThroughClass : ""}
                            placeholder="please, add item name"
                            value={props.text}
                            onChange={(e) => {
                                const newText = e.target.value;
                                props.actions.changeTodoText(props.id, newText);
                            } }
                            />
                    </div>
                </div>
                <label className="label-checkbox">
                    <input type="checkbox" name="my-checkbox" checked={props.done} />
                    <div className="item-media" onClick={() => props.actions.toggleTodo(props.id)}>
                        <i className="icon icon-form-checkbox"></i>
                    </div>
                </label>
                <div className="item-media" onClick={() => props.actions.removeTodo(props.id)}>
                    <a href="#" className="button color-red">x</a>
                </div>
            </div>
        </li>
    );
};

TodoItem.PropTypes = {
    actions: React.PropTypes.object.isRequired,
    count: React.PropTypes.number.isRequired,
    done: React.PropTypes.bool.isRequired,
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired
};
