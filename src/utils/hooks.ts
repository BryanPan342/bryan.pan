import { useState, useEffect, useRef } from 'react';

// A hook to determine window size (used to calculate size of canvas)
// Adapted from https://usehooks.com/useWindowSize/
export function useWindowSize(): {width: number | undefined, height: number | undefined} {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  const updateVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    if (!isClient) {
      return;
    }

    updateVh();

    function handleResize() {
      window.fullpage_api.reBuild();
      updateVh();
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export function useIntersecting({ root = null, rootMargin, threshold = 0 }: IntersectionObserverInit)  {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState<Element | null>(null);
  const observer = useRef(
    new window.IntersectionObserver(([e]) => updateEntry(e), {
      root,
      rootMargin,
      threshold,
    }),
  );

  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node]);

  return [setNode, entry];
}
