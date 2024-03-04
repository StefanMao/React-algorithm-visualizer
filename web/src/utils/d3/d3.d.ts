import { Selection } from "d3";

export interface CircleParams {
  boundaryNode: Selection<SVGSVGElement, unknown, null, undefined>;
  cx: number;
  cy: string;
  r: number;
  fill: string;
}
