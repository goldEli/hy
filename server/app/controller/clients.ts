import BaseController from "./base";

export default class ClientsController extends BaseController {
  public async list() {
    const { ctx } = this;
    const res = await ctx.service.clients.getAll();
    this.success(res);
  }
  public async add() {
    const name = this.ctx.params("name");
    const res = await this.ctx.service.clients.add({ name });
    this.success(res);
  }
  public async del() {
    const id = this.ctx.params("id");
    const res = await this.ctx.service.clients.del({ id });
    this.success(res);
  }
  public async update() {
    const params = this.ctx.params();
    const res = await this.ctx.service.clients.update(params);
    this.success(res);
  }
}
