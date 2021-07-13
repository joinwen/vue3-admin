const columns = [
  {
    label: "id",
    prop: "id",
  },
  {
    label: "用户名",
    prop: "username",
  },
  {
    label: "性别",
    prop: "gender",
  },
];
const conditions = [
  {
    label: "姓名",
    prop: "username",
    type: "input",
    placeholder: "请输入姓名",
  },
  {
    label: "性别",
    prop: "gender",
    type: "select",
    data: [
      {
        label: "male",
        value: 1,
      },
      {
        label: "female",
        value: 0,
      },
    ],
  },
  {
    label: "日期",
    prop: "time",
    type: "date-picker",
  },
  {
    btn: true,
    label: "搜索",
    type: "primary",
    emit: "search",
  },
];
function modelHook(): Record<string, Array<Record<string, unknown>>> {
  return {
    columns,
    conditions,
  };
}
export default modelHook;
