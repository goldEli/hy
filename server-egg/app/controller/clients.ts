
import { Controller } from 'egg';

export default class ClientsController extends Controller {
  public async list() {
    const { ctx } = this;
    ctx.body = await ctx.service.clients.getAll();
  }
}