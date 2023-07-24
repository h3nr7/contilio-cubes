import React from "react";
import { IBar } from "./Bar.interface";
import './Bar.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  // Legend,
} from 'chart.js';
import { Bar as BarChart } from 'react-chartjs-2';
import { ChartJSOrUndefined } from "react-chartjs-2/dist/types";

// register options
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  // Title,
  Tooltip,
  // Legend
);

/**
 * Bar chart wrapper component for chart.js
 */
export default class Bar extends React.Component<IBar> {

  containerRef = React.createRef<HTMLDivElement>();
  barRef = React.createRef<ChartJSOrUndefined<"bar">>();

  // bar chart options
  generateOptions = (title: string) => ({
    responsive: true,
    plugins: {
      // legend: {
      //   position: 'top' as const,
      // },
      // title: {
      //   display: true,
      //   text: title,
      // },
    },
  })

  // convert data the chart.js format
  convertData = (labels: string[], values: number[]) => ({
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: 'rgba(8, 140, 196, 0.5)',
      }
    ]
  })

  // resize handler when container is resized
  resizeHandler = (e:UIEvent) => {
    const rect = this.containerRef.current?.getBoundingClientRect();
    console.log(rect);
    if(rect) this.barRef.current?.resize();
  }

  componentDidMount(): void {
    window.addEventListener("resize", this.resizeHandler);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.resizeHandler);
  }

  render() {

    const { title, className, labels, values } = this.props;
    const options = this.generateOptions(title);
    const data = this.convertData(labels, values);
    
    return (
      <div 
        ref={this.containerRef}
        className={`bar__container ${className || ''}`}>
        <BarChart 
          ref={this.barRef}
          options={options} data={data} />
      </div>
    )
  }
}