import { useState, useLayoutEffect, useEffect, ForwardedRef } from 'react';
const TagCloud = require('TagCloud');

const useTagCloud = (
  text: string[],
  widthElement: ForwardedRef<HTMLElement>
) => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
    if (widthElement) {
      window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
    }

    return () => {
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  useEffect(() => {
    let radius = 250;
    if (width <= 425) {
      radius = 150;
    }

    let newCloud = TagCloud('.tagCloud', text, {
      radius: radius,
      initSpeed: 'slow',
    });

    return () => {
      newCloud.destroy();
    };
  }, [text, width]);
};

export default useTagCloud;
