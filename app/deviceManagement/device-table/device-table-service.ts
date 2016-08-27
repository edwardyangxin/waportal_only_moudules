/**
 * Created by yxin on 8/17/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import {DeviceEntity} from "./device-table-entity";

@Injectable()
export class DeviceTableService {

  constructor(private http: Http) {}

  private recordUrl = "";
  private addRecordUrl = "";

  getRecords() : Observable<DeviceEntity[]>{
    return this.http.get('mockData/projects.json').map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  addNewRecord(record:DeviceEntity) {
    console.log("add project!")
  }

  deleteRecords(selectedRecords:DeviceEntity[]) {
    console.log("delete project!")
  }
}

