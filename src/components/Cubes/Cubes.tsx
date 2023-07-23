import React from 'react';

export default class Cubes extends React.Component {

  render() {
    return (
      <div className='cubes__container'>
        <h1>Cubes</h1>
        <iframe src="/cube.html" width="100%" height="500" />
      </div>
    )
  }
}