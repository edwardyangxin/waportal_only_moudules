/**
 * Created by yxin on 8/17/2016.
 */
export class ReportTableEntity {
  constructor(
      public id: string,
      public name: string,
      public appName: string,
      public appVersion: string,
      public devices: Array<string>,
      public success: string,
      public fail: string,
      public status: string
  ) { }
}
