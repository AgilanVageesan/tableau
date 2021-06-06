import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidrepoService {
  constructor(private http:HttpClient) 
  { }
  GetCovidDetailsByCountry(){
    return this.http.get("https://disease.sh/v3/covid-19/countries/");
  }
}

//   "country": "Afghanistan",
//   "cases": 79224,
//   "deaths": 3145,
//   "recovered": 58265,
//   "active": 17814,
//   "todayCases": 0,
//   "todayDeaths": 0,
//   "todayRecovered": 0,
//   "critical": 1124,
//   "tests": 492132,
//   "testsPerOneMillion": 12385,
//   "population": 39737017,
//   "activePerOneMillion": 448.3,
//   "casesPerOneMillion": 1994,
//   "deathsPerOneMillion": 79,
//   "recoveredPerOneMillion": 1466.27
// },