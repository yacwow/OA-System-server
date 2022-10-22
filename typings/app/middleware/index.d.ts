// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth = require('../../../app/middleware/auth');
import ExportCheckUserExists = require('../../../app/middleware/checkUserExists');
import ExportCheckedIdentity = require('../../../app/middleware/checkedIdentity');
import ExportResponseData = require('../../../app/middleware/responseData');

declare module 'egg' {
  interface IMiddleware {
    auth: typeof ExportAuth;
    checkUserExists: typeof ExportCheckUserExists;
    checkedIdentity: typeof ExportCheckedIdentity;
    responseData: typeof ExportResponseData;
  }
}
