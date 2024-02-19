import React from 'react';
import Chart, { ChartProps } from '../common/Chart'
import defaultOptions from './options'

export interface LineChartProps extends ChartProps {
}

export const LineChart:React.FC<LineChartProps> = (props) => {
  return <Chart 
    {...props}
    defaultOptions={defaultOptions}
  />;
};
export default LineChart;
