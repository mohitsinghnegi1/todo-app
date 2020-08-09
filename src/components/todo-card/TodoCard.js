import React, { useRef } from 'react';
import './todo-card.css';

export default function TodoCard({ id, todo }) {
  const card = useRef(null);
  const markCompleted = () => {
    console.log(card.current.classList.toggle('completed'));
  };

  const { time, icon, desc } = todo;

  return (
    <div className='todo-card d-flex' ref={card} onClick={markCompleted}>
      <div className='w-75 content'>
        <div className='todo'>{todo.todo}</div>
        <div className='desc'>{desc}</div>
        <div className='time'>{time}</div>
      </div>
      <div className=' bg-primary h-100 box-icon'>
        <img src={icon} alt='img' />
      </div>
      <div className='state'>Completed</div>
    </div>
  );
}
