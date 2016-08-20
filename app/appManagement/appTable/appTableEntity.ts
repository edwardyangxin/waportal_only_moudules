/**
 * Created by yxin on 8/17/2016.
 */
export class AppTableEntity {
  constructor(
      public appName: string,
      public appVersion: string,
      public os: string,
      public project: string,
      public uploadBy: string,
      public ts: string) { }
}
