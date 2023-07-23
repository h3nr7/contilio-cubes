import React from 'react';
import './Dashboard.interface';
import './Dashboard.scss';
import Card from '../Card/Card';

export default class Dashboard extends React.Component {

  state = {
    data: []
  }

  componentDidMount(): void {
    fetch('/api/data').then(async res => {
      const data = await res.json();
      this.setState({ data: data })
    })
  }

  render() {
    return (
      <div className="dashboard__container">
        <Card>
          <h1>Dashboard</h1>
          <p>Spare ribs picanha salami aliqua tri-tip, mollit nisi nulla. Ad enim ground round elit beef capicola pork loin pariatur officia alcatra minim chuck. Occaecat anim tri-tip, pork pariatur cupim minim adipisicing ham. Est cillum frankfurter eiusmod chuck jerky short loin ribeye dolore.</p>
          <>{JSON.stringify(this.state.data)}</>
        </Card>
        <Card>
          <h1>Chart</h1>
        </Card>
      </div>
    );
  }
}