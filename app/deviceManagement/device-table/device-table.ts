import {DeviceTableEntity} from "./device-table-entity";
/**
 * Created by yxin on 8/17/2016.
 */
export class DeviceTable {
  constructor(
    public totalRecords: number,
    public records: DeviceTableEntity[]) { }
}
