import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TranslateService {
  private translateUrl = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170209T103130Z.14c918de1955e512.df5fd82eec0d6ed1b72710564b79d4876c95371d&lang=en-es&text=';
  constructor (private http: Http) {}
  getTranslation (str: string): Observable<string> {
    return this.http.get(this.translateUrl + str)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    const body = res.json();
    return body.text[0] || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}