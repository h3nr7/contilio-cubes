import React from 'react';
import './Button.scss';
import { IButton } from './Button.interface';

export default class Button extends React.Component<React.PropsWithChildren<IButton>> {



  render() {
    const { className, name } = this.props;  
    return (
      <div className={`button__container ${className || ''}`}>
        <button>{name}</button>
      </div>
    )
  }
}