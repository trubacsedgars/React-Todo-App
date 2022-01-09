import { useState, useEffect } from 'react';
import TodoInput from '../TodoInput/TodoInput';
import TodoTask from '../TodoTask/TodoTask';
import TodoCheckbox from '../TodoCheckBox/TodoCheckbox';
import { Task } from '../Interface/Interface';
import './TodoList.scss';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    const json = localStorage.getItem('tasks');
    const loadedTasks = JSON.parse(json as string);
    if (loadedTasks) {
      setTasks(loadedTasks);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(tasks);
    localStorage.setItem('tasks', json);
  }, [tasks]);

  const addNewTask = (input: string) => {
    const taskIsAlreadyInList = tasks.some((task) => task.taskName.toLowerCase() === input.toLowerCase());
    if (!input || taskIsAlreadyInList) {
      return;
    }
    const newTask = {
      taskName: input,
      isTaskCompleted: false,
      isEditing: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const removeTaskFromList = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const toggleCompleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].isTaskCompleted = !newTasks[index].isTaskCompleted;
    setTasks(newTasks);
  };

  const editTaskInList = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].isEditing = !newTasks[index].isEditing;
    setTasks(newTasks);
  };

  const updateEditedTaskInList = (index: number) => {
    if (!editText) {
      return;
    }
    const newTasks = [...tasks];
    newTasks[index].taskName = editText;
    setTasks(newTasks);
    setEditText('');
  };

  return (
    <div className="todo-container">
      <TodoInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onClick={() => addNewTask(inputValue)}
      />
      <div className="todo-checkbox-wrapper">
        <span className="todo__checkbox-title">Completed Tasks</span>
        <TodoCheckbox
          checkboxValue={isCompleted}
          setCheckboxValue={setIsCompleted}
        />
      </div>
      <div>
        {tasks.filter((task) => task.isTaskCompleted || !isCompleted)
          .map((task: Task, index: number) => (
            <div
              key={task.taskName}
            >
              <TodoTask
                task={task}
                deleteTask={() => removeTaskFromList(index)}
                editTask={() => editTaskInList(index)}
                completeTask={() => toggleCompleteTask(index)}
                updateTask={() => updateEditedTaskInList(index)}
                editText={editText}
                setEditText={setEditText}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
