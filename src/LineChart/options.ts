import type { G2Spec } from "@antv/g2";
import { axisOptions } from '@/common/Chart/options'

const options: G2Spec = {
  type: "view",
  scale: { 
    x: { range: [0, 1] },
    y: { domainMin: 0, nice: true } 
  },
  axis: axisOptions,
  children: [
    { type: "line" },
  ]
}
export default options
