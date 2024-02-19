import type { ChartOptions, AxisOptions } from "@antv/g2";

const options: ChartOptions = {
  autoFit: true,
}

export const BORDER_COLOR = '#E2E2E2'
export const axisOptions = {
  y: { 
    title: false, 
    grid: true, 
    gridLineDash: [3, 3], 
    gridStroke: BORDER_COLOR,
    gridStrokeOpacity: '1',
    line: false,
    tick: false,
  }, 
  x: { 
    title: false, 
    grid: false,
    line: true,
    tick: true,
    labelAutoHide: true,
    labelAutoRotate: false,
  } 
}
export default options
