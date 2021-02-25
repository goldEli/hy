import { Service } from "egg";
import { IClient } from "../model/clients";

/**
 * Test Service
 */
export default class Clients extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async getAll() {
    const { ctx } = this;
    return await ctx.model.Clients.findAll();
  }
  public async add(params: Omit<IClient, "id">) {
    const result = await this.ctx.model.Clients.create(params);
    return result;
  }
  public async del(params: Pick<IClient, "id">) {
    const result = await this.ctx.model.Clients.destroy({
      where: { id: params.id },
    });
    return result;
  }
  public async update(params: IClient) {
    const result = await this.ctx.model.Clients.update(
      {
        name: params.name,
      },
      {
        where: { id: params.id },
      }
    );
    return result;
  }
}
