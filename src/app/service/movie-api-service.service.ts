import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }
  baseurl = 'https://api.themoviedb.org/3';
  apiKey = 'b5510e882ea2b524dcad2d4e0774b7db';

  // bannerApidata

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apiKey}`);
  }

  // trending
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apiKey}`);
  }

  // search
  searchMovie(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`)
  }

  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apiKey}`)
  }

  getMovieVid(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apiKey}`)
  }

  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apiKey}`);
  }

  fetchSingleTypeMovies(genr: string): Observable<any> {
    /* if(genr === 'aciton') {
      return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=${genr}`);
    } else {
      return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=${genr}`);
    } */
    switch (genr) {
      case 'action':
        return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);
        break;
      case 'advaenture':
        return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=18`);
        break;
      case 'animation':
        return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=16`);
        break;
      case 'comedy':
        return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=35`);
        break;
      case 'documantary':
        return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=99`);
        break;
      case 'ScienceFiction':
        return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=878`);
        break;
      case 'thriller':
        return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=53`);
        break;
      default:
        return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=${genr}`);
        break;
    }
  }

}
