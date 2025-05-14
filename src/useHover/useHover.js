import {useCallback, useEffect, useRef, useState} from "react";

export function useHover() {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handlerMouseOver = useCallback(() => {
    setIsHovered(true);
  }, [])

  const handlerMouseOut = useCallback(() => {
    setIsHovered(false);
  }, [])

  useEffect(() => {
    const refCurrent = ref.current;

    if (!refCurrent) {
      return;
    }

    refCurrent.addEventListener('mouseover', handlerMouseOver);
    refCurrent.addEventListener('mouseout', handlerMouseOut);

    return () => {
      refCurrent.removeEventListener('mouseover', handlerMouseOver);
      refCurrent.removeEventListener('mouseout', handlerMouseOut);
    }
  }, [ref, handlerMouseOver, handlerMouseOut]);

  return {
    hovered: isHovered,
    ref
  }
}
