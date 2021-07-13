interface FormItem {
  type: string;
  align?: string;
  labelWidth?: string | number;
  span?: Record<string, number | string>;
  label: string;
  prop: string;
  default?: string;
  data?: Array<Record<string, unknown>>;
  btn?: boolean;
  icon?: string;
  download?: string;
  emit?: string;
}
export { FormItem };
