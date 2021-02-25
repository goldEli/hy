import { Application } from "egg";

export default (app: Application) => {
  const { controller, router } = app;

  router.get("/", controller.home.index);
  router.get("/api/clients/list", controller.clients.list);
  router.post("/api/clients/add", controller.clients.add);
  router.post("/api/clients/del", controller.clients.del);
  router.post("/api/clients/update", controller.clients.update);
};
