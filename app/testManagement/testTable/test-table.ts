import {TestTableEntity} from "./test-table-entity";
/**
 * Created by yxin on 8/17/2016.
 */
export class TestTable {
  constructor(
    public totalRecords: number,
    public records: TestTableEntity[]) { }
}
