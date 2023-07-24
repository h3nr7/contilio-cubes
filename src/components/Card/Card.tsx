import React from 'react';
import { ICard } from './Card.interface';
import './Card.scss';

export default class Card extends React.Component<React.PropsWithChildren<ICard>> {


  render() {
    const { className } = this.props;
    return (
      <div className={`card__container ${className || ''}`}>
        {this.props.children}
      </div>
    )
  }
}