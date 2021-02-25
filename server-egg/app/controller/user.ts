import { IUser } from "../model/user";
import BaseController from "./base";

export default class UserController extends BaseController {
  async getToken(user: Omit<IUser, "password">) {
    const token = await this.app.jwt.sign(
      { id: user.id, name: user.name },
      this.app.config.jwt.secret
    );
    return token
  }
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

    if (!user) {
      this.error("用户不存在");
      return;
    }

    const token = await this.getToken({id: user.id, name: user.name})
    this.success({ token });
  }
}
