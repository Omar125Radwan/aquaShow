import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  //action
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=28`)
  }
  //advaenture
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=12`)
  }
  //animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=16`)
  }
  //comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=35`);
  }
  //documantary
  fetchDocumantaryMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=99`);
  }
  //ScienceFiction
  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=878`);
  }
  //thriller
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apiKey}&with_genres=53`);
  }

}
