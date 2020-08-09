import React, { useState } from 'react';
import './App.scss';
import TodoTab from './components/todo-tab/TodoTab';
import Button from './components/button/Button';
import ToReadTab from './components/to-read-tab/ToReadTab';

const App = () => {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <div className='app d-flex justify-content-center mb-5 mt-4'>
        <div className='mobile-view'>
          <header>
            <i class='fa fa-times' aria-hidden='true'></i>
            <p className='text-uppercase'>Action Items</p>
          </header>
          <div className='p-2'>
            <div className='d-flex justify-content-between mt-4 mb-3'>
              <Button text={'TO-DO'} setTab={setTab} tab={1} isActive={tab} />
              <Button
                text={'TO-READ'}
                isActive={!tab}
                setTab={setTab}
                tab={0}
              />
            </div>
            {tab ? <TodoTab /> : <ToReadTab />}
          </div>
        </div>
      </div>
      <p className='text-center text-success'>
        Made by Mohit Singh Negi (mohitsin3232@gmail.com)
      </p>
    </div>
  );
};

export default App;
