import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeaterData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${environment.apiKey}`
    );
  }
}
