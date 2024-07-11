import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius',
  standalone: true,
})
export class KelvinToCelsiusPipe implements PipeTransform {
  transform(value: number, decimalPlaces: number = 1): string {
    const celsius = value - 273.15;
    return celsius.toFixed(decimalPlaces);
  }
}
