import type { G2Spec } from "@antv/g2";

const options: G2Spec = {
  type: "view",
  scale: { x: { range: [0, 1] }, y: { domainMin: 0, nice: true } },
  children: [
    { type: "line", labels: [{ text: "value", style: { dx: -10, dy: -12 } }] },
    { type: "point", style: { fill: "white" }, tooltip: false },
  ]
}
export default options
