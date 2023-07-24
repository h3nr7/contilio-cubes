import React from 'react';
import './Button.scss';
import { IButton } from './Button.interface';

export default class Button extends React.Component<React.PropsWithChildren<IButton>> {


  

  render() {
    const { className, name, disabled, onClick } = this.props;  

    console.log('but: ', disabled);
    return (
      <div className={`button__container ${className || ''}`}>
        <button 
          onClick={e => !disabled && onClick && onClick(e)}
          disabled={disabled}>{name}</button>
      </div>
    )
  }
}