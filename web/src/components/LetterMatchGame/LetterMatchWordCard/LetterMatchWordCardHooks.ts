import { useRef, useState, useEffect, useCallback } from 'react';
import { Selection, select } from 'd3';

import { d3DrawCircle } from '@/utils/d3/d3';
import type {
  ILetterMatchWordCardHook,
  ILetterMatchWordCardProps,
  IWordCardInfo,
} from './types/letterMatchWordCard';

export const useLetterMatchWordCardHook = (
  props: ILetterMatchWordCardProps,
): ILetterMatchWordCardHook => {
  const [hovered, setHovered] = useState(false);
  const boundaryRef = useRef<SVGSVGElement>(null!);
  const { cardInfo } = props;

  const handleMouseEnter = (): void => {
    setHovered(true);
  };

  const handleMouseLeave = (): void => {
    setHovered(false);
  };

  const clearNode = (boundaryNode: Selection<SVGSVGElement, unknown, null, undefined>): void => {
    boundaryNode?.selectAll('*').remove();
  };

  const ifDrawCircle = useCallback(
    (hovered: boolean, cardInfo: IWordCardInfo): boolean =>
      hovered || cardInfo.status === 'selected' || cardInfo.status === 'matched',
    [],
  );

  useEffect(() => {
    const boundaryRefValue = boundaryRef.current!;
    const updateNode = () => {
      const boundaryNode = select(boundaryRefValue);
      if (boundaryNode) {
        if (ifDrawCircle(hovered, cardInfo)) {
          d3DrawCircle({ boundaryNode, cx: 6, cy: '50%', r: 5, fill: 'black' });
        } else {
          clearNode(boundaryNode);
        }
      }
    };
    updateNode();
    return () => {
      const boundaryNode = select(boundaryRefValue);
      if (boundaryNode) {
        clearNode(boundaryNode);
      }
    };
  }, [hovered, cardInfo, ifDrawCircle]);

  const states = { boundaryRef };
  const actions = { handleMouseEnter, handleMouseLeave };
  return { states, actions };
};
