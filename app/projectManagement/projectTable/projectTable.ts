import {ProjectEntity} from "./projectEntity";
/**
 * Created by yxin on 8/17/2016.
 */
export class ProjectTable {
  constructor(
    public totalRecords: number,
    public records: ProjectEntity[]) { }
}
