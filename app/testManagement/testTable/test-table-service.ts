/**
 * Created by yxin on 8/17/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {TestTableEntity} from "./test-table-entity";

@Injectable()
export class TestTableService {

  constructor(private http: Http) {}

  private recordUrl = "";
  private addRecordUrl = "";

  getRecords() : Observable<TestTableEntity[]>{
    return this.http.get('mockData/apps.json').map(this.extractData).catch(this.handleError);
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

  addNewRecord(record:TestTableEntity) {
    console.log("add project!")
  }

  deleteRecords(selectedRecords:TestTableEntity[]) {
    console.log("delete project!")
  }
}

