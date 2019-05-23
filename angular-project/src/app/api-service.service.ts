import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }

  getCurrentLocation() {
    return this.httpClient.get("http://ip-api.com/json/24.48.0.1");
  }
}
