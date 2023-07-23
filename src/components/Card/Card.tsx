import React from 'react';
import './Card.scss';

export default class Card extends React.Component<React.PropsWithChildren> {


  render() {
    return (
      <div className='card__container'>
        {this.props.children}
      </div>
    )
  }
}