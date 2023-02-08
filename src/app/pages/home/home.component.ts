import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import SwiperCore, {
  Navigation, Pagination, Scrollbar,
  A11y, Virtual, Zoom,
  Autoplay,
  Thumbs,
  Controller
} from 'swiper';
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
  bannerResult: any = [];
  trendingMovieResult: any = [];
  getDataResult: any = []
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
    let genrNumber = this.categories.map((genrNumber) => {
      return genrNumber.genr;
    });
    this.bannerData();
    this.trendingData();
    this.actionData(genrNumber);
    this.advantureData(genrNumber);
    this.animationData(genrNumber);
    this.comedynData(genrNumber);
    this.documantaryData(genrNumber);
    this.scienceFictionData(genrNumber);
    this.thrilleData(genrNumber);
    this.getData('28');
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

  getData(sort: string): void {
    this.service
      .fetchSingleTypeMovies(sort)
      .subscribe((res) => {
        this.getDataResult = res.results;
      });
  }

  actionData(genr: Array<string>) {
    this.service.fetchSingleTypeMovies(genr[0]).subscribe((res) => {
      this.actionMovieResult = res.results;
    })
  }

  advantureData(genr: Array<string>) {
    this.service.fetchSingleTypeMovies(genr[1]).subscribe((res) => {
      this.adventureMovieResult = res.results;
    })
  }

  animationData(genr: Array<string>) {
    this.service.fetchSingleTypeMovies(genr[2]).subscribe((res) => {
      this.animationMovieResult = res.results;
    })
  }

  comedynData(genr: Array<string>) {
    this.service.fetchSingleTypeMovies(genr[3]).subscribe((res) => {
      this.comedyMovieResult = res.results;
    })
  }

  documantaryData(genr: Array<string>) {
    this.service.fetchSingleTypeMovies(genr[4]).subscribe((res) => {
      this.documantaryMovieResult = res.results;
    })
  }

  scienceFictionData(genr: Array<string>) {
    this.service.fetchSingleTypeMovies(genr[5]).subscribe((res) => {
      this.scienceFictionMovieResult = res.results;
    })
  }

  thrilleData(genr: Array<string>) {
    this.service.fetchSingleTypeMovies(genr[6]).subscribe((res) => {
      this.thrilleMovieResult = res.results;
    })
  }

}
