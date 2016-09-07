/**
 * Created by yxin on 8/17/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {ProjectEntity} from './projectEntity';
import { Observable }     from 'rxjs/Observable';
import {AppSettings} from "../../commonFactory/app-settings";
import {ProjectTable} from "./projectTable";

@Injectable()
export class ProjectTableService {

  constructor(private http: Http) {}
  // private baseUrl = "http://127.0.0";
  private recordUrl = AppSettings.API_ENDPOINT+"/project/table";
  private addRecordUrl = AppSettings.API_ENDPOINT+"/project/save";
  private deleteRecordUrl = AppSettings.API_ENDPOINT+"/project/delete";

  getRecords(first:number,rows:number,filters: Map<string,Array<string>>, sortField:string, sortOrder:string) : Observable<ProjectTable>{
    console.log(this.recordUrl);
    let body = JSON.stringify({ first,rows, filters, sortField, sortOrder });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.recordUrl, body, options).map(this.extractData).catch(this.handleError);
    // return this.http.get('mockData/projects.json').map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  addNewRecord(record:ProjectEntity) {
    console.log(this.addRecordUrl);
    let name = record.name;
    let body = JSON.stringify({ name });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.addRecordUrl, body, options).map(this.extractData).catch(this.handleError);
  }

  deleteRecords(selectedRecords:ProjectEntity[]) {
    console.log(this.deleteRecordUrl);
    let ids = new Array<string>();
    selectedRecords.forEach(record => {
      ids.push(record.id);
    });
    let body = JSON.stringify({ ids });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.deleteRecordUrl, body, options).map(this.extractData).catch(this.handleError);
  }
}

