class BasicTableApi {
  getDataApi(data: unknown): Promise<any> {
    return new Promise((resolve) => {
      console.log(data);
      resolve([]);
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
