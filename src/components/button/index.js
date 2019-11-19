import React from 'react';

const Button = props => (
  <div className={`btn ${props.className || ''}`} onClick={props.handleClick}>{props.children}</div>
);

export {Button};