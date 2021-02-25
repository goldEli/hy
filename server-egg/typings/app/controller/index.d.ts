// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase from '../../../app/controller/base';
import ExportClients from '../../../app/controller/clients';
import ExportHome from '../../../app/controller/home';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    base: ExportBase;
    clients: ExportClients;
    home: ExportHome;
    user: ExportUser;
  }
}
