/**
 * Created by yxin on 8/17/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ProjectEntity} from './projectEntity';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ProjectTableService {

  constructor(private http: Http) {}

  private recordUrl = "";
  private addRecordUrl = "";

  getRecords() : Observable<ProjectEntity[]>{
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

  addNewRecord(record:ProjectEntity) {
    console.log("add project!")
  }

  deleteRecords(selectedRecords:ProjectEntity[]) {
    console.log("delete project!")
  }
}

