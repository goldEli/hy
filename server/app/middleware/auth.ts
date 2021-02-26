import { Context } from "egg";

// 这里是你自定义的中间件
export default function authMiddleware(options: any): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    const url = ctx.request.url.split("?")[0];
    const session = ctx.session.visited;
    if (!session && !options.exclude.includes(url)) {
      ctx.body = {
        status: 1001,
        errMsg: "用户未登录",
      };
    } else {
      await next();
    }
  };
}
