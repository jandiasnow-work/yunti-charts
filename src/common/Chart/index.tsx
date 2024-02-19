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
  Runtime, 
  extend,
  corelib,
} from "@antv/g2";
import type { Chart as G2Chart, ChartOptions as G2ChartOptions, G2Spec } from "@antv/g2";
import { Spin } from 'antd'
import { merge, assign } from 'lodash-es'
import defaultChartOptions from './options'
import useTheme from './useTheme'

export type ChartRef = G2Chart | undefined;

export type ChartOptions = Omit<G2ChartOptions, "container">;

export type ChartProps = {
  /**
 * @description   G2Spec
 * @default "{autoFit: true,}"
 */
  options: G2Spec | null;

   /**
   * @description Specify the rendering engine. canvas is used by default.
   * @default canvas
   */
  renderer?: G2ChartOptions["renderer"];

  /**
   * @description style of container
   * @default -
   */
  style?: CSSProperties;

  /**
   * @description Initializes the chart callback
   * @default -
   */
  onInit?: (chart?: G2Chart) => void;

  /**
   * @description Loaded state
   * @default false
   */
  loading?: boolean;

  /**
   * @description Load dependencies on demand
   * @default corelib
   */
  libs?: object[];

  /**
   * @description merge or assign props options to default options
   * @default true
   */
  isMergeOptions?: boolean;

  /**
   * @description default options of chart
   * @default "{}"
   */
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
    isMergeOptions = true,
    defaultOptions: defaultComponentOptions,
  } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<G2Chart>();
  const { theme } = useTheme();

  // 容器宽高
  const { width, height } = useMemo(() => {
    const wrapper = containerRef?.current?.parentElement?.parentElement?.parentElement
    return {
      height: wrapper?.clientHeight || propsOptions?.height,
      width: wrapper?.clientWidth || propsOptions?.width
    }
  }, [containerRef?.current]) 

  // 初始化
  const [init, setInit] = useState(false);
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
      theme,
      width, 
      height
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
    if (init) onInit?.(chartRef?.current);
  }, [init, onInit]);
  useImperativeHandle(ref, () => chartRef.current, [init]);

  // 配置更新 
  const options = useMemo(() => {

    const defaultOptions = merge({}, defaultChartOptions, defaultComponentOptions, { theme, width, height })

    return isMergeOptions 
      ? merge(defaultOptions, propsOptions) 
      : assign(defaultOptions, propsOptions)

  }, [propsOptions, defaultComponentOptions, defaultChartOptions, theme, width, height])
  
  useEffect(() => {
    if (chartRef.current && options) {
      chartRef.current.options(options);
      chartRef.current.render();
    }
  }, [options, theme, width, height]);
  return <Spin spinning={loading}>
    <div ref={containerRef} style={style}></div>
  </Spin>;
});
export default Chart