import React from 'react';

const Button = props => (
  <div className={`btn ${props.className || ''}`} onClick={props.onClick}>{props.children}</div>
);

export {Button};