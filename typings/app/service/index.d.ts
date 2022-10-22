// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAnalyzeStaff = require('../../../app/service/analyzeStaff');
import ExportAssessment = require('../../../app/service/assessment');
import ExportAttendance = require('../../../app/service/attendance');
import ExportDepartment = require('../../../app/service/department');
import ExportLevel = require('../../../app/service/level');
import ExportRewardAndPunishment = require('../../../app/service/rewardAndPunishment');
import ExportSalaryAdjustment = require('../../../app/service/salaryAdjustment');
import ExportStaff = require('../../../app/service/staff');
import ExportUserHandler = require('../../../app/service/userHandler');

declare module 'egg' {
  interface IService {
    analyzeStaff: AutoInstanceType<typeof ExportAnalyzeStaff>;
    assessment: AutoInstanceType<typeof ExportAssessment>;
    attendance: AutoInstanceType<typeof ExportAttendance>;
    department: AutoInstanceType<typeof ExportDepartment>;
    level: AutoInstanceType<typeof ExportLevel>;
    rewardAndPunishment: AutoInstanceType<typeof ExportRewardAndPunishment>;
    salaryAdjustment: AutoInstanceType<typeof ExportSalaryAdjustment>;
    staff: AutoInstanceType<typeof ExportStaff>;
    userHandler: AutoInstanceType<typeof ExportUserHandler>;
  }
}
