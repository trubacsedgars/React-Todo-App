import { FC } from 'react';
import './TodoButton.scss';

type TodoButtonProps = {
  buttonName: string
  buttonColor: string
  borderBot: string
  borderTop: string
  onClick: () => void;
}

const TodoButton: FC<TodoButtonProps> = ({
  buttonName, buttonColor, onClick, borderBot, borderTop,
}) => (
  <div className="todo-button-wrapper">
    <button
      style={{ backgroundColor: buttonColor, borderBottomRightRadius: borderBot, borderTopRightRadius: borderTop }}
      className="todo-button"
      onClick={() => onClick()}
    >
      {buttonName}
    </button>
  </div>
);

export default TodoButton;
