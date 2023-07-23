import React from 'react';

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
        <h1>Dashboard</h1>
        <>{JSON.stringify(this.state.data)}</>
      </div>
    );
  }
}