import React from 'react';
import './Login.scss';
import { ILogin } from './Login.interface';

export default class Login extends React.Component<React.PropsWithChildren> {

  state = {
    data: []
  }

  render() {
    return (
      <React.Suspense>
        <div className='login__container'>
          <h1>Login</h1>
        </div>
      </React.Suspense>
    )
  }
}