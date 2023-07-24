import React from 'react';
import Card from '../Card/Card';
import './Cubes.scss';

export default class Cubes extends React.Component {

  render() {
    return (
      <div className='cubes__container'>
        <Card className='cubes__card'>
          <div className='cubes__heading'>
            <h1>Cubes</h1>
            <p>The basic solution to optimise this cube performance 
              was to use a single InstancedMesh instance and 4x4 Matrix 
              that can be set to each referenced index in the mesh instance.
              Drastically reducing the drawing calls by n^3 factors.</p>
          </div>
          <iframe src="/cube.html" width="100%" height="500" style={{border: 'none'}} />
        </Card>
      </div>
    )
  }
}