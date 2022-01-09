import { FC } from 'react';
import './TodoCheckbox.scss';

type TodoCheckboxProps = {
  checkboxValue: boolean
  setCheckboxValue: (checked: boolean) => void;
}

const TodoCheckbox:FC<TodoCheckboxProps> = ({ checkboxValue, setCheckboxValue }) => {
  const toggleCheckboxValue = (checked: boolean) => {
    setCheckboxValue(checked);
  };

  return (
    <div className="todo-input-wrapper-checkbox">
      <input
        type="checkbox"
        className="todo__input-checkbox"
        checked={checkboxValue}
        onChange={(e) => toggleCheckboxValue(e.target.checked)}
      />
    </div>
  );
};

export default TodoCheckbox;
