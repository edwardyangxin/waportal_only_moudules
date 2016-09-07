/**
 * Created by yxin on 8/17/2016.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {ScriptTableEntity} from "./script-table-entity";
import {AppSettings} from "../../commonFactory/app-settings";
import {ScriptTable} from "./script-table";
import {AppTableEntity} from "../../appManagement/appTable/appTableEntity";
import {AppList} from "./app-list";

@Injectable()
export class ScriptTableService {

  constructor(private http: Http) {}

  private recordUrl = AppSettings.API_ENDPOINT+"/script/table";
  private addRecordUrl = AppSettings.API_ENDPOINT+"/script/save";
  private deleteRecordUrl = AppSettings.API_ENDPOINT+"/script/delete";
  private appListUrl = AppSettings.API_ENDPOINT+"/app/list";
  private caseAdd = AppSettings.API_ENDPOINT+"/case/add";
  private getScript = AppSettings.API_ENDPOINT+"/script";

  getRecords(first:number,rows:number) : Observable<ScriptTable>{
    console.log(this.recordUrl);
    let body = JSON.stringify({ first,rows });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.recordUrl, body, options).map(this.extractData).catch(this.handleError);
    return this.http.get('mockData/scripts.json').map(this.extractData).catch(this.handleError);

  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private extractText(res: Response) {
    return res.text();
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  addNewRecord(record:ScriptTableEntity,app:AppTableEntity) {
    console.log(this.addRecordUrl);
    let id = record.id;
    let body = JSON.stringify({ id, app });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.addRecordUrl, body, options).map(this.extractData).catch(this.handleError);
    return;
  }

  deleteRecords(selectedRecords:ScriptTableEntity[]) {
    console.log(this.deleteRecordUrl);
    let ids = new Array<string>();
    selectedRecords.forEach(record => {
      ids.push(record.id);
    });
    let body = JSON.stringify({ ids });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.deleteRecordUrl, body, options).map(this.extractData).catch(this.handleError);
    return;
  }

  getAppList() : Observable<AppList> {
    console.log(this.appListUrl);
    return this.http.get('mockData/appList.json').map(this.extractData).catch(this.handleError);
  }

  addNewCase(caseName:string, selectedRecords:ScriptTableEntity[]) {
    console.log(this.caseAdd);
    // let caseName = caseName;
    let scriptIds = new Array<string>();
    selectedRecords.forEach(record => {
      scriptIds.push(record.id);
    });
    let body = JSON.stringify({ caseName, scriptIds });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(this.caseAdd, body, options).map(this.extractData).catch(this.handleError);
    return;
  }

  getScriptCode(record:ScriptTableEntity): Observable<string> {
    let id = record.id;
    let url = this.getScript+"/"+id;
    console.log(url);
    // return this.http.get(url).map(this.extractText).catch(this.handleError);
    return this.http.get('mockData/script.py').map(this.extractText).catch(this.handleError);
  }

  uploadScript(id:string, code:string) {
    let url = this.getScript+"/"+id+"/upload";
    let script = code;
    let body = JSON.stringify({ id, script });
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // return this.http.post(url, body, options).map(this.extractData).catch(this.handleError);
    return;
  }
}

