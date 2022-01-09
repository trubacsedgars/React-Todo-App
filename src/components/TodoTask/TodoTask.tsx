import { FC, useEffect, useRef } from 'react';
import { Task } from '../Interface/Interface';
import './TodoTask.scss';
import TodoButton from '../TodoButton/TodoButton';

type TodoTaskProps = {
  task: Task
  deleteTask: () => void;
  completeTask: () => void;
  editTask: () => void;
  updateTask: () => void;
  editText: string
  setEditText: (input: string) => void;
}

const TodoTask: FC<TodoTaskProps> = ({
  task,
  deleteTask,
  completeTask,
  editTask,
  updateTask,
  editText,
  setEditText,
}) => {
  const focusInputOnFirstReload = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusInputOnFirstReload.current?.focus();
  }, [editText]);

  const changeEditInputValue = (input: string) => {
    setEditText(input);
  };

  return (
    <div>
      <div className="todo-task">
        <div className="todo-content">
          <span
            className={`${task.isTaskCompleted ? 'completed' : ''}`}
          >
            {task.taskName}
          </span>
        </div>
        <TodoButton
          buttonName="Edit"
          buttonColor="#14b8a6"
          onClick={() => editTask()}
          borderTop=""
          borderBot=""
        />
        <TodoButton
          buttonName="Delete"
          buttonColor="#f43f5e"
          onClick={() => deleteTask()}
          borderTop=""
          borderBot=""
        />
        <TodoButton
          buttonName="Complete"
          buttonColor="#84cc16"
          onClick={() => completeTask()}
          borderTop="8px"
          borderBot="8px"
        />
      </div>
      {task.isEditing && (
        <div className="todo-input-wrapper-edit">
          <input
            type="text"
            className="todo__input-edit"
            placeholder="edit your task"
            ref={focusInputOnFirstReload}
            value={editText}
            onChange={(e) => changeEditInputValue(e.target.value)}
          />
          <TodoButton
            buttonName={task.isEditing ? 'Save' : 'edit'}
            buttonColor="orange"
            borderBot="8px"
            borderTop="8px"
            onClick={() => updateTask()}
          />
        </div>
      )}
    </div>
  );
};

export default TodoTask;
