import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import SwiperCore, {
  SwiperOptions,
  Navigation, Pagination, Scrollbar,
  A11y, Virtual, Zoom,
  Autoplay,
  Thumbs,
  Controller
} from 'swiper';
import { SwiperComponent } from "swiper/angular";
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

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
  controlledSwiper: any;
  setControlledSwiper(swiper: any) {
    this.controlledSwiper = swiper;
  }
  swiperConfig: any = {
    spaceBetween: 20,
    breakpoints: {
      300: {
        slidesPerView: 2,
      },
      500: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 8,
      },
      1200: {
        slidesPerView: 11,
      },
      1400: {
        slidesPerView: 13,
      },
      1700: {
        slidesPerView: 16,
      },
      1920: {
        slidesPerView: 18,
      },
    }
  }
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
