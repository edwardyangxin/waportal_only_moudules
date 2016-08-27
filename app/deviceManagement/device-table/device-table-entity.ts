/**
 * Created by yxin on 8/17/2016.
 */
export class DeviceEntity {
  constructor(
      public deviceBrand: string,
      public deviceModel: string,
      public deviceVersion: string,
      public deviceID: string,
      public deviceStatus: string,
      public deviceApps: string
  ) { }
}
