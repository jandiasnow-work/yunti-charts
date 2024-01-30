import React, {
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  CSSProperties,
  useMemo,
} from "react";
import {
  G2Spec,
  ChartOptions as G2ChartOptions,
  Runtime, 
  extend,
  corelib,
} from "@antv/g2";
import type { Chart as G2Chart } from "@antv/g2";
import { Spin } from 'antd'
import { merge, assign } from 'lodash-es'
import defaultChartOptions from './options'

export type ChartRef = G2Chart | undefined;

export type ChartOptions = Omit<G2ChartOptions, "container">;

export type ChartProps = {
  options: G2Spec | null;
  renderer?: G2ChartOptions["renderer"];
  style?: CSSProperties;
  onInit?: () => void;
  loading?: boolean;
  libs?: object[];
  isMergeOptions?: boolean;
  defaultOptions?: G2Spec | null;
};

export const Chart = forwardRef<ChartRef, ChartProps>((props, ref) => {
  
  const { 
    options: propsOptions, 
    style, 
    onInit, 
    renderer, 
    loading = false, 
    libs, 
    isMergeOptions = false,
    defaultOptions: defaultComponentOptions,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<G2Chart>();
  const [init, setInit] = useState(false);

  const options = useMemo(() => {
    const defaultOptions = merge(defaultChartOptions, defaultComponentOptions)
    return isMergeOptions 
      ? merge(defaultOptions, propsOptions) 
      : assign(defaultOptions, propsOptions)
  }, [propsOptions, defaultComponentOptions, defaultChartOptions])
  
  useEffect(() => {
    if (chartRef.current || !containerRef.current) return;

    // 按需加载
    const Chart = extend(Runtime, {
      ...corelib(),
      ...(libs || {}),
    });

    chartRef.current = new Chart({
      container: containerRef.current,
      renderer,
      autoFit: true,
    }) as G2Chart;

    setInit(true);
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = undefined;
      }
    };
  }, [renderer]);

  useEffect(() => {
    if (init) onInit?.();
  }, [init, onInit]);

  useEffect(() => {
    if (chartRef.current && options) {
      chartRef.current.options(options);
      chartRef.current.render();
    }
  }, [options]);

  useImperativeHandle(ref, () => chartRef.current, [init]);

  return <Spin spinning={loading}>
    <div ref={containerRef} style={style}></div>
  </Spin>;
});
export default Chart