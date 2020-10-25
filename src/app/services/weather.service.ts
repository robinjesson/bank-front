import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private _notInteceptedHttpClient : HttpClient;

  constructor(private _httpBackend: HttpBackend) { 
    this._notInteceptedHttpClient = new HttpClient(this._httpBackend);
  }

  public async getWeather(city: string = 'Strasbourg') {
    const data: any = await this._notInteceptedHttpClient
      .get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=5713b95842c42c741c2ccf755e3dce53&lang=fr&units=metric')
      .pipe(take(1))
      .toPromise();
    return {
      temp: Math.floor(data.main.temp),
      description: data.weather[0].description,
      icon: data.weather[0].icon
    }
  }

  public getIconUrl(icon: string) {
    return 'http://openweathermap.org/img/wn/'+icon+'@2x.png';
  }
}
