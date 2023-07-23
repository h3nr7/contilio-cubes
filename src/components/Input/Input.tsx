import React from 'react';
import './Input.scss';
import { IInput } from './Input.interface';

export default class Input extends React.Component<React.PropsWithChildren<IInput>> {

  state = {
    value: this.props.value
  }

  inputChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
    if(this.props.onChange) this.props.onChange(event);
  }

  render() {
    const { name, placeholder, type, className } = this.props;
    const { value } = this.state;
    return (
      <div className={`wave-group ${className || ''}`}>
        <input 
          type={type || 'text'}
          required
          className="input" 
          defaultValue={value}
          onChange={this.inputChangeHandler}/>
        <span className="bar"></span>
        <label className="label">
          <span className="label-char">{placeholder || name}</span>
        </label>
      </div>
    );
  }
}