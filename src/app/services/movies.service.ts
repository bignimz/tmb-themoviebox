import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    constructor(private http: HttpClient) {}

    // Create a method to get movies
    getMovies() {
        return this.http.get('https://api.themoviedb.org/4/list/1?api_key=671ed7b02c08ea9e6a92cb4313845624');
    }

  apiUrl = 'https://api.themoviedb.org/4/list/1?api_key=';

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(`${this.apiUrl}` + `${environment.apiKey}`);
  }

}
