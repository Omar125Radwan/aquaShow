import { Component, OnInit } from '@angular/core';
import { exhaustMap, from, map, Observable, of } from 'rxjs';
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
  categories = [
    {
      name: 'action',
      genr: '28',
    },
    {
      name: 'advaenture',
      genr: '12',
    },
    {
      name: 'animation',
      genr: '16',
    },
    {
      name: 'comedy',
      genr: '35',
    },
    {
      name: 'documantary',
      genr: '99',
    },
    {
      name: 'ScienceFiction',
      genr: '878',
    },
    {
      name: 'thriller',
      genr: '53',
    },
  ];
  getData: any = [];
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
    let generName = this.categories.map((genrName) => {
      return genrName.genr;
    });
    this.bannerData();
    this.trendingData();
    this.actionData(generName[0]);
    this.advantureData(generName[1]);
    this.animationData(generName[2]);
    this.comedynData(generName[3]);
    this.documantaryData(generName[4]);
    this.scienceFictionData(generName[5]);
    this.thrilleData(generName[6]);
    this.getByCategoryData(generName.map(() => {}));
    console.log(generName);
  }
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((res) => {
      this.trendingMovieResult = res.results;
    })
  }

  getByCategoryData(genr: any) {
    this.service.fetchSingleTypeMovies(genr).subscribe((res) => {
      this.getData = res.results;
    });
  }

  actionData(genr: string) {
    this.service.fetchSingleTypeMovies(genr).subscribe((res) => {
      this.actionMovieResult = res.results;
    })
  }

  advantureData(genr: string) {
    this.service.fetchSingleTypeMovies(genr).subscribe((res) => {
      this.adventureMovieResult = res.results;
    })
  }

  animationData(genr: string) {
    this.service.fetchSingleTypeMovies(genr).subscribe((res) => {
      this.animationMovieResult = res.results;
    })
  }

  comedynData(genr: string) {
    this.service.fetchSingleTypeMovies(genr).subscribe((res) => {
      this.comedyMovieResult = res.results;
    })
  }

  documantaryData(genr: string) {
    this.service.fetchSingleTypeMovies(genr).subscribe((res) => {
      this.documantaryMovieResult = res.results;
    })
  }

  scienceFictionData(genr: string) {
    this.service.fetchSingleTypeMovies(genr).subscribe((res) => {
      this.scienceFictionMovieResult = res.results;
    })
  }

  thrilleData(genr: string) {
    this.service.fetchSingleTypeMovies(genr).subscribe((res) => {
      this.thrilleMovieResult = res.results;
    })
  }

}
