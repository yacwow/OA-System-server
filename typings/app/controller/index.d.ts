// This file is created by egg-ts-helper@1.30.4
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnalyzeStaff = require('../../../app/controller/analyzeStaff');
import ExportAssessment = require('../../../app/controller/assessment');
import ExportAttendance = require('../../../app/controller/attendance');
import ExportDepartment = require('../../../app/controller/department');
import ExportLevel = require('../../../app/controller/level');
import ExportRewardAndPunishment = require('../../../app/controller/rewardAndPunishment');
import ExportSalaryAdjustment = require('../../../app/controller/salaryAdjustment');
import ExportStaff = require('../../../app/controller/staff');
import ExportUserHandler = require('../../../app/controller/userHandler');

declare module 'egg' {
  interface IController {
    analyzeStaff: ExportAnalyzeStaff;
    assessment: ExportAssessment;
    attendance: ExportAttendance;
    department: ExportDepartment;
    level: ExportLevel;
    rewardAndPunishment: ExportRewardAndPunishment;
    salaryAdjustment: ExportSalaryAdjustment;
    staff: ExportStaff;
    userHandler: ExportUserHandler;
  }
}
