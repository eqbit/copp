import React from 'react';

const Popup = props => (
  <div className="popup">
    <div className="popup__overlay" onClick={props.handleClose}/>
    
    <div className="popup-body">
      
      <div className="popup-close" onClick={props.handleClose}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M21.061 18.939L18.939 21.061L10.993 13.115L3.10996 20.998L1.00196 18.89L8.88496 11.007L0.938965 3.06097L3.06097 0.938965L11.007 8.88496L18.89 1.00196L20.998 3.10996L13.115 10.993L21.061 18.939Z" fill="black"/>
        </svg>
      </div>
      
      {props.children}
    </div>
  </div>
);

export {Popup};