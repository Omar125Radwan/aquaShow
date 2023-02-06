import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documantaryMovieResult: any = [];
  scienceFictionMovieResult: any = [];
  thrilleMovieResult: any = [];
  constructor(private service: MovieApiServiceService) { }

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.comedynData();
    this.thrilleData();
    this.actionData();
    this.documantaryData();
    this.animationData();
    this.advantureData();
    this.scienceFictionData();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((res) => {
      console.log(res);
      this.trendingMovieResult = res.results;
    })
  }

  actionData() {
    this.service.fetchActionMovies().subscribe((res) => {
      this.actionMovieResult = res.results;
    })
  }

  advantureData() {
    this.service.fetchAdventureMovies().subscribe((res) => {
      this.adventureMovieResult = res.results;
    })
  }

  animationData() {
    this.service.fetchAnimationMovies().subscribe((res) => {
      this.animationMovieResult = res.results;
    })
  }

  comedynData() {
    this.service.fetchComedyMovies().subscribe((res) => {
      this.comedyMovieResult = res.results;
    })
  }

  documantaryData() {
    this.service.fetchDocumantaryMovies().subscribe((res) => {
      this.documantaryMovieResult = res.results;
    })
  }

  scienceFictionData() {
    this.service.fetchScienceFictionMovies().subscribe((res) => {
      this.scienceFictionMovieResult = res.results;
    })
  }

  thrilleData() {
    this.service.fetchThrillerMovies().subscribe((res) => {
      this.thrilleMovieResult = res.results;
    })
  }

}
