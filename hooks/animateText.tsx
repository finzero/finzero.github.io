import Typed, { TypedOptions } from 'typed.js';

const defaultOptions: TypedOptions = {
  strings: ['Animated Text'],
  typeSpeed: 80,
  backSpeed: 50,
};

const animateText = (animatedEl: Element, propOptions: TypedOptions) => {
  const animatedOption = {
    ...defaultOptions,
    ...propOptions,
    onComplete: (self: any) => {
      self.cursor.remove();
    },
  };
  const typed = new Typed(animatedEl, animatedOption);

  return typed;
};

export default animateText;
