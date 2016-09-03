import {ScriptTableEntity} from "./script-table-entity";
/**
 * Created by yxin on 8/17/2016.
 */
export class ScriptTable {
  constructor(
    public totalRecords: number,
    public records: ScriptTableEntity[]) { }
}
