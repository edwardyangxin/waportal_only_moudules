/**
 * Created by yxin on 8/17/2016.
 */
export class AppTableEntity {
  constructor(
      public id: number,
      public name: string,
      public version: string,
      public type: string,
      public project: string,
      public createDate: string,
      public userName: string
  ) { }
}
