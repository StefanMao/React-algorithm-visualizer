import { useRef, useState, useEffect } from 'react';
import { Selection, select } from 'd3';

import { d3DrawCircle } from '@/utils/d3/d3';
import type { ILetterMatchWordCardHook } from './types/letterMatchWordCard';

export const useLetterMatchWordCardHook = (): ILetterMatchWordCardHook => {
  const [hovered, setHovered] = useState(false);
  const boundaryRef = useRef<SVGSVGElement>(null!);

  const handleMouseEnter = (): void => {
    setHovered(true);
  };

  const handleMouseLeave = (): void => {
    setHovered(false);
  };

  const clearNode = (boundaryNode: Selection<SVGSVGElement, unknown, null, undefined>): void => {
    boundaryNode?.selectAll('*').remove();
  };

  useEffect(() => {
    const boundaryRefValue = boundaryRef.current!;
    const updateNode = () => {
      const boundaryNode = select(boundaryRefValue);
      if (boundaryNode) {
        if (hovered) {
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
  }, [hovered]);

  const states = { boundaryRef };
  const actions = { handleMouseEnter, handleMouseLeave };
  return { states, actions };
};
