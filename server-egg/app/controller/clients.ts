import { Controller } from "egg";

export default class ClientsController extends Controller {
  public async list() {
    const { ctx } = this;
    ctx.body = await ctx.service.clients.getAll();
  }
  public async add() {
    const name = this.ctx.params("name")
    this.ctx.body = await this.ctx.service.clients.add({name})
  }
  public async del() {
    const id = this.ctx.params("id")
    this.ctx.body = await this.ctx.service.clients.del({id})
  }
  public async update() {
    const params = this.ctx.params()
    this.ctx.body = await this.ctx.service.clients.update(params)
  }
}
