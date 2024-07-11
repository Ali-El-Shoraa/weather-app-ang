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
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=072ac97d06d6ea14d8fedd6301636898`
    );
  }
}
