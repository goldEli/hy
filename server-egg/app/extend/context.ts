// app/extend/context.ts
import { Context } from "egg";

export default {
  params(this: Context, key: string) {
    const method = this.request.method;
    if (method === "GET") {
      return key ? this.query[key] : this.query;
    } else {
      return key ? this.request.body[key] : this.request.body;
    }
  },
  getUsername(this: Context) {
    const token = this.request.header.token as string;
    console.log("jwt", this.app.config.jwt.secret);
    const tokenCache = token
      ? (this.app.jwt.verify(token, this.app.config.jwt.secret) as any)
      : undefined;
    console.log(tokenCache);
    return tokenCache ? tokenCache.name : undefined;
  },
  getUserId(this: Context) {
    const token = this.request.header.token as string;
    const tokenCache = token
      ? (this.app.jwt.verify(token, this.app.config.jwt.secret) as any)
      : undefined;
    return tokenCache ? tokenCache.id : undefined;
  },
};
