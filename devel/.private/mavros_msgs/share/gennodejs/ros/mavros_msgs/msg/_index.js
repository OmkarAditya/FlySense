
"use strict";

let Trajectory = require('./Trajectory.js');
let DebugValue = require('./DebugValue.js');
let ActuatorControl = require('./ActuatorControl.js');
let Param = require('./Param.js');
let HilGPS = require('./HilGPS.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let Tunnel = require('./Tunnel.js');
let CellularStatus = require('./CellularStatus.js');
let LogEntry = require('./LogEntry.js');
let ManualControl = require('./ManualControl.js');
let MountControl = require('./MountControl.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let RadioStatus = require('./RadioStatus.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let State = require('./State.js');
let WaypointReached = require('./WaypointReached.js');
let RCIn = require('./RCIn.js');
let ESCInfo = require('./ESCInfo.js');
let Waypoint = require('./Waypoint.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let WaypointList = require('./WaypointList.js');
let HomePosition = require('./HomePosition.js');
let ParamValue = require('./ParamValue.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let SysStatus = require('./SysStatus.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let VehicleInfo = require('./VehicleInfo.js');
let Thrust = require('./Thrust.js');
let PositionTarget = require('./PositionTarget.js');
let Vibration = require('./Vibration.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let LandingTarget = require('./LandingTarget.js');
let RCOut = require('./RCOut.js');
let Mavlink = require('./Mavlink.js');
let VFR_HUD = require('./VFR_HUD.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let LogData = require('./LogData.js');
let RTKBaseline = require('./RTKBaseline.js');
let ExtendedState = require('./ExtendedState.js');
let TerrainReport = require('./TerrainReport.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let HilControls = require('./HilControls.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let Altitude = require('./Altitude.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let StatusText = require('./StatusText.js');
let GPSRAW = require('./GPSRAW.js');
let BatteryStatus = require('./BatteryStatus.js');
let CommandCode = require('./CommandCode.js');
let GPSRTK = require('./GPSRTK.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let GPSINPUT = require('./GPSINPUT.js');
let ESCStatus = require('./ESCStatus.js');
let HilSensor = require('./HilSensor.js');
let FileEntry = require('./FileEntry.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let RTCM = require('./RTCM.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let PlayTuneV2 = require('./PlayTuneV2.js');

module.exports = {
  Trajectory: Trajectory,
  DebugValue: DebugValue,
  ActuatorControl: ActuatorControl,
  Param: Param,
  HilGPS: HilGPS,
  ADSBVehicle: ADSBVehicle,
  Tunnel: Tunnel,
  CellularStatus: CellularStatus,
  LogEntry: LogEntry,
  ManualControl: ManualControl,
  MountControl: MountControl,
  TimesyncStatus: TimesyncStatus,
  RadioStatus: RadioStatus,
  AttitudeTarget: AttitudeTarget,
  CamIMUStamp: CamIMUStamp,
  State: State,
  WaypointReached: WaypointReached,
  RCIn: RCIn,
  ESCInfo: ESCInfo,
  Waypoint: Waypoint,
  HilStateQuaternion: HilStateQuaternion,
  WaypointList: WaypointList,
  HomePosition: HomePosition,
  ParamValue: ParamValue,
  EstimatorStatus: EstimatorStatus,
  SysStatus: SysStatus,
  ESCTelemetryItem: ESCTelemetryItem,
  VehicleInfo: VehicleInfo,
  Thrust: Thrust,
  PositionTarget: PositionTarget,
  Vibration: Vibration,
  HilActuatorControls: HilActuatorControls,
  NavControllerOutput: NavControllerOutput,
  LandingTarget: LandingTarget,
  RCOut: RCOut,
  Mavlink: Mavlink,
  VFR_HUD: VFR_HUD,
  CompanionProcessStatus: CompanionProcessStatus,
  LogData: LogData,
  RTKBaseline: RTKBaseline,
  ExtendedState: ExtendedState,
  TerrainReport: TerrainReport,
  WheelOdomStamped: WheelOdomStamped,
  CameraImageCaptured: CameraImageCaptured,
  HilControls: HilControls,
  OpticalFlowRad: OpticalFlowRad,
  ESCStatusItem: ESCStatusItem,
  Altitude: Altitude,
  ESCTelemetry: ESCTelemetry,
  StatusText: StatusText,
  GPSRAW: GPSRAW,
  BatteryStatus: BatteryStatus,
  CommandCode: CommandCode,
  GPSRTK: GPSRTK,
  GlobalPositionTarget: GlobalPositionTarget,
  GPSINPUT: GPSINPUT,
  ESCStatus: ESCStatus,
  HilSensor: HilSensor,
  FileEntry: FileEntry,
  OnboardComputerStatus: OnboardComputerStatus,
  RTCM: RTCM,
  ESCInfoItem: ESCInfoItem,
  OverrideRCIn: OverrideRCIn,
  MagnetometerReporter: MagnetometerReporter,
  PlayTuneV2: PlayTuneV2,
};
