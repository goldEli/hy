// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportClients from '../../../app/controller/clients';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    clients: ExportClients;
    home: ExportHome;
  }
}
