import React from 'react';
import './App.scss';
import Login from './components/Login/Login';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Cubes from './components/Cubes/Cubes';
import Layout from './components/Layout/Layout';
import Card from './components/Card/Card';

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
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="dashboard">Dashboard</Link>
          <Link to="cubes">Cubes</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
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
class Home extends React.Component {
  render() {
    return(
      <div className="app_home__container">
          <Card>
            <h1>Welcome!</h1>
            <p>Bacon ipsum dolor amet burgdoggen fatback pig shoulder salami, ribeye tenderloin ball tip. Brisket flank andouille pork chop.</p>
          </Card>
      </div>
    );
  }
}
