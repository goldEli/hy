
import { Service } from "egg";
import { IUser } from "../model/user";

/**
 * Test Service
 */
export default class User extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async add(params: Omit<IUser, "id">) {
    const result = await this.ctx.model.User.create(params);
    return result;
  }
  public async getUser(params: Omit<IUser, "id">) {
    const result = await this.ctx.model.User.findOne({where: params})
    return result
  }
}