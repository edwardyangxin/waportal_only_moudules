/**
 * Created by yxin on 8/17/2016.
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {AppSettings} from "../../commonFactory/app-settings";
import {TestTable} from "./test-table";
import {TestTableEntity} from "./test-table-entity";
import {DeviceTableEntity} from "../../deviceManagement/device-table/device-table-entity";

@Injectable()
export class TestTableService {

  constructor(private http: Http) {}

  private recordUrl = AppSettings.API_ENDPOINT+"/case/table";
  private addRecordUrl = AppSettings.API_ENDPOINT+"/case/save";
  private deleteRecordUrl = AppSettings.API_ENDPOINT+"/case/delete";
  private deployCaseUrl = AppSettings.API_ENDPOINT+"/case/deploy";

  getRecords(first:number,rows:number) : Observable<TestTable>{
    console.log(this.recordUrl);
    let body = JSON.stringify({ first,rows });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.recordUrl, body, options).map(this.extractData).catch(this.handleError);
    return this.http.get('mockData/tests.json').map(this.extractData).catch(this.handleError);

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

  deleteRecords(selectedRecords:TestTableEntity[]) {
    console.log(this.deleteRecordUrl);
    let ids = new Array<string>();
    selectedRecords.forEach(record => {ids.push(record.id);});
    let body = JSON.stringify({ ids });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.deleteRecordUrl, body, options).map(this.extractData).catch(this.handleError);
    return;
  }

  deployCase(id:string, selectedRecords:DeviceTableEntity[]) {
    console.log(this.deployCaseUrl);
    let deviceIds = new Array<string>();
    selectedRecords.forEach(record => {deviceIds.push(record.id);});
    let body = JSON.stringify({ id, deviceIds });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.deployCaseUrl, body, options).map(this.extractData).catch(this.handleError);
    return;
  }
}

