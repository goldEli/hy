import BaseController from "./base";

export default class UserController extends BaseController {
  public async add() {
    const name = this.ctx.params("name");
    const password = this.ctx.params("password");
    const result = await this.ctx.service.user.add({ name, password });
    this.success(result);
  }
  public async login() {
    const name = this.ctx.params("name");
    const password = this.ctx.params("password");
    const user = await this.ctx.service.user.getUser({ name, password });
    console.log(user);

    if (!user) {
      this.error("用户不存在");
      return;
    }
    this.success({ token: "123" });
  }
}
