import React from 'react';
import './button.css';

export default function Button({
  text = 'Submit',
  isActive = true,
  setTab,
  tab,
}) {
  return (
    <div
      className={isActive ? 'button active' : 'button '}
      onClick={() => {
        setTab(tab);
      }}>
      {text}
    </div>
  );
}
