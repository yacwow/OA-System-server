// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAssessment = require('../../../app/model/Assessment');
import ExportAttendance = require('../../../app/model/Attendance');
import ExportDepartment = require('../../../app/model/Department');
import ExportLevel = require('../../../app/model/Level');
import ExportRewardAndPunishment = require('../../../app/model/RewardAndPunishment');
import ExportRouteList = require('../../../app/model/RouteList');
import ExportSalaryAdjustment = require('../../../app/model/SalaryAdjustment');
import ExportStaff = require('../../../app/model/Staff');

declare module 'egg' {
  interface IModel {
    Assessment: ReturnType<typeof ExportAssessment>;
    Attendance: ReturnType<typeof ExportAttendance>;
    Department: ReturnType<typeof ExportDepartment>;
    Level: ReturnType<typeof ExportLevel>;
    RewardAndPunishment: ReturnType<typeof ExportRewardAndPunishment>;
    RouteList: ReturnType<typeof ExportRouteList>;
    SalaryAdjustment: ReturnType<typeof ExportSalaryAdjustment>;
    Staff: ReturnType<typeof ExportStaff>;
  }
}
