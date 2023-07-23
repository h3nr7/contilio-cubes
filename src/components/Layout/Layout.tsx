import React from 'react';
import { Outlet } from 'react-router-dom';

export default class Layout extends React.Component<React.PropsWithChildren> {

  render() {
    return(
      <div className="layout__container">
        <Outlet />
      </div>
    );
  }
}