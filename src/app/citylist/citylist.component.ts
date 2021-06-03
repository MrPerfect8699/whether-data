import { Component, OnInit } from '@angular/core';
import { combineLatest, forkJoin } from 'rxjs';
import { GlobalService } from '../services/global.service'
@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.scss']
})
export class CitylistComponent implements OnInit {
  weatherReport: any = [];
  weatherCurrent: any;
  lastFourDays
  LocationData = []
  constructor(public service: GlobalService) { }

  ngOnInit(): void {
    // this.service.sendGetRequest('London').subscribe(x=>{
    //  this.whetherReport = x;
    //   this.weatherCurrent=this.whetherReport.weather
    //   console.log(this.weatherCurrent);
    // })

    // this.Locations.forEach(x=>{
    //   this.LocationData.push(this.service.sendGetRequest(x))
    // })
    // combineLatest([this.service.sendGetRequest('London'),
    //     this.service.sendGetRequest('Switzerland'),
    //     this.service.sendGetRequest('Rome'),
    //     this.service.sendGetRequest('Paris'),
    //     this.service.sendGetRequest('Berlin'),
    // ])
    this.service.loader=true;
    forkJoin([this.service.sendGetRequest('London'),
    this.service.sendGetRequest('Switzerland'),
    this.service.sendGetRequest('Rome'),
    this.service.sendGetRequest('Paris'),
    this.service.sendGetRequest('Berlin'),
    ]).subscribe(x => {
      this.weatherReport = x;
      console.log(this.weatherReport);
      this.service.loader=false;
    })
    this.onExpand('London' , false)
  }
  onExpand(cityName, flag){
    this.service.mobVr = flag;
    this.service.loader=true;
    this.service.getHistory(cityName).subscribe(x=>{
      this.lastFourDays = [x];
      console.log(this.lastFourDays);
      this.service.loader=false;
    })
  }
}
