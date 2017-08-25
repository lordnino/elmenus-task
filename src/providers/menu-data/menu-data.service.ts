import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MenuDataService {

  private url: string = "assets/burger.json";

  constructor(private http: Http) { }

  getMenuData() {
    return this.http.get(this.url).map(res => res.json());
  }

  test() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let data = {
      userid: 1,
      thread_id: 387,
      insecure: 'cool',
      callback: 'JSON_CALLBACK',
      pw: 'TestPassword',
      text: 'From Mobile App2'
    };

    let url = 'https://themommyclub.com/apicore/';
    return this.http.post(`${url}buddypressread/messages_set_reply/`, JSON.stringify(data), {headers: headers}).map(res => res.json());
  }

  // ;fsunction() {
  //   var deferred = $q.defer();

  //   var testString = {
  //     userid: 1,
  //     thread_id: 387,
  //     insecure: 'cool',
  //     callback: 'JSON_CALLBACK',
  //     pw: 'TestPassword',
  //     text: 'From Mobile App2'
  //   };

  //   var test = JSON.stringify(testString);

  //   var req =
  //     {
  //       method: 'POST',
  //       url: WORDPRESS_API_URL + 'buddypressread/messages_set_reply/',

  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  //         'Access-Control-Allow-Origin': '*',
  //         'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  //         'Access-Control-Allow-Headers': 'acrHeaders',
  //         'X-API-KEY': 'key'
  //       },
  //       data: test,
  //     };

  //   return $http(req).then(function (response) {
  //     console.log('Response:', response);
  //     console.log(WORDPRESS_API_URL);
  //   }, function (data, status, headers, config) {
  //     console.log('Error:', data);
  //   });

  //   return deferred.promise;

  // }


}
