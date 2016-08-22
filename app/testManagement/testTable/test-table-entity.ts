/**
 * Created by yxin on 8/17/2016.
 */
export class TestTableEntity {
  constructor(
      public caseName: string,
      public appName: string,
      public appVersion: string,
      public os: string,
      public createdTime: string,
      public createdBy: string,
      public status: string
  ) { }
}
