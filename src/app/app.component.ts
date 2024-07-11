import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
import { KelvinToCelsiusPipe } from './models/kelvin-to-celsius.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, KelvinToCelsiusPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private WeatherService: WeatherService) {}

  WeatherData?: WeatherData;
  cityName: string = 'cairo';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);

    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.WeatherService.getWeaterData(cityName).subscribe({
      next: (response) => {
        this.WeatherData = response;
      },
    });
  }
}
