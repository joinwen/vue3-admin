const debounce = <F extends (...args: any[]) => any>(
  fn: F,
  wait: number,
  options: Record<string, any>
) => {
  let timer: any = null;
  const context: any = this || null,
    leading: boolean = options.leading;
  const debounced = (...args: any[]) => {
    if (leading && wait) {
      callFn(context, fn, args);
    }
    if (timer) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, wait);
    }
  };
  return debounced;
};

const callFn = (context: any, fn: (...args: any[]) => any, args: any[]) => {
  fn.apply(context, args);
};
export default debounce;
