// app/extend/context.ts
import { Context } from "egg";

export default {
  params(this: Context, key: string) {
    const method = this.request.method;
    if (method === "GET") {
      return key ? this.query[key] : this.query;
    } else {
      return key ? this.request.body[key] : this.request.body;
    }
  },
  // isAjax(this: Context) {
  //   return this.get('X-Requested-With') === 'XMLHttpRequest';
  // },
};
