import React from 'react';
import './Login.scss';
import { ILogin } from './Login.interface';
import Card from '../Card/Card';
import Input from '../Input/Input';
import Button from '../Button/Button';

export default class Login extends React.Component<React.PropsWithChildren> {

  state = {
    email: '',
    password: ''
  }

  emailChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value});
  }

  passChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value});
  }

  validator(): boolean {
    // TODO: add validation
    return false;
  }


  render() {
    return (
      <React.Suspense>
        <div className='login__container'>

          <Card>
            <h1>Login</h1>
            <p>Bacon ipsum dolor amet burgdoggen fatback pig shoulder salami, ribeye tenderloin ball tip. Brisket flank andouille pork chop.</p>
            <Input 
              className='login__form_ele'
              name='email' 
              placeholder='Email'
              onChange={this.emailChangeHandler} />
            <Input 
              className='login__form_ele'
              type='password'
              name='password' 
              placeholder='Password'
              onChange={this.passChangeHandler} />
            <Button 
              className='login__form_ele--submit'
              name="Submit" />
          </Card>
        </div>
      </React.Suspense>
    )
  }
}