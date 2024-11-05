
"use strict";

let FileRemoveDir = require('./FileRemoveDir.js')
let MessageInterval = require('./MessageInterval.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let FileRemove = require('./FileRemove.js')
let CommandAck = require('./CommandAck.js')
let LogRequestList = require('./LogRequestList.js')
let ParamPull = require('./ParamPull.js')
let WaypointPush = require('./WaypointPush.js')
let ParamPush = require('./ParamPush.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let CommandBool = require('./CommandBool.js')
let WaypointClear = require('./WaypointClear.js')
let FileOpen = require('./FileOpen.js')
let MountConfigure = require('./MountConfigure.js')
let CommandHome = require('./CommandHome.js')
let FileTruncate = require('./FileTruncate.js')
let SetMode = require('./SetMode.js')
let ParamGet = require('./ParamGet.js')
let WaypointPull = require('./WaypointPull.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let FileRename = require('./FileRename.js')
let CommandLong = require('./CommandLong.js')
let StreamRate = require('./StreamRate.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let SetMavFrame = require('./SetMavFrame.js')
let FileChecksum = require('./FileChecksum.js')
let ParamSet = require('./ParamSet.js')
let LogRequestData = require('./LogRequestData.js')
let FileWrite = require('./FileWrite.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let FileMakeDir = require('./FileMakeDir.js')
let CommandInt = require('./CommandInt.js')
let FileList = require('./FileList.js')
let CommandTOL = require('./CommandTOL.js')
let FileRead = require('./FileRead.js')
let FileClose = require('./FileClose.js')

module.exports = {
  FileRemoveDir: FileRemoveDir,
  MessageInterval: MessageInterval,
  CommandTriggerInterval: CommandTriggerInterval,
  FileRemove: FileRemove,
  CommandAck: CommandAck,
  LogRequestList: LogRequestList,
  ParamPull: ParamPull,
  WaypointPush: WaypointPush,
  ParamPush: ParamPush,
  CommandTriggerControl: CommandTriggerControl,
  CommandBool: CommandBool,
  WaypointClear: WaypointClear,
  FileOpen: FileOpen,
  MountConfigure: MountConfigure,
  CommandHome: CommandHome,
  FileTruncate: FileTruncate,
  SetMode: SetMode,
  ParamGet: ParamGet,
  WaypointPull: WaypointPull,
  LogRequestEnd: LogRequestEnd,
  FileRename: FileRename,
  CommandLong: CommandLong,
  StreamRate: StreamRate,
  WaypointSetCurrent: WaypointSetCurrent,
  VehicleInfoGet: VehicleInfoGet,
  SetMavFrame: SetMavFrame,
  FileChecksum: FileChecksum,
  ParamSet: ParamSet,
  LogRequestData: LogRequestData,
  FileWrite: FileWrite,
  CommandVtolTransition: CommandVtolTransition,
  FileMakeDir: FileMakeDir,
  CommandInt: CommandInt,
  FileList: FileList,
  CommandTOL: CommandTOL,
  FileRead: FileRead,
  FileClose: FileClose,
};
