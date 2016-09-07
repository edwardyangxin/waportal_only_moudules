
import {ReportTableEntity} from "./report-table-entity";
/**
 * Created by yxin on 8/17/2016.
 */
export class ReportTable {
  constructor(
    public totalRecords: number,
    public records: ReportTableEntity[]) { }
}
