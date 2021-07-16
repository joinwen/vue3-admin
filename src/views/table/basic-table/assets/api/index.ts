class BasicTableApi {
  getDataApi(data: unknown): Promise<any> {
    console.log(data);
    const total = 65,
      { page, pageSize } = data as any,
      len = page * pageSize < total ? pageSize : total % pageSize,
      content: Array<Record<string, unknown>> = [];
    return new Promise((resolve) => {
      setTimeout(() => {
        for (let i = 0; i < len; i++) {
          content.push({
            id: i,
            key: i,
            name: "胡彦斌",
            age: 32,
            hobby: "足球",
            description: "一段简单的介绍",
            weight: "60kg",
            height: 179,
            status: 2,
            address: "西湖公园1号",
          });
        }
        resolve({
          flag: true,
          content,
          total,
        });
      }, Math.random() * 3000);
    });
  }
  addDataApi(data: unknown): Promise<any> {
    return new Promise((resolve) => {
      console.log(data);
      resolve([]);
    });
  }
  updateDataApi(data: unknown): Promise<any> {
    return new Promise((resolve) => {
      console.log(data);
      resolve([]);
    });
  }
  deleteDataApi(data: unknown): Promise<any> {
    return new Promise((resolve) => {
      console.log(data);
      resolve([]);
    });
  }
}
export default new BasicTableApi();
