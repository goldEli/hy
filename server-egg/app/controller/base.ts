import { Controller } from "egg";

class BaseController extends Controller {
  async success(data: unknown) {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data,
    };
  }
  async error(errMsg: string) {
    const { ctx } = this;
    ctx.body = {
      status: 500,
      errMsg,
    };
  }
}

export default BaseController