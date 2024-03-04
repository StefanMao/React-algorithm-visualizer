import { CircleParams } from './d3.d';

/**
 * 使用 D3 在指定的邊界節點上繪製圓形。
 * @param boundaryNode - D3 選擇器選擇的邊界節點。
 * @param cx - 圓心的 x 座標。
 * @param cy - 圓心的 y 座標。
 * @param r - 圓的半徑。
 * @param fill - 圓的填充顏色。
 */
export function d3DrawCircle({ boundaryNode, cx, cy, r, fill }: CircleParams): void {
  boundaryNode.append('circle').attr('cx', cx).attr('cy', cy).attr('r', r).style('fill', fill);
}
