import React from 'react';
import './Login.scss';
import { ILogin } from './Login.interface';
import Card from '../Card/Card';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { withNavi } from '../../hooks/withNav';

class Login extends React.Component<React.PropsWithChildren<ILogin>> {

  static DELAY = 2500;

  state = {
    email: '',
    password: '',
    disabled: true,
    submitSuccess: false
  }

  // email change handler
  emailChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ 
      email: e.target.value,
      disabled: !this.validator(e.target.value, this.state.password)
    });
  }

  // password change handler
  passChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ 
      password: e.target.value,
      disabled: !this.validator(this.state.email, e.target.value)
    });
  }

  // form submit handler
  submitHandler = (e:React.MouseEvent) => {
    // Final validation can be BE instead of FE
    if(this.validator(this.state.email, this.state.password)) {
      this.setState({submitSuccess: true}, () => {
        setTimeout(() => this.props.navigate('/dashboard'), Login.DELAY);
      })
    } else {
      // TODO: Can have some kind of error response
    }
  }
  
  // validator for email and password
  validator(email: string, password: string): boolean {
    // basic regex
    const re = /^\S+@\S+\.\S+$/;
    
    if(email?.length>3 && password?.length>3 && re.test(email)) return true;
    return false;
  }

  render() {

    const { disabled, submitSuccess } = this.state;

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
              disabled={disabled}
              onClick={this.submitHandler}
              className='login__form_ele--submit'
              name="Submit" />
            {
              submitSuccess && <p className='messaging__info'>Validation successful, redirect to next page...</p>
            }
          </Card>
        </div>
      </React.Suspense>
    )
  }
}

/**
 * HOC navigate functio to pass on props for react-router
 * function
 */
export default withNavi(Login);