import { useState, useLayoutEffect, useEffect, ForwardedRef } from 'react';
const TagCloud = require('TagCloud');

const useTagCloud = (
  text: string[],
  widthElement: ForwardedRef<HTMLElement>
) => {
  const [width, setWidth] = useState(0);

  const WidthListener = () => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  };

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
    if (widthElement) {
      WidthListener();
    }

    return () => {
      WidthListener();
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
