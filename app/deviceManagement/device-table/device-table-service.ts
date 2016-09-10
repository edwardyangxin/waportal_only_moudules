/**
 * Created by yxin on 8/17/2016.
 */
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {DeviceTableEntity} from "./device-table-entity";
import {AppSettings} from "../../commonFactory/app-settings";
import {DeviceTable} from "./device-table";

@Injectable()
export class DeviceTableService {

  constructor(private http: Http) {}

  private recordUrl = AppSettings.API_ENDPOINT+"/device/table";
  private addRecordUrl = AppSettings.API_ENDPOINT+"/device/save";
  private deleteRecordUrl = AppSettings.API_ENDPOINT+"/device/delete";

  getRecords(first:number,rows:number,filters: Map<string,Array<string>>, sortField:string, sortOrder:string) : Observable<DeviceTable>{
    console.log(this.recordUrl);
    let body = JSON.stringify({ first,rows, filters, sortField, sortOrder });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.recordUrl, body, options).map(this.extractData).catch(this.handleError);
    // return this.http.get('mockData/devices.json').map(this.extractData).catch(this.handleError);
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

  deleteRecords(selectedRecords:DeviceTableEntity[]) {
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

}

