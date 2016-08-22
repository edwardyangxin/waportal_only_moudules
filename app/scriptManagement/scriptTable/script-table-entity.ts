/**
 * Created by yxin on 8/17/2016.
 */
export class ScriptTableEntity {
  constructor(
      public scriptName: string,
      public appName: string,
      public appVersion: string,
      public uploadTime: string,
      public uploadBy: string
  ) { }
}
