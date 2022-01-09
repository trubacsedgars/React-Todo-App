import { FC, useEffect, useRef } from 'react';
import './TodoInput.scss';

type TodoInputProps = {
  inputValue: string;
  setInputValue: (input: string) => void;
  onClick: () => void;
}

const TodoInput: FC<TodoInputProps> = ({
  inputValue,
  setInputValue,
  onClick,
}) => {
  const focusInputOnFirstReload = useRef<HTMLInputElement>(null);

  useEffect(() => {
    focusInputOnFirstReload.current?.focus();
  }, [inputValue]);

  const changeInputValue = (input: string) => {
    setInputValue(input);
  };

  return (
    <div className="todo-header">
      <div className="todo-input-wrapper">
        <input
          type="text"
          className="todo__input"
          placeholder="What are you up to today..?"
          ref={focusInputOnFirstReload}
          value={inputValue}
          onChange={(e) => changeInputValue(e.target.value)}
        />
        <button
          className="todo-input-button"
          onClick={() => onClick()}
        >
          + New task
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
