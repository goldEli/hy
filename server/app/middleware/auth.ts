import { Context } from 'egg';

// 这里是你自定义的中间件
export default function authMiddleware(options: any): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    // 你可以获取 config 的配置：
    // const config = ctx.app.config;
    // config.xxx....
    const url = ctx.request.url.split("?")[0];
    const session = ctx.session[ctx.getUserId()]
    console.log("userId", ctx.getUserId(), session)
    console.log("egg_sess", ctx.session)
    // const token = ctx.request.token
    // const username = await ctx.app.redis.get(ctx.username);
    // const isUser = token === username 
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