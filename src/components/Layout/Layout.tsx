import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss';

export default class Layout extends React.Component<React.PropsWithChildren> {

  render() {
    return(
      <div className="layout__container">
        <Outlet />
      </div>
    );
  }
}