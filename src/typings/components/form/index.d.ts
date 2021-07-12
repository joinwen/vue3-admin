interface FormItem {
  type: string;
  align: string;
  labelWidth: string | number;
  span: Record<string, number | string>;
  label: string;
  prop: string;
  value: string;
  default: string;
  data?: Array<Record<string, any>>;
  btn?: boolean;
  icon?: string;
}
export { FormItem };
