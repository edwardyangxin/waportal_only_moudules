/**
 * Created by yxin on 8/17/2016.
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {AppTableEntity} from "./appTableEntity";
import {AppSettings} from "../../commonFactory/app-settings";
import {AppTable} from "./appTable";
import {ProjectList} from "./projectList";
import {ProjectEntity} from "../../projectManagement/projectTable/projectEntity";

@Injectable()
export class AppTableService {

  constructor(private http: Http) {}

  private recordUrl = AppSettings.API_ENDPOINT+"/app/table";
  private addRecordUrl = AppSettings.API_ENDPOINT+"/app/save";
  private deleteRecordUrl = AppSettings.API_ENDPOINT+"/app/delete";
  private projectListUrl = AppSettings.API_ENDPOINT+"/project/list";

  getRecords(first:number,rows:number) : Observable<AppTable>{
    console.log(this.recordUrl);
    let body = JSON.stringify({ first,rows });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.recordUrl, body, options).map(this.extractData).catch(this.handleError);
    return this.http.get('mockData/apps.json').map(this.extractData).catch(this.handleError);

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
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  addNewRecord(record:AppTableEntity,project:ProjectEntity) {
    console.log(this.addRecordUrl);
    let id = record.id;
    let version = record.version;
    let body = JSON.stringify({ id,version,project});
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.addRecordUrl, body, options).map(this.extractData).catch(this.handleError);
    return;
  }

  deleteRecords(selectedRecords:AppTableEntity[]) {
    console.log(this.deleteRecordUrl);
    let ids = new Array<number>();
    selectedRecords.forEach(record => {
      ids.push(record.id);
    })
    let body = JSON.stringify({ ids });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.deleteRecordUrl, body, options).map(this.extractData).catch(this.handleError);
    return;
  }

  getProjectList() : Observable<ProjectList> {
    console.log(this.projectListUrl);
    return this.http.get('mockData/projectList.json').map(this.extractData).catch(this.handleError);
  }
}

