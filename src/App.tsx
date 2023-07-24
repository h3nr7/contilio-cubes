import React, { PropsWithChildren } from 'react';
import './App.scss';
import Login from './components/Login/Login';
import { Routes, Route, NavigateFunction, NavLink } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Cubes from './components/Cubes/Cubes';
import Layout from './components/Layout/Layout';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import { withNavi } from './hooks/withNav';

/**
 * App
 * 
 * @returns App page 
 */
export default class App extends React.Component {

  render() {
    return (
      <div className="app__container">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="dashboard">Dashboard</NavLink>
          <NavLink to="cubes">Cubes</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomeHOC />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="cubes" element={<Cubes />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

// default index page
class Home extends React.Component<PropsWithChildren<{navigate: NavigateFunction}>> {
  
  render() {

    const { navigate } = this.props;

    return(
      <div className="app_home__container">
          <Card>
            <h1>Welcome!</h1>
            <p>Bacon ipsum dolor amet burgdoggen fatback pig shoulder salami, ribeye tenderloin ball tip. Brisket flank andouille pork chop.</p>
            <Button className='app_home__button' name='Next' onClick={() => navigate('/login')}/>
          </Card>
      </div>
    );
  }
}

const HomeHOC = withNavi(Home);
