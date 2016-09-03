
import {AppTableEntity} from "./appTableEntity";
/**
 * Created by yxin on 8/17/2016.
 */
export class AppTable {
  constructor(
    public totalRecords: number,
    public records: AppTableEntity[]) { }
}
