/**
 * Created by yxin on 8/17/2016.
 */
export class DeviceTableEntity {
  constructor(
    public id: string,
    public type: string,
    public status:string,
    public cpuabi: string,
    public sdk: string,
    public osName: string,
    public width: string,
    public height: string,
    public brand: string,
    public model: string,
    public version: string,
    public host: string
  ) { }
}
