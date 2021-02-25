// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportClients from '../../../app/model/clients';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Clients: ReturnType<typeof ExportClients>;
    User: ReturnType<typeof ExportUser>;
  }
}
