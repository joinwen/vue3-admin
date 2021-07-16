const columns = [
  {
    label: "id",
    prop: "id",
  },
  {
    label: "用户名",
    prop: "name",
  },
  {
    label: "年龄",
    prop: "age",
  },
  {
    label: "爱好",
    prop: "hobby",
  },
  {
    label: "简介",
    prop: "description",
  },
  {
    label: "重量",
    prop: "weight",
  },
  {
    label: "身高",
    prop: "height",
  },
  {
    label: "装态",
    prop: "status",
  },
  {
    label: "地址",
    prop: "address",
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
    format: "YYYY-MM-DD hh:mm:ss",
  },
  {
    type: "button",
    text: "搜索",
    buttonType: "primary",
    emit: "onSearch",
  },
  {
    btn: true,
    label: "添加",
    type: "primary",
    align: "right",
    emit: "onAdd",
  },
  {
    btn: true,
    label: "修改",
    type: "primary",
    align: "right",
    emit: "onEdit",
  },
];
function modelHook(): Record<string, Array<Record<string, unknown>>> {
  return {
    columns,
    conditions,
  };
}
export default modelHook;
