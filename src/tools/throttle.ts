const throttle = <F extends (...args: any[]) => any>(
  fn: F,
  wait: number,
  options: Record<string, any>
) => {
  let flag = true;
  const leading: boolean = options.leading,
    context: any = this || null;
  return function (...args: any[]) {
    if (leading && wait) {
      callFn(context, fn, args);
    }
    if (flag) {
      flag = false;
      setTimeout(() => {
        callFn(context, fn, args);
        flag = true;
      }, wait);
    }
  };
};
const callFn = (context: any, fn: (...args: any[]) => any, args: any[]) => {
  fn.apply(context, args);
};
export default throttle;
