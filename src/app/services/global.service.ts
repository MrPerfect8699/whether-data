import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const REST_API_SERVER = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=d1e081785f07d12ab7550d6b473414a1";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  loader=true;
  mobVr=false;
  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(location){
    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3d8b309701a13f65b660fa2c64cdc517`);
  }
  public getHistory(city){
    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=5&appid=3d8b309701a13f65b660fa2c64cdc517`);
  }
}
