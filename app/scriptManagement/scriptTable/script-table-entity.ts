/**
 * Created by yxin on 8/17/2016.
 */
export class ScriptTableEntity {
  constructor(
      public id: number,
      public name: string,
      public path: string,
      public appName: string,
      public appVersion: string,
      public createDate: string,
      public userName: string
  ) { }
}
