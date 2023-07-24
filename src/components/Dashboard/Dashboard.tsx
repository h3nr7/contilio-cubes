import React, { PropsWithChildren, PropsWithRef } from 'react';
import './Dashboard.interface';
import './Dashboard.scss';
import Card from '../Card/Card';
import { Attrib, Data, IDashboard, IDashboardState } from './Dashboard.interface';
import RangeSlider from 'react-slider';
import Bar from '../Bar/Bar';
import Button from '../Button/Button';
import { withNavi } from '../../hooks/withNav';

class Dashboard extends React.Component<IDashboard, IDashboardState> {

  state = {
    curPage: 0,
    totPage: 4,
    data: []
  }

  componentDidMount(): void {
    fetch('/api/data').then(async res => {
      const data = await res.json() as Data[];
      this.setState({ data: data, totPage: data.length })
    }).catch(e => {
      // TODO: error handler
    })
  }

  displayItem = (data:Data) => {
    const {title, attributes} = data;
    const labels = attributes.map(item => item.name);
    const values = attributes.map(item => item.value);
    return (
      <div className='table__inner'>
        <h2 className='table__inner--title'>{title}</h2>
        <div className='table__attr'>
          <div className='table__header'>
            <div className='table__col'>Name</div>
            <div className='table__col'>Value</div>
            <div className='table__col'>Unit</div>
          </div>
          {attributes.map(item => this.displayAttrib(item))}
        </div>
        <Bar 
            className='table__bar'
            title={`Bar chart of ${title}`} 
            labels={labels}
            values={values} />
      </div>
    );
  }

  displayAttrib = (attr:Attrib) => {
    const { name, value, unit } = attr;
    return (
      <div className='table__row'>
        <div className='table__col'>{name}</div>
        <div className='table__col numbers'>{value}</div>
        <div className="table__col">{unit}</div>
      </div>
    )
  }

  nextHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.props.navigate('/cubes');
  }

  render() {

    const { data, curPage, totPage } = this.state;

    return (
      <div className="dashboard__container">
        {/* <DashCard>
          <h1>Dashboard</h1>
          <p>Spare ribs picanha salami aliqua tri-tip, mollit nisi nulla. Ad enim ground round elit beef capicola pork loin pariatur officia alcatra minim chuck. Occaecat anim tri-tip, pork pariatur cupim minim adipisicing ham. Est cillum frankfurter eiusmod chuck jerky short loin ribeye dolore.</p>          
        </DashCard> */}
        <DashCard>
          <h1>Dashboard</h1>
          <p>Spare ribs picanha salami aliqua tri-tip, mollit nisi nulla. Ad enim ground round elit beef capicola pork loin pariatur officia alcatra minim chuck. Occaecat anim tri-tip, pork pariatur cupim minim adipisicing ham. Est cillum frankfurter eiusmod chuck jerky short loin ribeye dolore.</p>          

          <div className='table__wrapper'>
          {
            data && data.length && this.displayItem(data[curPage])
          }
          </div>
          <RangeSlider 
            className="dashboard__slider"
            thumbClassName="dashboard__thumb"
            trackClassName="dashboard__track"
            onChange={(value, index) => this.setState({ curPage: value })}
            min={0}
            max={totPage - 1}
          />
          <Button
              onClick={this.nextHandler}
              className='dashboard__next'
              name="Next" />
        </DashCard>
      </div>
    );
  }
}

// Cheating a little here...
const DashCard = (props:PropsWithChildren<any>) => {
  const { className, ...rest } = props;
  const nClassName = `dashboard__card ${className}`;
  return <Card {...rest} className={nClassName}>{props.children}</Card>;
}

// Export HOC navi
export default withNavi(Dashboard);
